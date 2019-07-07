---
title: Movement of player part 1
date: 2017-10-07T10:07:14+00:00
comments: true
---
Implementing movement can be as simple as adding values to the players&#8217; position to calculating their position with all kinds of forces integrated into a formula. Because [Runaway][1] will be a simple but quite challenging game, I will implement an acceleration based move set. This way, the player will need to think about how long he keeps buttons pressed, and I can add some interesting game mechanics to keep levels feel a bit different from each other.

So let&#8217;s talk thoughts. To implement an acceleration based movement class. It should be logical to use real-life formulas. I&#8217;m not going to because I want to keep this class rather simple, but I am planning to do so later on. Right now, I only want a movement class which allows the player to move and have it feel like you&#8217;re accelerating.

The most important thing about implementing a movement class is to make sure that the amount of movement stays the same for every state the game is in. With state, I mean the fps of the game. You can&#8217;t just assume that a game will run this fast at every moment, so you have to use an elapsed time value. The value between two frames. This way, when setting up our movement values. We can specify how much the player should move in a second. Look at the following lines.

{{< highlight cpp >}}
// Get the time between the function calls
float elapsedTime = time.thisCall() - time.previousCall();

// Assuming the player wants to move right
float movePixelsToRight{ 32 }; // Amount of pixels to move in one second

player.move(movePixelsToRight * elapsedTime);
{{< /highlight >}}

This makes sure that for every fps the player will move the same amount.

So to implement this kind of movement (acceleration based). We will need to increase the speed while the corresponding movement button is being pressed. And the implementation of that will be discussed in the next [part][2].

Thank you for reading and have a cheerful day!

[Return to the project page][1].

 [1]: {{< ref "runaway.md" >}}
 [2]: {{< ref "movement-of-player-part-2.md" >}}