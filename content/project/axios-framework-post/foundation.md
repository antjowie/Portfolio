---
title: "The Foundation"
date: 2018-08-23T14:59:31+02:00
subtitle: "What should this project do"
tags: 
    # - example
bigimg: 
    # - {src: "path", desc: "description"}
comments: true
---
> This originally was the layout of the project, but during the development of this project, I noticed that it is better to document my progress on this project in a linear path instead of updating this list every time. Many ideas changed shaped during development. Not only because of oversights, but also because of new books I have read, new things I have learned. This page will not be updated anymore, but when the project is nearing a solid state will I start documenting the classes.

The framework serves a role in the following subjects. The subjects are their responsibilities. Marked subjects are being worked on. Unmarked subjects aren't. `(you can click the bold title to see the progress)`:

<!--more-->

-  [**Instance**]({{< ref "/game-instance.md" >}})  
    __The `Instance` class is an instance of the framework. It updates all the systems. The `Instance` class manages the update loops._  
    - [X] Manage (de)initialization of subsystems
    - [X] Frame rate control
-  [**Object manager**]({{< ref "/object-manager.md" >}})  
    _The `Object manager` is a container that manages the memory/allocation/lifetime of all the `Objects` and allows `Objects` to be querried. It also allows `Objects` to easilly initiate data during runtime._  
    - [X] One/two frame stack
    - [X] Runtime object (de)allocation
    - [X] Object reference handling
    - [X] Physics update loop
    - [ ] Event system
    - [ ] Object serialization
-  **Objects**  
    _Objects are the building blocks of the game. Objects are build out of hooks to subsystems._  
    - [ ] Object factory
    - [ ] Object serialization
-  **Subsystems**  
    _Subsystems are systems that objects can make hooks to. Subsystems make hooks to an update loop of the `Instane` class. This allows the programmer to easily make his own subsystem._  
    - [ ] Subsystem foundation
    - [ ] Animation subsystem
    - [ ] Rigid body (collision response/physics) subsystem
- [**Data manager**]({{< ref "/data-manager.md" >}})  
    _Basic data containers for game data that has to be saved._
    - [X] Game keybinding items
    - [X] User config
- **Assets manager**  
    _Keeps the game textures, sounds, files in memory to which objects can make reference too._
    - [ ] Sound
    - [ ] Music
    - [ ] Textures
    - [ ] Fonts
- **Tiled support**  
    _[Tiled](https://www.mapeditor.org/) will be used as the editor._
    - [ ] Import Tiled files
    - [ ] Export object data type
- [**Input handler**]({{< ref "/input-handler.md" >}})  
    _An interface that keeps track of all input devices and their state._
    - [X] Keyboard and mouse
    - [ ] Controller
- [**Utilities**]({{< ref "/utilities.md" >}})  
    _Code that allows communication with other programs or supports the developer during development._
    - [X] JSON parser
    - [ ] SFML key code converter
    - [X] Logger
    - [ ] String hashing

[Return to the project page]({{< ref "/project/axios-framework.md" >}}#the-progression)