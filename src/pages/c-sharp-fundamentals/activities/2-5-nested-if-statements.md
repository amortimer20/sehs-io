---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 2.5 Nested If Statements
---

[← Back](/c-sharp-fundamentals/)

## Activity 2.5 Nested If Statements

---

### Introduction

This lesson doesn't introduce any new syntax. Rather, a new technique called **nesting** is used. Nesting is simply writing code blocks within other code blocks. With even basic programs, it's necessary to make selections/decisions as a result of some other selection being made.

**Example**

```cs
Console.Write("Would you like to delete your account? ");
string answer = Console.ReadLine();

if (answer == "yes")
{
    Console.Write("Are you ABSOLUTELY SURE? ");
    answer = Console.ReadLine();

    if (answer == "yes")
    {
        Console.WriteLine("Deleting your account.");
    }
    else
    {
        // ... code
    }
}
else
{
    // ... code
}
```

It's so important to keep your code nicely formatted. Here is a review of the tips from before:

- Always indent one tab (2-4 spaces) for every code block. If you have a nested if statement, then the code in the nested code block should indented again.
- `if`, `else if`, and `else` statements that belong together should not have space inbetween them. Butt them right up against eachother so you can see that they're grouped.
- Space your code based on sections. You don't need to have your entire program bunched up together.

This program is called a choose your own adventure game. It's going to be the biggest program you make so far. Take your time, and test your code frequently. Don't try to write the whole program and then test it at the end, or else it could spell disaster when you try to debug. Write one section at a time, and then test it.

#### Skills to Practice

- Nesting if statements
- Testing nested branching statements

### Instructions

#### Setup

1. Create a new C# console application. Name the project **2.4 Nesting**.
2. Click Create.

## Code

```cs
// If the player beats one of the scenarios, set it's boolean variable to true
bool wolfpackEnding = false;
bool dragonEnding = false;
int gold = 0;
int twinkies = 0;

Console.WriteLine("Your car crashes into a tree during a thunderstorm in the woods.");
Console.WriteLine("As the storm intensifies, you run into a nearby cave to seek shelter.");
Console.WriteLine("Upon entering the cave, you see two diverging paths...\n");

// Append .ToLower() to any string, string variable, or method that returns a string.
// This method returns a string with all lowercase characters.
Console.Write("Which path do you take? (left or right) -> ");
string path = Console.ReadLine().ToLower();

Console.WriteLine("\nAs you leave, you see a delicious Hostess Twinkie.");
Console.WriteLine("Do you eat the Twinkie for sustenance, or will you save it for later?");

Console.Write("(take or eat) -> ");
string choice = Console.ReadLine().ToLower();

if (choice == "take")
{
    Console.WriteLine("You never know when a Twinkie will come in handy...\n");
    twinkies++;
}
else if (choice == "eat")
{
    Console.WriteLine("It's going to be a long night, so you decide to eat it.\n");
}
else
{
    Console.WriteLine("You leave the twinkie alone.\n");
}

// Left -> Wolfpack
// Right -> Dragon
// Else -> No path chosen
if (path == "left")
{
    Console.WriteLine("You decide to take the left path.");
    Console.WriteLine("You stumble into a pack of wolves lying together.");
    Console.WriteLine("The pack leader slowly approaches...\n");

    Console.Write("Do you pet the pack leader? (yes or no) -> ");
    // We can reuse the choice variable declared earlier if
    // the data isn't needed anymore.
    choice = Console.ReadLine().ToLower();

    if (choice == "yes" && twinkies >= 1)
    {
        Console.WriteLine("As you approach, the wolves smell a delicious snack cake..");
        Console.WriteLine("In a fit of hungry rage, they rip you to shreds!\n");
    }
    else if (choice == "yes")
    {
        Console.WriteLine("The pack leader respects and accepts you.");
        Console.WriteLine("You are given a gold satchel by the pack leader.");
        Console.WriteLine("You also cuddle with the wolf pack until the storm subsides...\n");
        gold = gold + 5;
        wolfpackEnding = true;
    }
    else
    {
        Console.WriteLine("The pack leader senses your fear.");
        Console.WriteLine("The entire pack crowds around you and devours you...\n");
    }
} // End left path
else if (path == "right")
{
    Console.WriteLine("You decide to take the right path.");
    Console.WriteLine("\nLater down the trail, you stumble upon an overweight,");
    Console.WriteLine("repulsive looking talking dragon named Mort the Pudgy.");
    Console.WriteLine("The dragon speaks: 'Did you bring me snack cakes??'");

    Console.Write("Do you have a treat to give this foul creature? (yes, no) -> ");
    choice = Console.ReadLine();

    if (choice == "yes" && twinkies >= 1)
    {
        Console.WriteLine("Me love Twinkie!!! Here take gold!");
        Console.WriteLine("The dragon grants you the gold he was guarding.\n");
        Console.Write("How much gold do you take? -> ");
        choice = Console.ReadLine();
        int goldAmount = Convert.ToInt32(choice);

        if (goldAmount > 0 && goldAmount <= 100)
        {
            Console.WriteLine("Mortimer the Pudgy grants you his gold...\n");
            gold = gold + goldAmount;
        }
        else if (goldAmount > 100)
        {
            Console.WriteLine("'Greedy! No gold for you!'\n");
        }
        else
        {
            Console.WriteLine("Mortimer the pudgy respects your piety.");
            Console.WriteLine("You are granted all of the gold!\n");
            gold = gold + 100000;
        }

        dragonEnding = true;
    }
    else
    {
        Console.WriteLine("'Fool!!!'");
        Console.WriteLine("The dragon devours you whole.");
        Console.WriteLine("He desired a delicious Hostess treat, settling for you instead...\n");
    }
} // End right path
else
{
    Console.WriteLine("You decide not to enter. You receive a thundershock and lie in the storm...\n");
}


// Endgame
Console.WriteLine("-- Ending --");

if (wolfpackEnding)
{
    Console.WriteLine("By cuddling with the wolfpack, you weather out the storm.");
    Console.WriteLine("Upon leaving the cave, they follow you, seeing you as the new pack leader.");
    Console.WriteLine("You survived!!!");
}
else if (dragonEnding)
{
    Console.WriteLine("By tempting Mortimer the Pudgy with a delicious Hostess snack cake, you avoid his wrath.");
    Console.WriteLine("He flies you back home after the storm, but not after raiding the nearest Hostess factory.");
    Console.WriteLine("You survived!!!");
}
else
{
    Console.WriteLine("Game Over!");
}

if (gold > 0)
{
    Console.WriteLine($"\nYou not only survived, but you found {gold} gold! Good work!");
}
```

#### Debug

```txt
Upon entering the cave, you see two diverging paths...

Which path do you take? (left or right) -> right

As you leave, you see a delicious Hostess Twinkie.
Do you eat the Twinkie for sustenance, or will you save it for later?
(take or eat) -> take
You never know when a Twinkie will come in handy...

You decide to take the right path.

Later down the trail, you stumble upon an overweight,
repulsive looking talking dragon named Mort the Pudgy.
The dragon speaks: 'Did you bring me snack cakes??'
Do you have a treat to give this foul creature? (yes, no) -> yes
Me love Twinkie!!! Here take gold!
The dragon grants you the gold he was guarding.

How much gold do you take? -> 99
Mortimer the Pudgy grants you his gold...

-- Ending --
By tempting Mortimer the Pudgy with a delicious Hostess snack cake, you avoid his wrath.
He flies you back home after the storm, but not after raiding the nearest Hostess factory.
You survived!!!

You not only survived, but you found 99 gold! Good work!
```

### Tips, Tricks, and Reflection

- I cannot stress the importance of testing your application regularly. When you start nesting if statements, your app will potentially have many different paths of execution. It's important to make sure everything runs as you develop your application.
