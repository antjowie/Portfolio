---
title: "Utilities"
date: 2018-06-21T19:57:14+02:00
subtitle: "Classes and functions with no specific purpose"
tags: 
    # - example
bigimg: 
    # - {src: "path", desc: "description"}
comments: true
---
Some things just have to be saved. In our case configurations. To make life easier for both of us (computers and humans), data is saved in a special format. There are many formats that we can choose from. But because of my recent studying of Python and Web Development. My preference for [XML](https://www.w3.org/XML/) (which I only used because of Tiled) shifted to [JSON](https://www.json.org/), a much more easier format, IMHO.
<!--more-->

## Table of Contents
- [Table of Contents](#Table-of-Contents)
- [So many possibilities (almost roping)](#So-many-possibilities-almost-roping)
- [SFML key code converter](#SFML-key-code-converter)
- [Logger](#Logger)

## So many possibilities (almost roping)
> Code hosted on GitHub: [Header] and [Source]

As told in the first paragraph my preference has gone to JSON. But what is JSON?

**J**ava**S**cript **O**bject **N**otation is such a simple format. It is like one big array. Is consist of key and values, just like our `Data` class. So why not JSON?  
I also find JSON easy to read and thus to edit. XML is also quite easy, but accessing XML is another story (or maybe I should've studied the librarys documentationa bit more). For our purposes, JSON suffies.

I chose the library [JSON for Modern c++](https://nlohmann.github.io/json/). It isn't the fastest parser, but it is really easy to use. Just include one header. And parsing a 20kb text file doesn't take that long either.

## SFML key code converter
Yet to be written

## Logger
> Code hosted on Github: [Header](https://github.com/antjowie/Axios-framework/blob/master/include/Axios/Logger.h) and [Source](https://github.com/antjowie/Axios-framework/blob/master/src/Axios/Logger.cpp)
> 
> Note: At the moment there is a very simple logger that only logs our messages to the console because I'm investing my time in more important manners. This is just a simple bit of code so that when the logger will gain some functionallity, I don't have to change all the code.

The logger is a very handy tool for every programmer. It allows the programmer to send custom messages when it is needed. After a while more different messages will pop up. Some may be less important than others. This is when Verbosity plays a role.  
Verbosity is implemented as a weight system, the lower the value, the more important it is. The programmer can set a verbosity limit. Messages higher than this verbosity will not be logged or displayed. 

[Return to project page.]({{< ref "/project/axios-framework.md" >}}#what-does-it-do)