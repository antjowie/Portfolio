---
title: Movement of player part 2
date: 2017-10-07T10:08:14+00:00
comments: true
---
So to implement acceleration. The smartest thing to do would be to use real-life formulas. What can be more realistic or accurate than that? Oddly enough, I decided to use my own formula for it. I did it this way because I thought it would be more fitting for my game, while I&#8217;m not so sure about the pros and cons, I decided to implement them both with different games. When I&#8217;m going to make another game in the near future, I will use real life formulas for my game, Right now though, I&#8217;m going to use my own implementation.

Let&#8217;s get started. First off, I start with my pseudocode. The reason why is because I think it is alway better to thoroughly devise your plan, instead of making it on the go. It&#8217;s easier to scrap a plan than to scrap a building. It also makes it easier to recognize bugs or flaws in your logic. The pseudocode goes as follows.

{{< highlight txt >}}
Get players 
requested move direction
Update specific acceleration values with acceleration
Check if acceleration values are in maxAcceleration bounds
Update position with acceleration
Update position with gravity
Check for collisions
Update all acceleration values with deceleration
Check if acceleration values are supposed to be zero when decalerating
{{< /highlight >}}

Looks good. While it may look a bit vague like &#8220;Update specific acceleration values with acceleration&#8221;, all this really means is that we increase the acceleration of the direction the player wanted to move in. We have two variables and one local variable. The two variables in the class will be m\_moveDirection, which track the requested move direction and m\_acceleration, which will track the acceleration of each direction. Our local variable, m_movement, will track the movement that will be made to the player. All our movement calculation will be done onto this vector. To get the specified direction, I wrote this code.

{{< highlight cpp >}}
if ((isItemPressed("moveUp") || isItemPressed("jump")) && !m_hasJumped)
{
    m_moveDirection.y = -1;	
    m_hasJumped = true;
}
	
if (isItemPressed("moveLeft")) 
    m_moveDirection.x -= 1;
if (m_moveDirection.x < -1) 
    m_moveDirection.x = -1; 
if (isItemPressed("moveRight"))
    m_moveDirection.x += 1; 
if (m_moveDirection.x > 1) 
    m_moveDirection.x = 1;

m_isCrouching = isItemPressed("moveDown");
{{< /highlight >}}

The function isItemPressed just returns true when the button is pressed. m_hasJumped is a bool value which purpose it to make sure the player can only jump once.

With the direction out of the way, the interesting part comes. The movement consists of three parts.

  * Update requested direction accelerations
  * Check move bounds
  * Move player with corresponding accelerations
  * Decrease all accelerations

I will explain all implementations for one direction since the same logic applies in almost all directions. Implementation of the first part is as follows.

{{< highlight cpp >}}
if (m_moveDirection.x == 1)
{
    if (m_acceleration.x < 0)
        m_acceleration.x = 0;
    m_acceleration.x += accelerate;
}
{{< /highlight >}}

We use the m_moveDirection value to see whether or not the player wants to move in that direction. Then we check if the player previously moved in the opposite direction. If he did, the movement in that direction will immediately stop. Of course, you could not do that and make for some weird movement over which the player has less control. While this would increase the difficulty of the game, I think it is not the right way to do so since it will only lead to more frustration. It would not feel more rewarding in any way. Alas, we will update the players&#8217; movement with an accelerate value which is defined somewhere (maybe by the level or the player self). One thing to note about the added acceleration is that you should do that times the elapsed time. We can not assume this function would be called at the same frequency every time. In my case, I have defined the accelerate value with the elapsed time already applies to it.

Now we have to check the bounds, which is really simple. Too simple to explain, but I will still put it down here.

{{< highlight cpp >}}
if (m_acceleration.x > maxAccelerate) 
    m_acceleration.x = maxAccelerate;{{< /highlight >}}

For our next part, we have to move the player with the corresponding accelerations. See the following code.

{{< highlight cpp >}}
if (m_acceleration.x > 0)
{
    movement.x = speed * m_acceleration.x;
    m_player.move(movement.x * elapsedTime, 0);
}
{{< /highlight >}}

Again quite simple, it really isn&#8217;t difficult, but you just have to make sure that every value is going to be correctly calculated. Let me explain the speed value. The speed value is a number of pixels I want the player to move in one second. By multiplying it with m_acceleration. We can double the speed of this. That way, we can make speed go twice as fast. The rest should make sense I hope, If not, feel free to ask down below.

And for the last part of the loop, we will implement our deceleration. Which is as simple as the following.

{{< highlight cpp >}}
if (m_moveDirection.x == 0 )
{
    if (m_acceleration.x > 0)
    {
	m_acceleration.x -= decelerate;
        if (m_acceleration.x < 0)
            m_acceleration.x = 0;
    }
    else if (m_acceleration.x < 0) 
    { 
        m_acceleration.x += decelerate; 
        if (m_acceleration.x > 0)
            m_acceleration.x = 0;
    }
}
{{< /highlight >}}

It may not look that simple, but it really is simple. Let&#8217;s deconstruct is. First, we check if the player isn&#8217;t moving. If so, we can decelerate. Then we check in which direction we have to decelerate. If we are still moving to the right, we should subtract from our acceleration. The last thing to check is that if we are decelerating, are we not going into the opposite direction. Otherwise, the player would be jumping from right to left endlessly. That should be it right?

Oh no, one thing I almost forgot! Gravity! Gravity was probably the hardest of all because it follows a different way of calculating. Well, not really. I mean, look at the following.

{{< highlight cpp >}}
if (m_bottomDistance == 0) // If player is in air
{
    m_acceleration.y += gravity * 2 * elapsedTime;
    m_player.move(0, gravity * elapsedTime);
    distanceTillBottomCollision();
}
if (m_bottomDistance > 0) // If player is in ground
{
    m_player.move(0, -m_bottomDistance);
    m_hasJumped = false;
}
{{< /highlight >}}

Oh no, magic numbers. I really dislike those, because they are usually signs of bad coding, or just laziness, you could give it a name, couldn&#8217;t you? Wait, let me explain. When somebody uses magic numbers and uses some sort of unrelated or related value and uses that result as a parameter. A thing may get out of hand when changing the related or unrelated value. I just think it doesn&#8217;t look right so why did I use them? It&#8217;s quite simple. As of right now, gravity and acceleration are the same. Which means that when the player jumps. It will take a long time before he drops again. So I speeded that process up twice as fast. This way, the player will always drop twice as fast as previously, no room for error, I hope. The rest is self-explanatory with the comments I hope. If not, you know where to ask by now.

That&#8217;s all there is to it. See a demonstration of the result down below.

{{< youtube s9v7cGpLnak >}}

Should I allow the player to always jump once, I don&#8217;t know. But that&#8217;s not the discussion for this post. That&#8217;s something game design related. Oh, and if you are interested in the whole implementation of my movement. You can find it at by clicking <a href="https://github.com/antjowie/Runaway/blob/master/Runaway/source/objects/PlayerObject.cpp" target="_blank" rel="noopener">GitHub</a>. Just scroll to input the input related section or something. I&#8217;m not sure how my project will advance.

You&#8217;ve made it quite far, this is the end of this post, my longest post as of now! Thank you for reading. If you have any question or have some commentary regarding these longer posts. Please tell me. Do you prefer longer or shorter posts? I&#8217;m all open for suggestions.

Have a lovely day!

[Return to the project page][1].

 [1]: {{< ref "runaway.md" >}}