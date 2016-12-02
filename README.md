Week 1:
This week I created original images in Adobe Illustrator and exported them as transparent PNG files. I then placed them within sections that had a max-width of 25% (images at 100% within the section) so that the information within the sections were in four responsive columns when I incorporated the floats.

I also wrote text for the images within these sections. I used the following data and referenced the following Wikipedia pages for content.

-https://en.wikipedia.org/wiki/Gramophone_record
-https://en.wikipedia.org/wiki/Compact_Cassette
-https://en.wikipedia.org/wiki/Compact_disc
-https://en.wikipedia.org/wiki/MP3

I built a header with a sleek font and a nice-looking background but decided not to make it fixed because I thought it would be distracting when users scroll through the page and try to take in all the animation/graphics.

My biggest struggle was getting the audio clips to play when the mouse hovered over them. I tried many different javascript techniques and never got the outcome I was looking for until I found this code:

code used for audio play found here: http://stackoverflow.com/questions/3013883/play-audio-file-on-hover-and-stop-playing-on-mouseout

It is not the way I have been using javascript as it is embedded within the HTML, however it worked when I tested it and was the only code that made sense with the way I had set up my page. I made each image a button and hid the audio using javascript so that when the mouse enters the button the audio clip plays and when the mouse leaves the button it pauses. The audio clips are 30 seconds and from songs off of the albums that are referenced in the corresponding text.

I am really proud of my images and the audio that comes with them. I'm really excited to make them animate! Something that I think would make them look nicer would be having them lined up so that the text for each column is aligned at the top. I am considering putting the images and the text in separate sections but I am concerned about how to set up the floats. This could be something I can improve upon.

Week 2:
This week I created the sections to appear when each image is clicked. I made them fill the entire page and toggle from the bottom when they appear. In order to get back to the original page the user simply clicks anywhere within the section to make it disappear. I put the entire page within an article that I then hid when the image was clicked. Then I reversed this process when the sections were clicked. To do this I used the following fiddle to help me.

https://jsfiddle.net/macloo/bmLf12nd/

I also was able to animate my images when hovered-hooray! Because not all of my images were to animate the same way, I used two methods.

For the record and cd I used a CSS tutorial for rotation animation on an image found here along with addition useful code.

https://codepen.io/valhead/pen/rfump
http://stackoverflow.com/questions/10123700/how-to-make-a-picture-rotate-continuously

For the tape and the sound wave I created GIFs because I didn't want the entire image to rotate. The static PNGs and GIFs switch out on mouseenter and mouseleave. I used this tutorial for GIF-making and this fiddle to help me.

https://blog.hubspot.com/marketing/how-to-create-animated-gif-quick-tip-ht#sm.000011u72x14ktdmvy7fr261568ff

https://jsfiddle.net/macloo/3qr2jd8t/

These animations will also serve to tell the user which audio clip is active as the song will play while the image is moving! I'm very happy with the way the animations turned out.

Some frustrating road-blocks:

I still can't get the audio to play on mouseenter using the correct javascript code. I've reviewed it a billion times and it seems to me that it should work so I feel something must be off with my syntax or I'm forgetting something minor. I left my code for the #records div to show what I am trying, even though it isn't working.

Another issue is that with all of my added CSS, my page no longer seems to be responsive. This could be because of the @keyframes I added at the bottom that could be throwing off the @media, however I tried flipping the two and nothing changed.

Even though this week's work seemed to conflict with what I did last week, I still think there was significant progress. Even though these issues are frustrating, I know that when they're fixed it will be a big breakthrough!
