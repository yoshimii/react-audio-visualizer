# Ode to Music

When I started coding I found myself listening to music less and less. Turns out I code best in total silence. To those who enter my code dungeon that see me with noice cancelling headphones on: that's mostly to keep external noise out. Nothing is actually playing. But that is not a sustainable habit for a creative like me. It took a pandemic to remind me that I intended for music and art to always be a part of my life, especially in my work (code). So this is my first scrappy creative coding project, made on a  Sunday morning.

## Live demo

Coming to a Netlify server near you.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Resources

[Ellie Howard's React audio visualization tutorial](https://github.com/elliehoward/react-audio-visualization)  
[The Strokes, Support the band here](https://www.thestrokes.com/)
[MDN: AnalyserNode](https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode)  
[React: Refs and the Dom](https://reactjs.org/docs/refs-and-the-dom.html)
[MDN: Canvas Tutorial, Drawing Shapes](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)
[W3Schools: Canvas arc()](https://www.w3schools.com/tags/canvas_arc.asp)

## Journal

Why Automatic Stop? It gives me so many feels. I love bass. It would be neat to focus illustration (visualization) on the bass notes.  
I am also a huge proponent of good-old-fashioned radio. Hmmm. Radio requires more thought. I'd like to do something more than a visualizer.  
Now playing: 11th Dimension - Julian Casablancas "Oh, I've got music coming out of my hands and ears and kisses" Sounds like something Bob Dylan would say.  

### Phase 1

Got the basic mp3 player working with valid mp3 urls.  
When the music pauses the frequency bars go down to zero. I'd like this zero state to be shaped like a fish to reference a lyric in the song.  
A next step would be to figure out how to reference the point in time when the lyric is said and freeze the frequency bars in place and visualize with the fish for the duration of the lyric. Even further, it would be cool to do several shapes that reference the lyrics throughout the song.  

Ellie's tutorial has gotten me this far, so it's back to sailing solo through documentation. Spring off the docs!

I thought I'd draw a fish and create an array of numbers to sum against the array of frequencies, but that would increase all the frequencies at once.I need to figure out how to reference different bars in the frequencies at a single point in time. I'll start my search  here.

### Phase 2

Figured out that the frequency data I need under my variable... freqData. It's a 1024 unit array storing the frequencies across the canvas bars drawn for each point in time.
I got sidetracked styling a bit but noticed that when I stretch the canvas I get blurry bars. That's bad. Note: look into window.devicePixelRatio

Sidetracked again: trouble finding a way to host an audio file with out getting blocked by CORS. May have to host the song myself on a database.

Back to drawing fish.
Awesome. Turns out I can't just add an array of numbers the freqData array. I had to create an instance of the Uint8Array by passing it my array:
> The Uint8Array typed array represents an array of 8-bit unsigned integers. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).
> Constructor: Uint8Array(), Creates a new Uint8Array object.

Like so: let fishData = new UintArray(Shark) // Shark is a normal array where each index contains the y value which plots the top outline of a shark

I drew the shark with some basic quadratic graph formulas, breaking up the shark into curves. I stored the y values in an array and added them to the frequency bars as planned. This produced a 'noisy' shark!

I then spent way too much time relearning the unit circle to draw some gills and the shark eye, mostly referencing the MDN canvas guide for drawing shapes. Also drew some teeth. All canvas context properties used: beginPath(), lineTo(), moveTo(), arc(), stroke(), and fill(), fillStyle(), fillRect(), and clearRect().

## Final Notes

Finally imported the song into my App component! Styled it a bit. The canvas (pink bars) is still blurry but I'm happy with my great pink shark.

### Next Steps

[] Style
[] Add animations
[] Drag and drop a file to play (this may be for a future mp3 player)

#### Learn More

Learn more about timing (is it possible to work with data at a specific point in time in an audio file)
