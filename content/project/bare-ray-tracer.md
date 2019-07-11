---
title: "Bare Ray Tracer"
date: 2019-01-25T17:42:43+02:00
draft: false
comments: true
toc: false
images:
- https://github.com/antjowie/Bare-Ray-Tracer/blob/master/docs/splash.png?raw=true
tags: 
  - cpp
  - school
  - graphics
---
![splash](https://github.com/antjowie/Bare-Ray-Tracer/blob/master/docs/splash.png?raw=true)
A simple ray tracer written in C++ to learn basic graphics related concepts.

> You can download the binaries from the [release tab](https://github.com/antjowie/Bare-Ray-Tracer/releases) or check the code [here](https://github.com/antjowie/Bare-Ray-Tracer)

{{< figure src="https://github.com/antjowie/Bare-Ray-Tracer/blob/master/docs/showcase.gif?raw=true" caption="Showcasing the speed of the ray tracer" >}}

# How to use the ray tracer?
Upon launch, look at the command prompt, it explains all the controls that you need to know about. The following text is about how to modify the ray tracer and add your own scenes.

## What can I modify in resources?
I didn't want to recompile my project everytime when I changed a scene, so I decided to use json for all my configurations. This is because I find JSON easy to modify and it has plenty of parsers.  
Resources folder contains all of these files. 

### Config.json
- fps: The fps cap
- imageXXX: The size of the render target. This can be lowered when prototyping. It is best if it reflects the windowXXX.
- windowXXX: The size of the window.
- maxRenderTime: The amount in seconds after the window should be updated with the current rendered frame. This allows the user to see the ray tracer progress, as it is quite slow.

### Scene.json
When loading a scene, you select the corresponsding number on the numpad. Modifying a scene and adding a scene is thus very simple. If you want to see the options for surfaces, you can look at the [Application.cpp](https://github.com/antjowie/Bare-Ray-Tracer/tree/master/projects/Application/source/Application.cpp) constructor. The surface types are defined here. The [constructFunctions.cpp](https://github.com/antjowie/Bare-Ray-Tracer/tree/master/projects/Application/source/constructFunctions.cpp) defines what data is loaded.

> You can download the binaries from the [release tab](https://github.com/antjowie/Bare-Ray-Tracer/releases) or check the code [here](https://github.com/antjowie/Bare-Ray-Tracer)