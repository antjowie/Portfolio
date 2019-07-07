---
title: Light part 1
date: 2017-11-09T20:11:05+00:00
comments: true
---
This part will discuss the games light system. So let&#8217;s start off with devising one. I&#8217;ll first make a simple drawing so we&#8217;re on the same page.

{{< figure src="/img/projects/runaway/Ligth-example.png" title="Simple drawing showing my idea of the light" >}}

Pretty simple right! I thought so, this is by no means a complex game. If you do not the objective of the game yet, allow me to explain. Else you can skip over the following paragraph.

Runaway will be a 2D side-scrolling fast-paced puzzle game. The player has only one tool to get around, his light. When the player arrives in a dark zone. Light blocks will emit light as does the player. The player his light, however, get&#8217;s depleted while he is present in a dark zone. In the dark zone, the player has to solve a or several puzzles. The player can toggle switches by emitting light in them or use his light to dash away, a mechanic used for some puzzles. The player can also recall towards his latest checkpoint for the cost of some of his light. The player can recharge his light by standing in a light pool, which is my term for a place where light is present.

So observing this picture we need to have light blocks emit their light. The light spread a half block wide for every block it travels down. I will also render a darkened overlay when the player is entering a dark zone.

# Devising a class

So we need a class with the following functions

  * A way to draw light rays.
  * A way to draw the dark overlay.
  * A way to find all the light emitting blocks.
  * A way to check if the player is inside light rays.

Not all of these must be handled by one class (although I&#8217;m planning to do just that). Doesn&#8217;t sound like this class is too hard to make. During my five-minute brainstorm session, I came up with the following solutions

  * Make a vector containing all the light emitting tiles and render them above a dark overlay. The overlay itself will be written over the whole scene.
  * Make holes in the dark overlay where all the light emitting tiles are supposed to be. This way only the non-light emitting tiles will emit light.
  * Draw all the light emitting blocks onto an off-screen texture. Multiply the whole scene by this texture.

Let&#8217;s discuss each solution.

The first solution is by far the most simple one. Just make a vector with pointers towards the tiles which emit light in the level tilemap. Then draw a dark overlay over the whole scene and draw your light objects on top. This solution, however, breaks the gate tile. Because the gate tile will be rendered above other blocks. Something which I fixed before by first rendering all the gate tiles. This solution is busted.

The second solution sounds easy on paper. But I couldn&#8217;t find a way to &#8216;subtract&#8217; shapes from a shape. Maybe I could overwrite rectangles in the large overlay, but I have the feeling that this would give me a system with some crazy limitations. It probably can&#8217;t ever be expanded. Just for that reason alone, I don&#8217;t think this is the appropriate solution.

The last solution sounds the most interesting. I have been reading some source code of the library for this project (<a href="https://www.sfml-dev.org/index.php" rel="noopener">SFML</a>) and came to a conclusion that I&#8217;m using it wrong. Something I noticed with programming specifically is that many solutions I have made in the past just seem plain inefficient or ugly right now. So I have changed all my code to be a bit more logical. Something the user won&#8217;t notice though.

# Blend Modes

I came up with this solution when I started reading the source code. It said something about blend mode. Blend mode determines how new to be drawn pixels affect the buffer in which pixels may already have been drawn. We got 4 different blend modes. I decided to write <a href="https://github.com/antjowie/Blend-test" rel="noopener">a little program</a> to test how each of these blend modes reacts.

Blend add adds colors which each other. When we add the color red and green, we get yellow. The same results are shown in the program.

{{< figure src="/img/projects/runaway/Blend-add.png" title="Showcases the result of using blend add" >}} 

Blend multiply multiplies the colors. But what does it mean to multiply colors? Time to test! I noticed that multiply darkens the whole scene. So my conclusion is that multiply effects the brightness of the objects it is drawn over.

{{< figure src="/img/projects/runaway/Blend-multiply.png" title="Showcases the result of blend multiply" >}} 

Something I noticed when swapping the dark overlay to draw itself first are the following results.

{{< figure src="/img/projects/runaway/Overlay-before.png" title="Shows the results when overlay is drawn before all the objects are drawn" >}}

As you can see, the cube with blend mode add shows different behavior than the one with blend mode none. This seems rather odd because mixing green with red makes yellow. So why is it showing black? The blend mode can&#8217;t be the culprit because in the previous image the blend mode none cube also got a bit darker. It probably has something to do with the darkness filter. On the interesting note. See how using blend mode add onto the (blend mode add) cube makes it the same color as the background. And using blend mode add to the background restores its original color. This means that if we use a blend mode add with all the light objects. Every light object will remain in its original color.

Unfortunately, it doesn&#8217;t work. In this case, the dark overlay is drawn first. So the already existing scene won&#8217;t be affected. I do, however, have another idea. And that is with the use of blend mode Multiply.

# Using Blend Mode Multiply

With blend mode multiply we can darken everything on the scene. I have written a small bit of code to test this out and the results are great.

{{< figure src="/img/projects/runaway/Testing-renderTexture.png" title="Testing dark overlay" >}} 

As you can see. The object which we add to the buffer will not change from color. That is exactly the result I want. To achieve this, you will have to do the following bit of code.

{{< highlight txt >}}
Clear window
Clear RenderTexture
Draw all sprites to window

Draw dark overlay to RenderTexture
Draw all light objects with BlendAdd to RenderTexture

Set overlaySprite texture to RenderTexture
Draw overlaySprite with BlendMultiply to window

Display window
{{< /highlight >}}

That&#8217;s all there is to it. Now that we have the system nailed down. We will start implementing it into the game. One thing to note for the gate problem is to use the default gate positions.

# Implementing Into The Game

Let&#8217;s start designing a class which handles all the light objects. This class will also draw the darkened overlay. That way, this class is responsible for all light emitting objects. This class needs the following functions.

  * Function to add tiles
  * Function to draw the whole texture
  * An update function for the darkened overlay
  * A function to specify the amount we want to darken the screen
  * An init function to set the texture as large as the level
  * A function to specify the fade time

Because I want the class to fade from his brightness, a local elapsed time value is used. We modify this value with our fade time to specify how long we want the fade to take. The same technique can be used to slow down game mechanics

With the help of a linear interpolation function, we can find the exact color at a given to for the overlay to display. The elapsed time value will be divided by the fade time value. This will always give a value between 0 and 1 if we make sure that the elapsed time value is not larger than the fade time value.

With the use of blend modes, we then draw all our light objects onto the darkened buffer. By doing this, the tiles which &#8217;emit&#8217; light will not be affected by the darkened overlay. We are making &#8216;holes&#8217; in our overlay, or we are multiplying the texture with the same texture, which results in the same texture.

Having said all this. The function work beautifully. Everything from the fade to the light &#8217;emitting&#8217; tiles are not effected. There is only one problem.
{{< figure src="/img/projects/runaway/Light-test-1.png" title="Shows the results of the light class in action" >}} 

As you can see, the gates are still visible even after closing. Quite a bummer. I also know why. So my next part `(it never came)` will be about fixing this problem.

Still, the class works as it is supposed to. If you want to take a look at the code. You can click <a href="https://github.com/antjowie/Runaway/blob/master/Runaway/source/Light.cpp" rel="noopener">here </a>to open a link to the GitHub page. With all that said, I thank you for reading this post about light. Any question or suggestions can be written down in the comments. I wish you a beautiful day.

[Return to the project page][2].

 [2]: {{< ref "runaway.md" >}}