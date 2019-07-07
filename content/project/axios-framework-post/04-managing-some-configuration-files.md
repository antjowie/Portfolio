---
title: "Managing some configuration files"
date: 2018-09-01T10:09:07+02:00
subtitle: "It's important, I think"
tags: 
    # - example
bigimg: 
    # - {src: "path", desc: "description"}
comments: true
---

Great, we can now save the state of a level and load that exact state. One problem though, In most of the games, we don't save every level's state. We get loads of different save files. What we need is one file that contains the save file or atleast one folder that contains the save file. We don't want to have user save files inside the game files. So lets do that.

<!--more-->

> [This is the current place of progression](https://github.com/antjowie/Axios-framework/tree/d4fadadcc3b5d1e5f83e212bf10e151734223de3)

There are a few things we need to decide (and as always programming is about making the right decisions). How are we gonna save the game? Is the programmer responsible for saving the game or is the framework. What data must be saved? Do save the state of every scene or do we save just one area?

Plenty of thinking to be done. Ofcource, I wan't to make the framework as flexible as possible. To be honest, part of the problem is already solved. Everytime we change scenes, we already have two functions. `onEnter` and `onExit`. We can specify the serialization in these functions.

So the only thing that has to be added is that we can make a function that saves the game if the user really wants it. And I think that I know just how to do it. Instead of writing the logic behind saving inside `onExit`, we write it inside a function called `onSave`. The same is done for `onLoad`. This way, the user can also have multiple save files. So let's make up some logic.

We will add a save path configuration to the data manager and a game data path. Every scene will also have a variable containing it's path. It's usefull information. 

[Return to the project page]({{< ref "/project/axios-framework" >}}#the-progression)