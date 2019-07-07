---
title: Light part 1.1
date: 2017-11-11T14:48:59+00:00
comments: true
---
> Just a little note for you, this post is less about the project and more about me. You will notice that halfway through the text I&#8217;m kinda changing the whole message of this post and it becomes less about the program and more about me. If you are not interested in that, you should stop after reading the following chapter.

Back when I added gates to the program. I thought I came up with a great solution. Well, you can&#8217;t really call it a solution, but it did fix the problem at that moment. Now that we have progressed the program. I have learned a valuable lesson. Never beat around the problem. What I thought was a clever solution, only made it harder for me in the long run. So here we are, writing a post about fixing a solution.

# Fixing the solution

Because I already have a general idea of how to fix the problem, I have come up with two solutions. First, let&#8217;s discuss the problem. At the moment, the gate tiles are being moved down. This gives the looks of the gate opening. By moving these tiles down, however, we are overwriting existing tiles. This way the gate tiles will overwrite other tiles. We don&#8217;t want that. So the solution, the one which I should have made for the beginning, is not to move the tiles, but to change the height. This way the tiles won&#8217;t move but will get shorter.

There are two ways I&#8217;m thinking of. I could use two rectangles, one for the lower portion and another one for the upper portion. When the gate is being lowered, I&#8217;ll increase the shape size. When the gate is being risen, I&#8217;ll decrease the shape size. Since the y-coordinate goes down. This is the way how to do it. I can also use vertices and move 2 vertices. But I think that I prefer the simpler solution over the harder one.

I have made a simple program to test this and from using it I have concluded that using shapes is the easiest way.

The following needs to be done:

  * Create a shape from the gate tiles
  * Make two shapes, one for the lower section and one for the upper section
  * When changing the size of the texture, make sure that the texture doesn&#8217;t scale.

The first two are easy to implement. I&#8217;m the most worried about the last one. That needs a little bit of thinking but luckily not too much. All we really have to do is increase the texture rectangle with our new height. This way, the texture will always be the same size as the shape. By turning set repeated off, it appears that the texture will use the last known pixels to extend. Exactly the behavior we&#8217;re looking for. I have tested it with a <a href="https://github.com/antjowie/Shape-resize-test/tree/master" rel="noopener">little test program</a>.

# Implementing The New Solution

It is very easy to implement this fix. All we are going to do is make a shape which is equal to the size of all bottom gate tiles combined. And make one for its opposite direction. Or so I thought.

I actually decided to change the code while writing this update and let me tell you. I had to delete the whole gate class. Everything was wrong. The whole code was a mess like it was really meant to be programmed once and never touched again. Though I could not say for sure because many programmers insist that their &#8216;old&#8217; code is ugly.

I will not write an update about all the changes I have made to the class, you can find those by clicking <a href="https://github.com/antjowie/Runaway/commit/ce49a784762f2faab4cb3280c64df4cd5e64fd0f" rel="noopener">here</a>. I will, however, write down the valuable lessons that I&#8217;ve learned.

Do not write one-time use code. When I wrote the gate class. I&#8217;ve made the weirdest values. Well, it wasn&#8217;t exactly weird, but badly documented. For example, look at the following lines.

{{< highlight cpp >}}
for (unsigned int i = 0; i < middle; i++) 
{ 
  m_tiles[i]->move(0, offset * elapsedTime);
  if (m_tiles[i]->getHitbox().top > m_originalTiles[i].getHitbox().top +
      m_originalTiles[i].getHitbox().height * middle)
    m_tiles[i]->move(0, -(m_tiles[i]->getHitbox().top - 
                    (m_originalTiles[i].getHitbox().top + 
                     m_originalTiles[i].getHitbox().height * middle)));
}
{{< /highlight >}}

Maybe it doesn&#8217;t look complicated for you, but in my head, I had to lay the connections between all these values. I had to again learn why I wrote it this way. It was not meant to be looked at again.

This one isn&#8217;t really a lesson but I have learned how to use timelines in a better way. Maybe not the most impressive thing, but certainly a useful thing.

I have also learned to not depend on the alpha value of colors too much because those will not give you precise results. Or maybe they do, you just can&#8217;t imagine them in real life, because you can&#8217;t just lower the visibility of something, right?

The last thing that I have learned is to efficiently use function calls and make sensible names. This helped me to dodge unnecessary functions (I even found some functions which were never called). I think that this is something that will always improve. Because it is an ability to lay relations between real life objects and your in-game objects.

All in all, I&#8217;m very happy with the end result. Right now I&#8217;m having this feeling of crazy progression. While I may only have added an already existing feature to the program. It makes me glad that everything is starting to work out the way that I have laid it in my mind. I&#8217;m getting the feeling that this project may really come t a realization, wouldn&#8217;t that be amazing. While this may seem like some cheap 2D scroller game, it is my 2D scroller game and knowing that I have made it. Is a little achievement that I will treasure for myself.

I thank you for reading this blog update. This may have been the least informal update that I&#8217;ve posted. It doesn&#8217;t really contain any changes in the code. Maybe I should have posted this on the blog channel. But that doesn&#8217;t matter right now. I&#8217;m sorry for wasting your time like this, but the fact that you&#8217;ve come so far must mean that you were interested. If you were, please leave a comment below with your thoughts. I&#8217;d love to talk about it.

Have a nice programming session!

[Return to the project page][1].

 [1]: {{< ref "runaway.md" >}}