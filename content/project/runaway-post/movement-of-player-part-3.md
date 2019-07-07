---
title: Movement of player part 3
date: 2017-10-15T10:21:30+00:00
comments: true
---
Welcome to one of my favorite things about programming, making up some kind of formula for your game.

While I was quite satisfied with my previous implementation of the movement system (it is my first time implementing collision), I still found it to be quite sloppy. It&#8217;s probably a programmer&#8217;s nature to think badly of their code like an artist thinks lowly of their drawings. I&#8217;m both of these. So I decided to try and neaten some things up. Because that doesn&#8217;t give your program any more functions (like reinstalling Windows does), I will not discuss it.

This part will discuss my implementation of fixing out parameters. It is not told in the code, but to get the right gravity and jumpStrength, I had to restart the program every time with a different combination. I really disliked that. If for example, a different level used a gravity value which is too high, the player would not be able to jump again. It&#8217;s stupid! So I decided to reimplement it. But now with a formula.

# Let&#8217;s talk formula

When I make up a formula, I first try to make a connection between different parameter values. I do this by the use of a table.

I started by modifying the changing the strength and gravity value with the same value.
{{< figure src="/img/projects/runaway/JumpStrength-formula-exponential-relationship.jpg" title="Table representing relation when strength = gravity" >}} 

As you can see, when the values of strength and gravity are the same, the value for height is those two added up divided by two. Hence the formula

{{< highlight cpp >}}
s = strength
g = gravity
height = (s+g)/2
{{< /highlight >}}

But this formula soon started to break when strength and gravity were not the same, as you can see in the picture. What I did notice however was that for every increase in strength the value of height increased with a certain constant value. This led me to believe that I needed a parabola variable. So I calculated the derivative.

{{< highlight cpp >}}
For every increase in strength, height increases with 1.5
s = strength
height´(s)= s + 0.5

{{< /highlight >}}

Which I then turned into the formula

{{< highlight cpp >}}
height(s) = 0.5s² + 0.5s
{{< /highlight >}}

But this is wrong in so many ways. So please forget about it. I decided to start analyzing the results logically and made up the following table.
{{< figure src="/img/projects/runaway/JumpStrength-formula-parabola.jpg" title="Table representing relation between strength and gravity when gravity > strength" >}} 

When messing with the gravity value, I noticed that whenever the gravity value gets bigger, the height value gets lower. Alright, that&#8217;s obvious, but this has led me to believe that the formula I have to devise should be inversely proportional. Looking at these values. I noticed that strength is really just the acceleration. (which I meant to do, see this [part][1] for more information) With these values. I could use already existing formulas for acceleration and speed.

{{< highlight cpp >}}
if acceleration = 2 and deceleration is 4
it takes 2 / 4 seconds to decelerate to 0
{{< /highlight >}}

I also noticed that our gravity value is always the same, so that should give us a proportional graph. With that information, I can conclude that the time it takes for total deceleration (my terminology for an acceleration = 0) is equal to acceleration/deceleration.

With this, I can calculate the distance. See down below

{{< highlight cpp >}}
a = acceleration
t = time
x = distance

a = x/t²
x = a*t²
{{< /highlight >}}

Great! But unfortunately not the solution. When I tried this formula with values which do not have a delta time of 0,5. The program would give values too high. This means that we have to divide by gravity because that would make it go lower instead of higher. Please see the following.

# The solution

{{< figure src="/img/projects/runaway/JumpStrength-formula-inversely-proportional.jpg" title="Table representing relation with strength = 4 and gravity = x" >}} 

The first thing you need to know about this solution is that the gravity is a value which subtracts from acceleration every second. This way, we can calculate the time when acceleration reaches zero by dividing the jumpStrength with the gravity because gravity won&#8217;t change (a = strength/gravity). This gives us a proportional graph.
{{< figure src="/img/projects/runaway/line_2F81B49F.png" title="In this graph acceleration = 4 and gravity = 1" >}} 

Because the graph is proportional to all values. We can just divide strength with 2 and get the average acceleration. This gives us the component strenght/2 (a = strength/2). And this is all we need for our acceleration formula a=x/t (It&#8217;s different than the one we know).

{{< highlight cpp >}}
a = x/t
x = a*t

a = s/2
t = s/g

x = s/2 * s/g
x = s²/2g
{{< /highlight >}}

And this works for all values!

Good job getting to the end of this post. I am not the best is explaining things, especially because I like to do things in my own way. Which is actually a bad thing most people say. Either way, I know that such a precise system is pretty unnecessary for my game. Especially since the gravity won&#8217;t be changed at all I think (things can always change). But the reason why I love programming so much is because I&#8217;m interested in making these formulas. That&#8217;s why I love maths. It gives you the ability to put all these random numbers together and then they are calculated in such a way that they make sense and serve a meaning! I think that is quite amazing. So making this formula may not have been a top priority or anything. But it sure was a satisfying thing to do. It reminded me of my primary reason to program. To understand things in my own way. I could&#8217;ve entirely dodged this formula, but what&#8217;s the fun in that?

I should really stop wasting your time shouldn&#8217;t I. I&#8217;ll finish up. It&#8217;s probably my nature, to want to understand and give everything it&#8217;s own special way. I really don&#8217;t want to use random values with no real meaning, but I want to use formulas which give guaranteed results. I think that is where the beauty lies in programming. Giving everything their reasons.

I hoped that all this text above makes any sense. If it didn&#8217;t, don&#8217;t worry, I probably explained it badly! Of course, any questions can be asked down below. Thank you for reading!

Have a natural day!

[Return to the project page][2].

 [1]: {{< ref "movement-of-player-part-2.md" >}}
 [2]: {{< ref "runaway.md" >}}