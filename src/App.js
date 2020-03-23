import React, { Component } from 'react';

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

		let canvas = this.refs.analyzerCanvas;
		let ctx = canvas.getContext('2d');

		let audio = this.refs.audio;
		audio.crossOrigin = "anonymous";

		let audioSrc = context.createMediaElementSource(audio);
		audioSrc.connect(analyser);
		audioSrc.connect(context.destination);
		audioSrc.connect(context.destination);
		
		function renderFrame() {
			let freqData = new Uint8Array(analyser.frequencyBinCount)
			requestAnimationFrame(renderFrame)
			analyser.getByteFrequencyData(freqData)
			ctx.clearRect(0,0, canvas.width, canvas.height)
			console.log(freqData)
			ctx.fillStyle = 'green';
			let bars = 100;
			for (var i = 0; i < bars; i++) {
				let bar_x = i * 3;
				let bar_width = 2;
				let bar_height = -((freqData[i] / 2) + 1);
				ctx.fillRect(bar_x, canvas.height, bar_width, bar_height)
			}
		};
		renderFrame()
	}

	render() {
		return (
			<div className="App">
				<h1>
					The Strokes: Automatic Stop
				</h1>
				<div id="mp3_player">
					<div id="audio_box">
						<audio
						ref="audio"
						autoPlay={true}
						controls={true}
						src={"https://p.scdn.co/mp3-preview/e4a8f30ca62b4d2a129cc4df76de66f43e12fa3f?cid=null"}
						/>
						<canvas
							ref="analyzerCanvas"
							id="analyzer"
						/>			
					</div>
				</div>
			</div>
		);
	}
}


export default App;