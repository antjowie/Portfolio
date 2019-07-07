---
title: Building the gameloop
author: Angelo Anthony Rettob
date: 2018-01-13T20:10:48+00:00
comments: true
---
## A bit of reflection

This is one of the things that keep impressing me about programming. Every time when I make a solution it feels like the best solution I ever came up with. But I am programming I notice that it almost never is true. That also is the case this time.

One of the main issues that I had during the development of Runaway was my implementation of the parent class. Polymorphism is suposed to help you reduce the ammount of code work and therefore reduce the ammount of errors. Then, you can use the class as a base clase for a different class and change some functions that require different interaction. But in Runaway every class overrode the virtual function. My parent class became an interface.

Not this time. In my new implementation the parent class defines the default paths for every menu.

## Building the game loop

Every game has a game loop. Its basically a loop that gets the user input, updates the objects and draws them on the screen. Just like in real life do objects react by their surroundings and update their state accordingly. So every object has these 3 functions.

>  That&#8217;s also the basic class for my object. By making a class with these three functions, every object can be put inside a data container. By doing this, we can easily update all objects with one line.

This is the core point of my new menu class. A menu is comparable to a state. But instead of changing the state, I push a new state onto the menu stack. By doing this we can keep track of our previous states and it gives us a lot if flexibility.

I made this system after I realized that I could use the heap without keeping a pointer to it. In my new design every object has a reference to the object manager. So when an object is made, they push themselves onto the object manager. The object manager handles the drawing, updating, input and lifetime of the objects. So all we have to do is allocate memory on the heap using the new keyword and make our object. The beauty in it us that all the objects have to be declared in the constructor and the rest of the functions do not have to be touched.

[Return to project page.][1]

 [1]: {{< ref "/project/ray-shaper.md" >}}