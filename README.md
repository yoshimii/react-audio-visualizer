# Ode to Music

When I started coding I found myself listening to music less and less. Turns out I code best in total silence. To those who enter my code dungeon that see me with noice cancelling headphones on: that's mostly to keep external noise out. Nothing is actually playing. But that was not a sustainable habit for a creative like me. It took a pandemic to remind me that I intended for music and art to always be a part of my life, especially in my work (code). So this is my first scrappy project, made on a  Sunday morning.

## Live demo

Coming to a Netlify server near you.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Resources

[Ellie Howard's React audio visualization tutorial](https://github.com/elliehoward/react-audio-visualization)
[MDN: AnalyserNode](https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode)
[React: Refs and the Dom](https://reactjs.org/docs/refs-and-the-dom.html)

## Journal

Why Automatic Stop? It gives me so many feels. I love bass. It would be neat to focus illustration (visualization) on the bass notes.
I am also a huge proponent of good-old-fashioned radio. Hmmm. Radio requires more thought. I'd like to do something more than a visualizer.
Now playing: 11th Dimension - Julian Casablancas "Oh, I've got music coming out of my hands and ears and kisses" Sounds like something Bob Dylan would say.

Got the basic mp3 player working with valid mp3 urls.
When the music pauses the frequency bars go down to zero. I'd like this zero state to be shaped like a fish to reference a lyric in the song.
A next step would be to figure out how to reference the point in time when the lyric is said and freeze the frequency bars in place and visualize with the fish for the duration of the lyric. Even further, it would be cool to do several shapes that reference the lyrics throughout the song.

Ellie's tutorial has gotten me this far, so it's back to sailing solo through documentation. Spring off the docs!

I thought I'd draw a fish and create an array of numbers to sum against the array of frequencies, but that would increase all the frequencies at once.I need to figure out how to reference different bars in the frequencies at a single point in time. I'll start my search  here.
