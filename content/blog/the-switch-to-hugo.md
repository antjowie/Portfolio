---
title: "The Switch to Hugo"
date: 2018-06-09T21:12:36+02:00
subtitle: "Goodbye WordPresss, hello Hugo"
tags: 
    - web development
bigimg: 
    # - {src: "path", desc: "description"}
---
I used to have another portfolio site I made in preparation to enter the course [Creative Media and Game Technologies](https://www.nhtv.nl/bachelors/creative-media-and-game-technologies/introduction.html) at [NHTV](https://www.nhtv.nl/). [`(I actually got a place in the course, read more about it here)`]({{< ref "blog/my-journey-towards-nhtv.md" >}}). By doing so I hoped to increase my chances during the conversation.

> NHTV will be renamed to Breda University of Applied Sciences as of September 2018

Problem is, I didn't have any prior knowledge of web development. So I started doing research. I always wondered how the web worked.
<!--more-->
___
# Lets host a site
## How did my first portfolio come to life
After a while, I stumbled upon the idea of self-hosting. It seemed like the best solution because my site would be small and it didn't have to be hosted at all the time, only when I would have my conversation. `(terrible thing is, I actually forgot to show my portfolio during the conversation)`. And of course, it's free. So how did I self-host my site?

## Self-hosting ain't that hard
Well, it really depends on how you approach it. I want to know everything about it, and while that usually is a good mentality, it can also be a pitfall. Web development is not as simple as learning a language. It is a whole other system of what I'm used to (maybe another subject sound better).  
While I kinda started to understand how to host a site after a while, I was quite afraid of the dangers. You hear it a lot lately. Following steps is easy, but I didn't know the consequences. I didn't know the dangers of opening `port 80`. In the end, I still did it. I kinda gave up on the whole building a web server myself thing and started looking around what other people did. I surely can't be the only one with this problem.

It was then that I stumbled upon [WAMP](http://www.wampserver.com/en/) which stands for `Windows, Apache, MySQL, and PHP`. It basically packages all these things into one executable. **Very** simple. And I started using it. 

## What is WAMP
After running `WAMP`, getting the site up and running was as easy as opening a port, binding the address to my IP address. Because I don't want to remember my IP address every time, I needed a domain. I used the site [noip](https://www.noip.com/) for that because it was free and the subdomain was quite easy to remember (my old site was hosted at [http://angelorettob.ddns.net/](http://angelorettob.ddns.net/)).

I only have to create the site now. With `WAMP`, it is easy to do because there is a folder in which your site sits. So all I needed to do was write the `HTML` for it. I didn't know `HTML` though. So how do I get a site up and running without any web development knowledge? Well, with [WordPress(.org)](https://wordpress.org/) it seemed.
___
# Let's make a site
## Why WordPress
It seemed that `WordPress` was a very popular tool used to create websites. `(I actually first found out about WordPress. Reading about WordPress led me to WAMP)`. So I wanted to use it. I didn't see myself creating themes and layouts for websites at the moment. But I did want a site where I could write all about my projects. So `WordPress` it is

The site was finally up and running. Well, not that it was a hard thing to do. But it required me to do a lot of copy and pasting, something which I really dislike. I had other priorities though and the site needed to be hosted as soon as possible.  
So why scrap it? I finally had my site running, and then I just dropped it.

## What is my problem with WordPress
I gotta be honest, `WordPress` is great. It is very easy to get your site up and running with it. There is a large, **large** supply of themes which you can choose from. Everything is done for you, all you have to do is choose the right things and start writing content.

This may be great for many people who want to build a site. But it goes against what I want. I want to understand what is happening behind the screens and with `WordPress` I never really felt in control. My site was bloated with things I didn't need. And every time there was an error, I had to hope I wasn't the only one on the suffering end.  
I soon grew tired of the magic `WordPress` had to offer. I didn't like just writing content for my site, relying on the most popular plugins. It didn't take long until I just dropped the whole site altogether. `WordPress` is beautiful in that it does everything for you, but I want that control.

___
# So how will I host my portfolio
## Let's fix that
As a programmer or somebody who just uses the computer extensively, I still felt the urge to have some kind of online portfolio. The earlier the better right. But I couldn't find the interest in going back to my `WordPress` site.

This all changed when I started to try out `Python`. I was busy with my engine [Axios (link to be implemented)]() and searched for a bit of information in my book [Game Engine Architecture](http://gameenginebook.com/). The objects in my engine are component based, almost the same as in [Unity](https://unity3d.com/). I was reading about it around the last chapter. I read that some engines use a scripting language to model the components of the objects. Even `Python` was used. I always had my eye on `Python`. Not only because it is a [very famous language](https://stackify.com/popular-programming-languages-2018/) but also because people seemed to really like their `Python`.  It does everything for them and everything just makes sense.

{{< figure src="https://stackify.com/wp-content/uploads/2017/12/top-programming-languages-1.png" 
alt="Programming languages popularity chart" 
caption="Programming languages popularity chart 2018 from Stackify" >}}

> "The popularity of Python has risen steadily over the past 15 years, finally breaking the top 5 on the Tiobe Index a few years ago. This is because Python is a major language in some of most exciting technologies today. Machine learning, artificial intelligence (AI), Big Data, and Robotics all rely heavily on Python (Robotics also relies on C for its use in systems programming). Cyber Security, one of the top software challenges of our time, is also driven by Python."

> Quoted from [Stackify](https://stackify.com/popular-programming-languages-2018/)

## A little bit of Python
If it really is that famous why not learn it? I started reading about this __wonderful__ `Python` everybody seems to love and I can only say that I have fallen in love with it too. `C++` is the first language that I have started reading seriously, and while I love the power `C++` gives you, `Python` just understands what you want to do. I can't really say much about it because I only have written in `Python` for a bit. But it makes tasks so much **simpler**. Although talking about my `Python` experiences is a bit beyond this scope.

So what role does `Python` play in this? During the time that I was reading about `Python` [Corey Schafer](https://www.youtube.com/user/schafer5), a Youtube channel with programming tutorials (I watched his git tutorial and quite liked it) uploaded a tutorial about [Flask](http://flask.pocoo.org/), A microframework for `Python` used for web development. `(I really have to tone down with the commas)`. Naturally, I was interested in this. `Python` was a very fun language to program in and in combination with `Flask` hosting a website seemed like fun. So I started to watch his tutorials.

I soon realized that I needed to understand the basics of web development for it. But that was alright, I wanted to understand web development either way. So I started reading everything on [W3Schools](https://www.w3schools.com/) and [HTML Dog](http://htmldog.com/). 

## My first real taste of web development
I finally understood how a web page worked. What the relation between `HTML, CSS and JS` files are. It wasn't hard, but it was something that I needed to understand someday, at least the basics of it. So why didn't I go back to `Flask`?

Well, usually when I'm about to sleep, I watch a Youtube video about programming. It's probably not that smart to learn before sleeping but I enjoy it. Because of autoplay, I stumbled upon this video about [Github Pages](https://pages.github.com/).  
Github Pages seemed like the perfect solution. It offered to host my site directly from my repository, and I already use Github either way and I get my own domain. Everything sounds perfect, right?

I started reading the documentation and read about `Jekyll`. Of course, I started reading the documentation of `Jekyll` and noticed something I really didn't like.  
`Jekyll` needed `Ruby` and I had just about enough of learning new things. While I did not need any understanding of `Ruby` for `Jekyll`, I forced myself to do understand everything that is happening. It wasn't that hard, but surely there has to be a better way.

That is how I met `Hugo`.

## Hello Hugo
Finally, let's talk about `Hugo`. `Hugo` is a static site generator just like `Jekyll` but it is built upon [Go](https://golang.org/), an open-source programming language made by Google. `Go` is known for being very fast (I think it is based upon multithreading) and `Hugo` sure is fast. It is way faster than `Jekyll`. `Hugo` also didn't need much work to be set up, just download the executable and add it to your PATH.

So why did I choose `Hugo`? The workflow isn't that different from each other, both use markdown files and build the site with a simple command. It really comes down to preference. I prefer `Hugo` because the setup is simple and the workflow is straightforward. I don't really like plugins because I want to do the work myself (although I did install a theme). Both would be a good choice, `Hugo` is just faster and a bit more straightforward.  
But I can't really compare the two because I've only used `Hugo`. 

So that's how I met `Hugo`, quite a grand story now that I've read it myself. My next blog posts won't be this long. I kinda got ahead of myself.

Thank you for reading, I'm having a great time with `Hugo` and if you feel like trying it out, you should because it is very easy.