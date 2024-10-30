---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 2.5 Nesting
---

[← Back](/c-sharp-fundamentals/)

## Activity 2.5 Nesting

---

### Introduction

This lesson doesn't introduce any new syntax. Rather, it focuses on a new technique called nesting. Nesting involves placing code blocks within other code blocks. This technique is crucial for making decisions based on previous selections, which is common in even basic programs.

#### What is Nesting?

Nesting is the process of placing one set of instructions (a code block) inside another. This allows for more complex logic and decision-making within your program. It's like having a series of questions where the answer to one question determines which question will be asked next.

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

In this example, we ask the user if they want to delete their account. If they answer "yes", we ask them again to confirm. Depending on their responses, different actions are taken.

#### Importance of Code Formatting

It's crucial to keep your code nicely formatted. Here are some tips:

- **Indentation**: Always indent one tab (2-4 spaces) for every code block. If you have a nested if statement, the code in the nested block should be indented again.
- **Grouping Statements**: if, else if, and else statements that belong together should not have space between them. Group them together to visually indicate that they are related.
- **Spacing Sections**: Space your code based on sections. Avoid bunching up your entire program; this makes it easier to read and debug.

#### Common Pitfalls

- **Misalignment**: Ensure your indents are consistent. Misaligned code can be hard to read and debug.

- **Over-nesting**: Too many nested levels can make the code hard to follow. Consider refactoring if your code gets too nested.

#### Dungeon Crawler Activity

Now, let's apply what you've learned to a simple program. This program is a choose-your-own-adventure game, and it's the biggest program you'll write so far. Take your time, and test your code frequently. Don't try to write the whole program and then test it at the end, or it could spell disaster when you try to debug. Write one section at a time, and then test it.

#### Skills to Practice

- Nesting if statements
- Testing nested branching statements

### Instructions

#### Setup

1. Create a new C# console application. Name the project **2.5 Nesting**.
2. Click Create.

## Code

```cs
// If the player beats one of the scenarios, set its boolean variable to true
bool wolfpackEnding = false;
bool dragonEnding = false;
int gold = 0;
int twinkies = 0;

Console.WriteLine("Your car crashes into a tree during a thunderstorm in the woods.");
Console.WriteLine("Darkness surrounds you as thunder crashes and rain pours.");
Console.WriteLine("You spot a cave nearby, dimly lit by flashes of lightning, and run towards it for shelter.");
Console.WriteLine("Inside, you see two shadowy paths diverging deeper into the unknown...\n");

// Append .ToLower() to any string, string variable, or method that returns a string.
// This method returns a string with all lowercase characters.
Console.Write("Which path do you take? (left or right) -> ");
string path = Console.ReadLine().ToLower();

Console.WriteLine("\nAs you move forward, you see something glimmering on the ground — a Hostess Twinkie.");
Console.WriteLine("Do you eat the Twinkie for sustenance, or will you save it for later?");

Console.Write("(take or eat) -> ");
string twinkieChoice = Console.ReadLine().ToLower();

if (twinkieChoice == "take")
{
    Console.WriteLine("You slip the Twinkie into your pocket, unsure what awaits in the darkness...\n");
    twinkies++;
}
else if (twinkieChoice == "eat")
{
    Console.WriteLine("Feeling uneasy, you eat the Twinkie to keep up your strength.\n");
}
else
{
    Console.WriteLine("You leave the Twinkie untouched, feeling an ominous presence watching.\n");
}

// Left -> Wolfpack
// Right -> Dragon
// Else -> No path chosen
if (path == "left")
{
    Console.WriteLine("You cautiously take the left path.");
    Console.WriteLine("A few steps in, you freeze as the piercing eyes of a pack of wolves emerge from the shadows.");
    Console.WriteLine("The pack leader, larger and fiercer than the others, steps forward, growling softly...\n");

    Console.Write("Do you offer the pack leader your hand in peace? (yes or no) -> ");
    string wolfChoice = Console.ReadLine().ToLower();

    if (wolfChoice == "yes" && twinkies >= 1)
    {
        Console.WriteLine("As you reach out, the wolves smell the Twinkie...");
        Console.WriteLine("In a frenzy of hunger, they turn on you, and you're surrounded with no escape!\n");
    }
    else if (wolfChoice == "yes")
    {
        Console.WriteLine("The pack leader sniffs your hand and accepts you into the fold.");
        Console.WriteLine("You're given a small satchel of gold as a token of their trust.");
        Console.WriteLine("You settle in with the wolves, awaiting dawn as the storm howls outside...\n");
        gold += 5;
        wolfpackEnding = true;
    }
    else
    {
        Console.WriteLine("Sensing your hesitation, the wolves close in, their teeth bared.");
        Console.WriteLine("You feel their claws sink in, and everything goes black...\n");
    }
} // End left path
else if (path == "right")
{
    Console.WriteLine("You take the right path, deeper into the damp, dark cave.");
    Console.WriteLine("Suddenly, a rotten, smoky smell fills the air. A massive dragon with dull, greedy eyes looms in the shadows.");
    Console.WriteLine("The dragon sniffs the air and sneers, 'Did you bring me something sweet?'");

    Console.Write("Do you offer him a treat? (yes or no) -> ");
    string dragonChoice = Console.ReadLine().ToLower();

    if (dragonChoice == "yes" && twinkies >= 1)
    {
        Console.WriteLine("The dragon’s eyes widen as he devours the Twinkie. 'Delicious!' he roars.");
        Console.WriteLine("In gratitude, he hands you a pile of gold coins.\n");
        Console.Write("How much gold do you take? -> ");
        string goldChoice = Console.ReadLine();
        int goldAmount = Convert.ToInt32(goldChoice);

        if (goldAmount > 0 && goldAmount <= 100)
        {
            Console.WriteLine("The dragon grunts approval, allowing you to take the gold...\n");
            gold += goldAmount;
        }
        else if (goldAmount > 100)
        {
            Console.WriteLine("The dragon’s eyes narrow, and he hisses, 'Greed will get you nothing.'\n");
        }
        else
        {
            Console.WriteLine("The dragon, impressed by your modesty, lets you take all the gold!\n");
            gold += 100000;
        }

        dragonEnding = true;
    }
    else
    {
        Console.WriteLine("The dragon’s face darkens, and he lunges towards you!");
        Console.WriteLine("His jaws close around you as everything fades to black...\n");
    }
} // End right path
else
{
    Console.WriteLine("You hesitate, feeling the storm grow stronger as lightning flashes around you.");
    Console.WriteLine("Suddenly, a bolt strikes nearby, and you fall to the ground, darkness closing in.\n");
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
    Console.WriteLine("By tempting the dragon with a delicious Hostess snack cake, you avoid his wrath.");
    Console.WriteLine("He flies you back home after the storm, but not after raiding the nearest Hostess factory.");
    Console.WriteLine("You survived!!!");
}
else
{
    Console.WriteLine("Game Over!");
}

if (gold > 0)
{
    Console.WriteLine($"\nYou not only survived, but you found {gold} gold!");
}
```

#### Debug

```txt
Your car crashes into a tree during a thunderstorm in the woods.
Darkness surrounds you as thunder crashes and rain pours.
You spot a cave nearby, dimly lit by flashes of lightning, and run towards it for shelter.
Inside, you see two shadowy paths diverging deeper into the unknown...

Which path do you take? (left or right) -> left

As you move forward, you see something glimmering on the ground - a Hostess Twinkie.
Do you eat the Twinkie for sustenance, or will you save it for later?
(take or eat) -> take
You slip the Twinkie into your pocket, unsure what awaits in the darkness...

You cautiously take the left path.
A few steps in, you freeze as the piercing eyes of a pack of wolves emerge from the shadows.
The pack leader, larger and fiercer than the others, steps forward, growling softly...

Do you offer the pack leader your hand in peace? (yes or no) -> yes
As you reach out, the wolves smell the Twinkie...
In a frenzy of hunger, they turn on you, and you're surrounded with no escape!

-- Ending --
Game Over!
```

### Tips, Tricks, and Reflection

- I cannot stress the importance of testing your application regularly. When you start nesting if statements, your app will potentially have many different paths of execution. It's important to make sure everything runs as you develop your application.
