---
title: "Axios Framework"
date: 2018-06-16T13:53:09+02:00
subtitle: "The framework that powers all of my 2D games"
tags: 
    - game development
    - framework
    - cpp
    - sfml
bigimg: 
    # - {src: "path", desc: "description"}
comments: false
---
The Axios Framework makes use of [SFML](https://www.sfml-dev.org/). The Axios Framework is a 2D game framework that runs on files made by [Tiled](https://www.mapeditor.org/). The programmer only writes the objects. The objects are exported to a file that can be loaded in [Tiled](https://www.mapeditor.org/), a 2D tilemap editor. At first, I wanted to make a game engine, but I have no experience making any kind of GUI yet. I believe that you should not do two major new subjects at the same time, so a framework it is. Hopefully, this project can one day evolve into a game engine.

[Click here to see all the posts]({{< ref "axios-framework-post/" >}})

## My motivation for this project
The framework is supposed to be an all inclusive pack. During the development of my two first games [Runaway](https://github.com/antjowie/Runaway) and [Ray Shaper](https://github.com/antjowie/Ray-Shaper), I noticed a certain pattern. Time was crucial (Ray Shaper was my intake assignment for Breda University, [read more about that here]({{< ref "/blog/my-journey-towards-nhtv.md" >}})) so I copied and pasted much of the code from Runaway. Many of those files were modified to meet certain needs, but the animation files and the game loop stayed the same.  
Most of the time when I'm programming and come up with a new idea, I first prototype that idea, then make some throwaway code to test it and see if its something to implement. Because of my limited time, all the prototype and throwaway code came into the final product. Optimization was my last priority, which is why that simple game lagged in its final stage. Everything just had to work. But I had no base code to start with. Only another prototyped project.

So with that knowledge and some extensive reading of the book [Game Engine Architecture](http://gameenginebook.com/), the Axios Framework started to become my next project. 

> The source code for this project is hosted on Github at this [repository](https://github.com/antjowie/axios-framework).

___
## The progression
> Here is a little bit of explanation about **why** I am using a part based method.   
> My progress on this project is updated in an episode kinda matter. This means that old parts could contain ideas that are no longer in use. The reason why I did this instead of making one big index to every subject the framework is responsible for is because I kept changing lines from places and places. Whenever I would change something, I'd rewrite the text for a certain subject, but because of that, I couldn't keep the ideas I had before I updated them or else the page would get very bloated.  
> 
> Long story short, the project is too abstract to write definite ideas. Until the project will become a bit more solid this is the way I am updating the progression of this project. **I'd reccommend you to atleast read the first [part]({{< ref "axios-framework-post/foundation.md" >}})**.

[4 - Managing some configuration files]({{< ref "axios-framework-post/04-managing-some-configuration-files.md" >}})  
[3 - Loading the object specific data]({{< ref "axios-framework-post/03-loading-object-data.md" >}})  
[2 - Getting us all on one page]({{< ref "axios-framework-post/introduction.md" >}})  
[1 - The Foundation]({{< ref "axios-framework-post/foundation.md" >}})  

___
Please ask questions about the project in the dedicated subject. 