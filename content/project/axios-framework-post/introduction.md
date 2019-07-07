---
title: "The Introduction"
date: 2018-08-23T15:20:18+02:00
subtitle: "Why would the introduction be a second part?"
tags: 
    # - example
bigimg: 
    # - {src: "path", desc: "description"}
comments: true
---

The reason why I am writing this page is that during development I decided to switch to a whole other way to update my progression on this project. This page will discuss the progress up until now and what is left to come. 

<!--more-->

> [This is the current place of progression](https://github.com/antjowie/Axios-framework/tree/3e7ec41c85ffc14fa438623ce14413222c2b9236)

## What happened?
Right now, the main foundation of the framework has been built. It has touched the following subjects:

- **The data manager**  
  It can save and load all the configurations in a map. **I have no other ideas for this class**.
- **The input handler**  
  It maps every key to a key state item, which the programmer can get the state of. It only supports keyboard and mouse.
- **loggers**  
  The logger has been implemented very early because I make many std::cout calls in my code during debugging. The logger right now is very weak though. It is actually a controlled call to the output. It can't forward its output to a file, it also is a namespace, this makes it harder to make different loggers. Many things to still consider with this class.
- **Objects**  
  Much of the work has been put in objects. It almost supports every system that an object needs (I think). Right now, it has the following classes:
  - **Object**  
    The main object displayed on the screen. 
  - **Object manager**  
    A manager because all objects are dynamic. The manager manages the lifetime, updating and querieng of objects.
  - **Object reference**  
    A reference key. because objects are managed by the manager, our object could be deleted at any moment. So to make sure we are not trying to access invalid memory, references will be passed through the reference manager. I consider this class done.
  - **Object reference manager**  
    The array in which all the references lay. This class has strong coupling with the object manager because the object manager only gives object references, no direct pointer to an object. I consider this class done. 
  - **Object factory**  
    The Axios Framework is a data-driven framework. The factory simply maps the class's constructor to strings. This way, we can decide which objects to spawn using a text file instead of writing it in code. The factory can only construct objects right now but not with parameters. I wanted to make sure we could pass an arbitrary amount of parameters in the constructor using a variadic template function. But it got kinda complicated. I'll probably pass in a map through the constructor because I'm also planning to use JSON for the object data files.  
- **Scenes**  
    It can save and load all the configurations in a map. A scene is a container for all the objects. The reason why I use scenes is that the user makes scenes in an editor. Right now, the scene kinda works, but I'm not sure if it's missing something or not, it may be changed in the future or optimized.

Quite a lot, well, not really. But a game can be made from this. The only thing that we still need is a way to import a data file and we're good to go.

## What now?
There are quite a few things that still have to be added and many things that have yet to be decided. For now, I'll be working on importing data files. That's also what the next part will be about.  
That's it for this post. Anything about this post can be discussed down below

[Return to the project page]({{< ref "/project/axios-framework" >}}#the-progression)