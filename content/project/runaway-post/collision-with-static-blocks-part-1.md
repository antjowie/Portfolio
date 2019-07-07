---
title: Collision with static blocks part 1
date: 2017-10-02T17:58:30+00:00
comments: true

---
Normally part 1 starts at the planning phase, but I already started this projects before I made this site. With that out-of-the-way, let&#8217;s discuss our problem.

With our basic move set done, we are ready to add collision. There are many ways to program collision. The way I&#8217;ve chosen to do it is by calculating the vertical distance from the player to his first solid lower block. This way, when the distance is negative, we can snap the player back into a correct distance. Which is important because else the player will be stuck in place. I will program this for every direction the block can go. We will have functions calculating the distance till the upper, left, right and lower side of solid blocks.

# Distance Formula

The way to calculate the distance between a block to a player is really easy. You just take the player point which you subtract some point of the side of a solid block. This will give you a vector.

{{< highlight cpp >}}
playersPoint - blockSidePoint = distanceVector
{{< /highlight >}}

The second parameter (not sure if that is correct terminology) of the vector will be the vertical distance. This can be applied to all the blocks. This way, we will have the distances from every solid block towards the player. Which could function nicely for debug purposes, or maybe not, who knows?

# Snapping the player out of the block

The second function we have to add is the snapping back function, which is as simple as negating the negative distance and moving the player with that value.

That&#8217;s all to the distance formula. Any questions can, of course, be asked down below. Discussing your favorite movie is also allowed. We are supposed to discuss in the comment section, aren&#8217;t we? Either way, have a wonderful day. Also minor spoiler, but this implementation didn&#8217;t work as expected. I will fix this is a next subpart which you can find by clicking [here][1], also known as part 1.1.

[Return to the project page.][2]

 [1]: {{< ref "collision-with-static-blocks-part-1-1.md" >}}
 [2]: {{< ref "runaway.md" >}}