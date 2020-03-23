import React, { Component } from 'react';
import './App.css';
import Shark from './Shark.js';
import AutomaticStop from './Automatic_Stop.mp3';

class App extends Component {

	constructor(props) {
		super(props)

		this.createVisualization = this.createVisualization.bind(this)
	}

	componentDidMount() {
		this.createVisualization()
	}

	createVisualization() {
		let context = new AudioContext();
		let analyser = context.createAnalyser();

		let canvas = this.refs.analyserCanvas;
		canvas.style.background = "blueviolet";

		let dpi = window.devicePixelRatio;
		let scale = dpi;

		canvas.width = canvas.width * scale;
		canvas.height = canvas.height * scale

		let ctx = canvas.getContext('2d');
		ctx.scale(scale, scale)

		let audio = this.refs.audio;
		audio.crossOrigin = "anonymous";

		let audioSrc = context.createMediaElementSource(audio);
		audioSrc.connect(analyser);
		audioSrc.connect(context.destination);
		audioSrc.connect(context.destination);
		
		function renderFrame() {
			let fishData = new Uint8Array(Shark)
			let freqData = new Uint8Array(analyser.frequencyBinCount)
			for(let i; i < fishData.length; i++) {
				for (let j = 0; j < freqData.length; j++) {
					freqData[j] *= fishData[i];
					console.log(freqData)
				}
			}
			requestAnimationFrame(renderFrame)
			analyser.getByteFrequencyData(freqData)
			ctx.clearRect(0,0, canvas.width, canvas.height)
			ctx.fillStyle = 'deeppink';
			// 'z-indez' shark details
			ctx.globalCompositeOperation='destination-over';
			ctx.beginPath(); // shark eye
			ctx.arc(250, 130, 4, 0, Math.PI * 2, true);
			ctx.stroke()

			// shark gills
			ctx.beginPath()
			ctx.arc(105, 140, 35, Math.PI*1.75, Math.PI*2, false);
			ctx.stroke()
			ctx.beginPath()
			ctx.arc(115, 140, 35, Math.PI*1.75, Math.PI*2, false);
			ctx.stroke()
			ctx.beginPath()
			ctx.arc(125, 140, 35, Math.PI*1.75, Math.PI*2, false);
			ctx.stroke();

			// shark teeth
			ctx.beginPath();
			ctx.moveTo(280, 145);
			ctx.lineTo(275, 140);
			ctx.lineTo(270, 145);
			ctx.lineTo(265, 140);
			ctx.lineTo(260, 145);
			ctx.lineTo(255, 140);
			ctx.lineTo(250, 145);
			ctx.lineTo(245, 140);
			ctx.lineTo(240, 145);
			ctx.lineTo(235, 140);
			ctx.lineTo(230, 145);
			ctx.stroke();

			let bars = 500;
			for (var i = 0; i < bars; i++) {
				let bar_x = i * 3;
				let bar_width = 2;
				let bar_height = -(((freqData[i]) / 10) + fishData[i]);
				ctx.fillRect(bar_x, canvas.height - 50, bar_width, bar_height)
			}
		};
		renderFrame()
	}

	render() {
		return (
			<div className="App">
				<div id="mp3_player">
					<div id="audio_box">
						<canvas
							ref="analyserCanvas"
							id="analyser"
							/>			
						<audio
						ref="audio"
						controls={true}
						src={AutomaticStop}
						onClick={this.createVisualization}
						/>
						<h2>
							Automatic Stop - The Strokes
						</h2>
					</div>
				</div>
			</div>
		);
	}
}


export default App;