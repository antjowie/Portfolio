---
title: "Input Handler"
date: 2018-06-19T18:17:03+02:00
subtitle: "It supports every type of input, or will one day"
tags: 
    # - example
bigimg: 
    # - {src: "path", desc: "description"}
comments: true
---
The `Input handler` listens to all events. It is the layer between everything the user uses to interact with the computer. It monitors the state of every key the user can press (or is supported). 
<!--more-->

## Documentation
> Code hosted on Github: [Header](https://github.com/antjowie/Axios-framework/blob/master/include/Axios/InputHandler.h) and [Source](https://github.com/antjowie/Axios-framework/blob/master/src/Axios/InputHandler.cpp)

#### InputHandler
_The Input Handler serves as a layer between the program and all the supported HIDs. It does so by mapping every possible key and button into a KeyState (more on that later) and monitoring the events. The InputHandler polls the events and listens to key press states and key release states. It updates accordingly._

- `Classes` 
- **KeyState**  
    Every key has a KeyState instance. A KeyState keeps track of the state of the key, it has three booleans. isPressed, isHold and isReleased. These three values are updated in the update function. [Read below for more information about the way states are updates](#deciding-the-state-of-a-key).
- `Functions`
- **void update(sf::RenderWindow& window, sf::Event &event)**
    The update function uses the window and event because it uses the original event loop. If it created it's own event variable, not all the events would be captured. This is more apparent on lower fps. It first resets all the pressed and released states and then updates it if an event has happened.
- **bool getters/setters**
    Every key is an enumerator, which means every key has a unique int. We pass that int into the array that contains all the key states and it returns the key state. 

## Additional notes
#### Deciding the state of a key
Input items have three states, `pressed`, `hold` and `released`. `When a key is pressed` the program will set `pressed and hold to true`. **IF** `hold already is true, pressed is false`. the program will reset every state to false each update call(which is usually each render loop **not game loop**). If a `key is released`, the `release will become true`.  
To summarize default flow (every column is an update call):

| Situation         | Pressed | Hold | Released |
| ----------------- | ------- | ---- | -------- |
| Pressing key      | X       | X    |          |
| Holding the key   |         | X    |          |
| Holding the key   |         | X    |          |
| Releasing the key |         |      | X        |

Be sure to talk if you have something on your mind, you can even do so down below, I won't mind.

[Return to project page.]({{< ref "/project/axios-framework.md" >}}#what-does-it-do)
