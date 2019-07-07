---
title: Animation and sprite sheet part 2
date: 2017-10-05T20:49:52+00:00
comments: true
---
To implement an animation handler you first have to know the order of the frames in the sprite sheet. Or perhaps the other way around. Or maybe you are way further ahead than me and have already made a class that can handle both situations. Either way, the implementation is the same, or should I say the meaning of it. Most sprite sheets work the same way as any sprite sheet you will see. You have the rows and the columns, as described in [part 1][1]. So in this part, I will explain my implementation of an animation handler class.

An animation handler class needs some basic functionality. There are many ways to implement animations. The way I have devised is to look at every movement as an animation. All these animation blocks will be putten inside an animation vector. This way, we can be really flexible with our implementation. Some animations in a sprite sheet can be longer than others, but we can also change the speed between frames for each different move.

{{< highlight cpp >}}
struct Animation
{
	// Each Animation object represents a row in the sprite sheet
	unsigned int m_startFrame; // The beginning of the animation row, usually starts at 0
	unsigned int m_endFrame;   // The end of an animation row, if a row starts at 0 and ends with a 4th frame, this should be 3

	float m_duration;     // The duration inbetween frames
	bool m_isRepeated;    // Wheter the animation should loop
	bool m_isTransition;  // Wheter the column should reset upon changing animation

	Animation(const unsigned int startFrame, const unsigned int endFrame, const float duration, const bool isRepeated = true, const bool isTransition = false);
	int getLength() const;  // Returns length of animation row, used to loop back to beginning
};
{{< /highlight >}}

It is defined as a structure, for what I know, structures and classes are the same but they only differ in their default accessibility. Structures are public by default, classes are private. I tend to use structures for data types where more member variables are needed than functions. I have described all the variables with comments, should something not be clear, feel free to ask down below.

The animation handler class is more of a container class. This class handles the changing, adding, and &#8216;displaying&#8217; of animations. See the code down below.

{{< highlight cpp >}}
class AnimationHandler
{
private:
	sf::IntRect m_frameSize;    // Assumes that all sprite sheet frames are same size
	sf::IntRect m_currentFrame; // This is the current animation

	std::vector m_animations;   // This keeps all the animations, a specific order is mandatory

	int m_currentAnim;  // The current animation, this value is used to loop through the row
	float m_elapsed;    // Used to calculate whether to loop to next frame

public:
	void addAnimation(const Animation &anim);
	void changeAnimation(unsigned int animID);
	
	void update(const float dt);
	
	sf::IntRect getFrame() const;

	// Class assumes every frame has the same size. Because it iterates the sprite sheet like blocks
	AnimationHandler(const sf::Vector2i &frameSize);
	AnimationHandler(const int width, const int height);
};
{{< /highlight >}}

I think that every function is quite self-explanatory. It really isn&#8217;t that complicated. I will not post the definitions on this website because those can already be found [here][2]. That really is it for this part. Of course, you can see the result down below (which by the way shows some broken behavior which we will fix in [the next part][3]).

{{< youtube 1YNBxzX-38c >}}

Thank you for reading and have a peaceful day.

[Return to the project page][4].

 [2]: https://github.com/antjowie/Runaway/blob/master/Runaway/source/AnimationHandler.cpp
 [1]: {{< ref "animation-and-sprite-sheet-part-1.md" >}}
 [3]: {{< ref "animation-and-sprite-sheet-part-2-1.md" >}}
 [4]: {{< ref "runaway.md" >}}