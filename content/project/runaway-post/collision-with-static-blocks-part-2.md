---
title: Collision with static blocks part 2
date: 2017-10-04T14:39:23+00:00
comments: true
---
Finally! I have made the function work in all direction. It looks pretty nasty to the eye though and I&#8217;m certain that there are way better implementations than mine, but just having it work makes me more than happy.

In the previous part which you can go to by clicking on [this][1], I have implemented a function which calculates the distance between a block and the player. While this does work, it can get quite confusing when you continue to program since all the differences in length will be relative to the player. This means that for every call to the function you have to imagine the distances in your head. My preference has always been to keep things as simple as possible so that you can leave room for other things to think about. So I have reimplemented the function as follows.

{{< highlight cpp>}}
// Get lower hitbox 
sf::FloatRect bottomHit{ m_player.getGlobalBounds() }; 
m_bottomDistance = bottomHit.height * 3; // To get the closest block to the player

for (auto iter : m_surroundingTiles)  
{ 
  float distance = abs(bottomHit.top + bottomHit.height - iter->getHitbox().top);
  if (iter->isSolid() && bottomHit.intersects(iter->getHitbox()) && distance < m_bottomDistance) 
    m_bottomDistance = distance; 
}

if(m_bottomDistance == bottomHit.height*3) 
  m_bottomDistance = 0.0f;
{{< /highlight >}}

Nothing too complicated. I&#8217;ve basically just made the distance value an absolute value. This way we know for sure that the value is always positive. That makes it easier to think in the user coordinate system. We do have a few arbitrary numbers in our function, like 3, which is an offset for the furthest it can go. every value above the tile height is fine, but when we have objects which differ in size, this function will not be able to handle it.

The value m\_bottomDistance will be calculated after the player has made a move. If the player is positioned inside of a block, the function will tell us, then it will use the m\_bottomDistance as pixels it has to move. You can see the implementation down below

{{< highlight cpp>}}
if(m_movement == 1)
{
  // Moving based on user values
  movement.y = speed; // Speed is an value which is the
  // number of pixels to move in 1 s
  m_player.move(0, movement.y * elapsedTime);

  // Snapping the user back if it is inside a block
  loadSurroundingTiles();
  distanceTillBottomCollision();
  if (m_bottomDistance > 0)
  m_player.move(0, -m_bottomDistance);
}
{{< /highlight >}}
This goes for all directions. As you can tell, this will have a load of code redundancy. It&#8217;s in no way elegant, but it gets the job done for this game. For the sake of completeness, I&#8217;ll add the implementation of the loadSurroundingTiles function. Which is a really simple vector that gets the surrounding blocks

{{< highlight cpp>}}
sf::Vector2i tilemapPlayerCoords{ mapWorldToTilemap(m_player.getPosition()) }; 
const int offset{ 2 };

m_surroundingTiles.clear(); 
for (int horizontal = tilemapPlayerCoords.x - offset; horizontal <= tilemapPlayerCoords.x + offset; horizontal++) 
  for (int vertical = tilemapPlayerCoords.y - offset; vertical <= tilemapPlayerCoords.y + offset; vertical++) 
    if (horizontal < m_tilemap->size() && vertical < (*m_tilemap)[horizontal].size())  
      // Order shouldn't matter. If we do map this vector to tilemap vector. 
      Our function calls would do 6 comparisons less each // Our first vector is y, 
      the subsequent vectors are x. 
      m_surroundingTiles.push_back((*m_tilemap)[vertical][horizontal]);
      {{< /highlight >}}

You can see the result down below.
{{< youtube 89zMR4OOtpk >}}

Thank you for reading. Any questions can be asked down below. Feel free to tell me anything.

[Return to the project page.][2]

 [1]: {{< ref "collision-with-static-blocks-part-1-1.md" >}}
 [2]: {{< ref "runaway.md" >}}