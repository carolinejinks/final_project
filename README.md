Week 1
This week I created original images in Adobe Illustrator and exported them as transparent PNG files. I then placed them within sections that had a max-width of 25% (images at 100% within the section) so that the information within the sections were in four responsive columns when I incorporated the floats.

I also wrote text for the images within these sections. I used the following data and referenced the following Wikipedia pages for content.





I built a header with a sleek font and a nice-looking background but decided not to make it fixed because I thought it would be distracting when users scroll through the page and try to take in all the animation/graphics.

My biggest struggle was getting the audio clips to play when the mouse hovered over them. I tried many different javascript techniques and never got the outcome I was looking for until I found this code:

code used for audio play found here: http://stackoverflow.com/questions/3013883/play-audio-file-on-hover-and-stop-playing-on-mouseout

It is not the way I have been using javascript as it is embedded within the HTML, however it worked when I tested it and was the only code that made sense with the way I had set up my page. I made each image a button and hid the audio using javascript so that when the mouse enters the button the audio clip plays and when the mouse leaves the button it pauses. The audio clips are 30 seconds and from songs off of the albums that are referenced in the corresponding text.
