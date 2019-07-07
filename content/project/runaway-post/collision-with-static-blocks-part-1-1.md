---
title: Collision with static blocks part 1.1
date: 2017-10-03T16:27:36+00:00
comments: true
---
In my previous part, my implementation for this function was very barebone. It really wasn&#8217;t thought out well. So in this part, I will explain all my thoughts. So you can see how I calculated all of it.

I first made some basic sketches to see how the coordinates of the player and object relate to each other. You can see them here down below, although it really is unnecessary.

{{< figure src="/img/projects/runaway/Sketch-coordinate-relation-between-object-and-player.jpg" title="Coordinate relation sketch" >}} 

Notice how our y-axis is reversed in our system. This means that when we want to jump, we have to lower our y value.

After drawing some sketches, I continued with some pseudocode. I normally don&#8217;t write pseudocode but after doing it way more often I noticed that it really helps to make sure you devise a logical and well though function.

My pseudocode goes as follows.

{{< highlight cpp >}}
Get player bottom hitbox = bHit
Get tilemap location of player = tLoc
Get bottom 3 blocks and put in vector = bBlocks
For each bBlocks
  If collision bBlocks and bHit
  Player.move y -= bHit.y - bBlocks.y
{{< /highlight >}}

This was my first iteration of the function. While implementing it, I changed some code because that will help with detecting collisions from the other sides.

{{< highlight cpp >}}
// Get lower hitbox 
sf::FloatRect bottomHit{ m_player.getGlobalBounds() };

for (auto iter : surroundingTiles) 
  if (iter->isSolid() && bottomHit.intersects(iter->getHitbox())) 
    return (bottomHit.top + bottomHit.height)- iter->getHitbox().top;

return 0.0f
{{< /highlight >}}

This function checks the surrounding blocks of the player for collision. When the collision is happening, the function will calculate the distance between the block and the player, which should be positive, and returns it so that we can later snap back the player with that distance.

To get surrounding tiles I added the following function

{{< highlight cpp >}}
sf::Vector2i tileMapPlayerCoords{ mapWorldToTilemap(m_player.getPosition()) }; 

std::vector<Tile*> surroundingTiles; 
for (int horizontal = tileMapPlayerCoords.x - 1; horizontal <= tileMapPlayerCoords.x + 1; horizontal++) 
  for (int vertical = tileMapPlayerCoords.y - 1; vertical <= tileMapPlayerCoords.y + 1; vertical++) 
    if (horizontal < tilemap.size() && vertical < tileMap[horizontal].size())  
      // Order shouldn't matter. If we do map this vector to tileMap vector. Our function calls would do 6 comparisons less each 
      // Our first vector is y, the subsequent vectors are x. 

      surroundingTiles.push_back(tileMap[vertical][horizontal]); 

m_bottomDistance = distanceTillBottomCollision(surroundingTiles);
{{< /highlight >}}

We get the tile coordinates of the player, which represents the players&#8217; location inside the tilemap vector. Then we get the surrounding blocks. We push those inside a vector. That&#8217;s all there is to it. at the end, we snap the player back by simply moving the players y coordinate.

The result looks like this.
{{< youtube -CQ5ZHAxyo0 >}}

If you have any questions or feel like discussing my code, feel free to do so in the comments. Click [here][1] for the next part.

Thank you for reading and have a wonderful day.

[Return to the project page.][2]

 [1]: {{< ref "/collision-with-static-blocks-part-2.md" >}}
 [2]: {{< ref "runaway.md" >}}