---
title: Animation and sprite sheet part 2.1
date: 2017-10-07T12:09:53+00:00
comments: true
---
Hello, today we will discuss the problem surrounding the not that groundbreaking (or should I say game-breaking?) glitch seen in this video.

{{< youtube 1YNBxzX-38c >}}

Absolutely horrible! How could this happen? We will discuss that right here. This was the implementation.

{{< highlight cpp >}}
// Brace for some ugly vector checking

if (newPos.x > 0 && newPos.y == 0)
	m_animHandler.changeAnimation(playerDirection::Right);
else if (newPos.x < 0 && newPos.y == 0) 
        m_animHandler.changeAnimation(playerDirection::Left); 
else if (newPos.x >= 0 && newPos.y != 0)
{
	if (newPos.y > 0)
		m_animHandler.changeAnimation(playerDirection::DropRight);
	else
		m_animHandler.changeAnimation(playerDirection::JumpRight);
}

else if (newPos.x <= 0 && newPos.y != 0) { if (newPos.y > 0)
		m_animHandler.changeAnimation(playerDirection::DropLeft);
	else
		m_animHandler.changeAnimation(playerDirection::JumpLeft);
{{< /highlight >}}

Can you see the problem, I obviously couldn&#8217;t. It all seemed correct, so what was the problem? For that, I decided to use the powerful debug functions. By setting some breakpoint, I could read the values of newPos while I was trying to recreate the bug. The result was weird. For some reason. newPos.y was a very, very small value. It was 1⋅10ˆ−5. Why this happened, I don&#8217;t know. For some reason only at that specific place. So, how do I fix this? The way I fixed it seemed rather incorrect, but it did get the job done. I even tested it on different states of the game(referring to the fps). Instead of comparing it with zero, I compared it with an offset, so that small values wouldn&#8217;t matter. Take a look at the following.

{{< highlight cpp "hl_lines=2 5 7 11 13 16 18 20" >}}
// Brace for some ugly vector checking
float offset{ elapsedTime };

// Horizontal movement
if (newPos.x > offset && newPos.y > -offset && newPos.y < offset)
	m_animHandler.changeAnimation(playerDirection::Right);
else if (newPos.x < -offset && newPos.y > -offset && newPos.y < offset) 
        m_animHandler.changeAnimation(playerDirection::Left); 

// Vertical movement 
else if (newPos.x >= -offset && (newPos.y < -offset || newPos.y > offset))
{
	if (newPos.y > offset)
		m_animHandler.changeAnimation(playerDirection::DropRight);
	else
		m_animHandler.changeAnimation(playerDirection::JumpRight);
}
else if (newPos.x <= -offset && (newPos.y < -offset || newPos.y > offset))
{
	if (newPos.y > offset)
		m_animHandler.changeAnimation(playerDirection::DropLeft);
	else
		m_animHandler.changeAnimation(playerDirection::JumpLeft);
}

// No movement
else
	m_animHandler.changeAnimation(playerDirection::Rest);
{{< /highlight >}}

We now compare it with an offset which is dependent on the elapsed time. For some reason, there was a relation between the elapsed time and the very low value. But it is fixed now, and or player can walk around without breakdancing.

Have a productive day!

[Return to the project page][1].

 [1]: {{< ref "project/runaway.md" >}}