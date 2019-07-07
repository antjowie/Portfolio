---
title: "Loading Object Data"
date: 2018-08-25T14:47:07+02:00
subtitle: "Every object needs different kinds of data"
tags: 
    # - example
bigimg: 
    # - {src: "path", desc: "description"}
comments: true
---
Objects are the building blocks of the game. But a car has different properties than a player. So how do we manage all these different variables?

<!--more-->

> [This is the current place of progression](https://github.com/antjowie/Axios-framework/tree/d4fadadcc3b5d1e5f83e212bf10e151734223de3)

## My ideas
I have two ideas in mind. Make programmers overwrite two function, an `onLoad` and `onSave` function, in which the programmer writes the variables that are to be saved. The benefit of this system is that the programmer can easily add new variables to the object's body. But the programmer has to write two additional functions. One to load the variables, and one to save the variables.

Another Idea that I have in mind is to make a map in which the programmer inserts all the used variables. The benefit of this is that the programmer doesn't need to overwrite the serialization functions, but every time the programmer calls an variable, he has to convert it to the correct data type, thus leading to more clutter in the code.

I'm thinking of combining these two ideas. The programmer can write all the member variables that he wants but has to overwrite one function. A serialize function, which returns the addresses of the variables that will be modified. 

## Working on the model
There are a few things that we have to keep track of when we are implementing this. We need three things to be precise:

* The variable's address,
* a name for the variable's value,
* the variable's type

This is something that the programmer has to take care of himself, but that's alright. Now that I think of it, there is a way better approach, one where the programmer doesn't even need to overwrite a function. We can easily put these details into some kind of vector. Or maybe a map, because maps have a close resemblance to JSON, the format I'm using for my data.

This is my plan. The programmer overwrites the constructor, He already has to, because he has to specify a type for his object. In the constructor, he has to call a function called `addToSerialization`. This function has three parameters:

* Name (which is a string literal),
* address (which is a void pointer),
* type (which is an enumerator)

This function adds an element to an internal map. The **Object Factory** uses this to save and load all the variables.

## Possible implementation
In code, it would look a bit like this:
{{< highlight cpp "hl_lines=23-27 44-46 68-84 100-108" >}}
// Inside Object source file
class Object
{
private:
    friend ObjectFactory;   // Needs access to the object's constructor
                            // and serialization map

    struct SerializeItem
    {
        const enum Type
        {
            Int,
            Float,
            String,
            Bool
        }type;
        const void* const address;
    };

    std::map<const char*, SerializeItem> m_serializeMap;

protected:
    void addToSerialization(const char* name,
        const void* const address, const SerializeItem::Type type)
        {
            m_serializeMap[name] = {type,address};
        }

    // Rest of code...
};

////////////////////////////////////
// Inside MenuItem source file

class MenuItem: public Object
{
private:
    int m_x;
    int m_y;
    std::string m_onPressed;

    MenuItem()    
    {
        addToSerialization("x",&m_x,Type::Int);   // Not sure if last parameter  
        addToSerialization("y",&m_y,Type::Int);   // is valid, but you get the point.
        addToSerialization("onPressed",&m_onPressed,Type::String);    
    }

public: 
    // Rest of code....
};

////////////////////////////////////
// Inside ObjectFactory source file
// Here the object is loaded

class ObjectFactory
{
private:
    std::map<std::string,pointerToConstructor> m_constructorMap;

    Object* construct(const std::map<std::string,std::string>& data)
    {
        // Construct the object
        Object* object = new m_constructorMap[data.objectName];

        // Load the data of the object
        for (auto &variable: object->m_serializeMap)
        {
            if(data.find(variable.name) == 0)
                continue; // Maybe also log it

            std::string value = data[variable.name];
         
            switch (variable.type)
            {
            case Type::Int:
                static_cast<int*>(variable.address) = std::stoi(value);
                break;
                // Same for the others...
                // Note: Maybe I can make a template or something and use decltype
                // instead of writing all these converters manually
            }
        }
    }

    // Rest of code...
};

////////////////////////////////////
// Inside ObjectManager source file
// Here the objects are saved

class ObjectManager
{
private:
    std::vector<Object* >m_objects;

public:
    _save()
    {
        std::vector<std::map<std::string,std::string>> objectsState;

        for(const auto& object: objects)
            objectsState.push_back(object.m_serializeMap);

        convertToJson(objectsState);
    }    

    // Rest of code...
};
{{< /highlight >}}

First of all, I'm sorry, it got quite large. But that is because many systems kinda depend on each other. Maybe next time I will just write the functions instead of the classes.

Either way, this seems like a nice system to use. We can even save some metadata using this method. All that we have to do is pass some info to `addToSerialization` and the state of the variable will be saved.

Great, isn't it? Of course, if you have any suggestions feel free to leave them down in the comments section. You can complain about my code all you want, and yes, I really haven't written any commits.

[Return to the project page]({{< ref "/project/axios-framework" >}}#the-progression)