---
title: Animation and sprite sheet part 2.2
date: 2017-10-07T12:36:13+00:00
comments: true
---
Another day in the life of a programmer == another day for bugs. For those with a keen eye. You may have noticed something strange in my videos, or rather, something different. Take a look at these two videos before and after the animation handler class.

### Before

{{< youtube 89zMR4OOtpk >}}

### After

{{< youtube 1YNBxzX-38c >}}

Have you noticed it? The player seems to spawn in a different location. But I haven&#8217;t changed anything regarding the spawn location or movement. So why did this happen?

To find the solution for this problem we will take our tools of debugging and start debugging. This time, I wanted to take a look at why the player moved up from the spawn location. So I started thinking, what is making the player move up without our player interfering. There was only one thing which affected player movement, and that is our [collision detection][1]. So what is it that animationHandler did to collisionManager?

For that, I decided to watch over the m_distanceBottom value, which tells us the distance inside of the bottom block. The results were really odd. Our player is only 32 pixels high. But for some reason, the collision manager told us that the player is 160 blocks inside of the bottom block, WHAT? That makes absolutely no sense! So let&#8217;s see what changed that value to such a high one.

Distance calculation was right, so some of the parameters were wrong. So I checked those. And what I saw, was strange. The height of our player was not equal to 32. It was equal to 224. Very odd. So I decided to jump into the code regarding the animation. and there I saw it. So what went wrong?

When I loaded the texture into the player. The players&#8217; hitbox is equal to the size of the whole sprite sheet, which so happens to have a height of 224. When the player calculated the distance till lower collision, It apparently uses the whole sprite sheet. After that phase, the new animation will be calculated, and then the hitbox will be updated to the correct 32. So our hitbox was too big which confused the whole hitbox system. But it is fixed now, by these simple two lines.

{{< highlight cpp >}}
m_animHandler.changeAnimation(1);
m_player.setTextureRect(m_animHandler.getFrame());
{{< /highlight >}}

These lines were putten in the initialize slot. So that our player would spawn with his rest animation in use. That&#8217;s one bug less!

Thank you for reading and have a bug free day!

[Return to the project page][2].

 [1]: {{< ref "collision-with-static-blocks-part-1.md" >}}
 [2]: {{< ref "runaway.md" >}}