---
title: "Axios Framework Instance"
date: 2018-06-17T21:02:00+02:00
subtitle: "The (fake) class that manages it all"
tags: 
    # - example
bigimg: 
    # - {src: "path", desc: "description"}
comments: true
---
`Instance` is the main class of the framework, you could call it an instance of the framework, but it really is an instance of a game. `Instance` is responsible for the timeline in the game. It is the main loop of the game.
<!--more-->

> Code hosted on Github: [Header](https://github.com/antjowie/Axios-framework/blob/master/include/Axios/Instance.h) and [Source](https://github.com/antjowie/Axios-framework/blob/master/src/Axios/Instance.cpp).

---

#### Manage (de)initialization of subsystems
Subsystems are systems that object make hooks to. Physics response for example. The `Instance` class initializes all these subsystems. It really just makes sure to construct them before any objects are allowed to be made.

There is a simple vector that takes care of this. The programmer can overwrite a callback function to add his own subsystems to the (de)initialization loop if it is required.

#### Frame rate control
The subsystem will have two ways of managing the frame rate. Frame updating based on running an average and frame rate governing.  
**Frame updating based on running an average** works because when a user experiences a more demanding section of the level, chances are that the user still does on the next frame. So by taking the average between a few frames. The spike will be less noticeable, but the game will feel a bit more unresponsive because the update loop doesn't really match the rendering loop.

**Frame rate governing** is a process where we guarantee a specific frame rate. If the target frame rate is 60 fps. (1/60 = 16.7 ms) and the frame takes 10 ms, we wait until 16.7 ms has passed. If the frame takes 20 ms. We must skip a frame and run it on the next occurrence (33.3 ms) which means the game will jump to 30 fps for a second. 

We will develop with an average frame rate and will use frame rate governing nearing the end of our game when the frame rate will be more stable.

That should conclude the game instance class. If you have any questions or suggestions, leave them in the comments down below. Thank you!

[Return to project page.]({{< ref "/project/axios-framework.md" >}}#what-does-it-do)