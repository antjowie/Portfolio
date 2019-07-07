---
title: "Object Manager"
date: 2018-06-22T14:36:52+02:00
subtitle: "Someone gotta to keep those thousand objects in check"
tags: 
    # - example
bigimg: 
    # - {src: "path", desc: "description"}
comments: true
---
A `Scene` is a level or a section. A certain moment in the program where a certain group of objects are loaded. The main menu is a scene. The level is a scene. `Scenes` are managers of objects.
<!--more-->
 
## Documentation
<!-- > Github files: [Header](https://github.com/antjowie/Axios-framework/blob/master/include/Axios/SceneManager.h) and [Source](https://github.com/antjowie/Axios-framework/blob/master/src/Axios/SceneManager.cpp) -->
> Code hosted on Github: yet to **add** files

## Design choices
Jump to a certain section:

- [Documentation](#Documentation)
- [Design choices](#Design-choices)
		- [Runtime data containers](#Runtime-data-containers)
		- [The difference between the two containers](#The-difference-between-the-two-containers)
		- [Update loops](#Update-loops)
		- [Object updating](#Object-updating)
		- [Problems with a virtual update function](#Problems-with-a-virtual-update-function)
		- [Buckets](#Buckets)
		- [Object reference handling](#Object-reference-handling)
		- [Event handling](#Event-handling)

#### Runtime data containers
The runtime data containers (one/two frame data container and dynamic data container) are used by objects. Because they only apply to objects are they not included in the `Assets Manager`.  
The runtime data containers are kept in the `Scene Manager`. objects can access these containers via the reference they have to the `Scene`. The `Scene` holds a reference to the `Scene Manager` to push new `Scenes` and access the runtime data containers.  
The user can specify the number of bytes the runtime containers can dynamically allocate. The **new** keyword is expansive, and during runtime object may need to dynamically allocate some memory. In that case, the runtime data containers are used. 

#### The difference between the two containers
There are two data containers (one/two frame data container and dynamic data container). The difference is small. The one/two frame data container contains data that will live for two frames. Think about event data of internal calculations needed for the next frame. The data will be destructed automatically, so pointers become invalid very easily.  
The dynamic data container contains data that will live for the whole lifetime of the `Scene`. They can be manually deallocated and are deallocated when the `Scene` ends. This container contains data that has to last longer than the next frame, like bullets from a gun or a flying arrow.  

#### Update loops
The physics update loop is an update loop that updates on a constant interval. This allows a more consistent experience across all systems.

All update loops will be wrapped in a clock class. The clock class is a class that manages all the update loops. The clock is a global singleton class. The clock also serves functions to edit time. Functions like slowing the timeline down or stopping it. Subsystems or objects can get time values from the clock or can make hooks to the clock to be run every so often.  
The clock class will have two timelines.
- Real update
- Update and
- Physics update
The real update loop is a timeline that can't be affected. It is useful for debugging or pausing the game simply by stopping the update loop. For example. When the user pauses the game, the update timeline uses a modifier of zero (which means nothing will move) and the pause menu uses the real update loop.  
The update loop is just an update loop. Most effects will use this loop like the camera or subsystems.  
The physics timeline is updated at a constant rate, only when the elapsed time is equal to some hertz (like 100) will the physics timeline update. This is useful for subsystems like physics.

#### Object updating
On paper it sounds easy, just call a virtual update function with the time and let an object do its thing. While this can work for simple games, things tend to get rough when objects depend on each other (or have references to each other) see the following examples.  

#### Problems with a virtual update function
When updating objects. The order can be very important. For example. Imagine a player position that is being updated by the car he is inside of. If the player is updated before the car, the player's position will be wrong because, at that moment in the game, the car hasn't moved yet. To help with this problem a simple priority system can be used. It goes by the name of [`Buckets`](#buckets).

If we let an object update itself, it gets a lot of freedom. It will probably call all of its `Components` ([read more about objects and `Components` here] Yet to make the page). And so will the next object, and the next one. This causes the CPU to jump around doing the same calculations. It is far more efficient for a CPU to do an update of the same component at one time. This process is called `Batched Updates`.

At last, virtual functions can be expensive. Some objects don't even need to update every frame. It also means that every class that has to be updated or is dependent on subsystems in some way be an object. It is way better to make callback function hooks to the subsystems. This way, CPU cycles won't be wasted iterating over classes that don't even need to be updated.

{{< highlight cpp >}}
// In scene.update(const float &elapsedTime)
preUpdateManager(elapsedTime);

animation._updatePreMove(); // Get the movement before the position is updated
rigidBody._moveAndResolveCollision(elapsedTime); // Update the requested position and resolve collisions 
animation._updatePostMove(elapsedTime); // Use the difference in movement to update animation
// Update other subsystems if neccessary

postUpdateManager(elapsedTime);
{{< /highlight >}}

And an example of including the preUpdate class:
{{< highlight cpp >}}
Object Object():
    m_vehicle(nullptr),m_movement(0)
{
    preUpdateManager.callback(preUpdate(Bucket::Entity, [&](const float elapsedTime)
    {
        if(m_vehicle != nullptr)
        {
            m_movement = m_vehicle.getPosition() - m_sprite.getPosition();
        }
        else
        {
            m_movement.x -= ax::InputHandler.getInstance().getItem("left").isHold ? 1 * elapsedTime : 0;
            m_movement.x += ax::InputHandler.getInstance().getItem("right").isHold ? 1 * elapsedTime : 0;
            
            if(ax::InputHandler.getInstance().getItem("jump").isPressed == true)
            {
                m_movement.y +=  ? 1 : 0;
                m_jumped = true;
            }
            else
                m_movement.y -= ax::InputHandler.getInstance().getItem("left") ? 1 * elapsedTime : 0;
        }
    });

    ax::rigidBody.callback([&](const float elapsedTime)
    {
        m_sprite.move(m_movement * elapsedTime)
    });
}
{{< /highlight >}}

#### Buckets
Buckets are a way to prioritize updating order. It acutally is a very simple enumerator that decides in which order the function object appear. Indeed, the postUpdate and preUpdate are classes. They contain two member variables. mBucket and mFunction (struct would make more sense, but all members are private. In the end, worrying about it is just wasting time IMO). Components can add hooks to the manager of these classes. The PreUpdateManager and PostUpdateManager. UM will sort the function object internally.

The lowest enumerator will have the highest priority (same as our [Logger Verbosity]({{< ref "utilities.md">}}#logger) value). It is also kown as the weight. The internal data container is just a simple vector.

#### Object reference handling
Objects are dependent on one another, so they need to be able to reference each other. A simple way could be to request a reference to an object. But what will happen if the object is destroyed and we try to access it?  
This is why all references are wrapped in a simple checker class. It works as follows. 

There are two classes. ObjectReferenceManager(ORM) and ObjectReference(OR).  
The ORM can be seen as a database containing all the references and the OR can be seen as a key to get the reference.  

Every object gets assigned a unique ID. This ID is not visible for the developer. The OR class contains two values, the unique ID of the object, and the index in the ORM database. When an object wants to construct a reference to an object. It passes the object into the constructor of an OR instance.  
When a user wants to get the object, it passes the OR into the ORM. The OR checks the index, if the unique ID is still the same, the OR will return a **pointer** to the object, else it will return a **nullptr**.

With this design, the object can check if the referenced object still exists. 

#### Event handling
Events are... events. Activities happening in game that other objects should react at. Explosions, gun shots, but also things like a player entering a car, or a player picking up a health pack.  
But wait a second. why would I use an event for explosions or picking up health packs. Can't I just check for collisions with the object and react when a collision happens?  
Of couse you **can**, but is that really such a smart idea? (as we always ask ourselves). Think about it. You would have to iterate over all objects just to check for one collision. That's quite a huge operation and it would go against `Batched Updates`. Every object would need some kind of interface for every type of event. An explosion has a whole different effect than a health pack. Not every object would react to a health pack. You could divide every object by what it can and can't react, but this would get clumbersome very quickly.

Well then, why not make it another sub system? 

[Return to project page.]({{< ref "/project/axios-framework.md" >}}#what-does-it-do)