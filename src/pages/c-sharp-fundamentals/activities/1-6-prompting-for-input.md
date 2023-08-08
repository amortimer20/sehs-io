---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 1.6 Prompting for Input
---

[← Back](/courses/c-sharp-fundamentals/)

# Activity 1.6 Prompting for Input

## Introduction

In this introductory section, we have been writing output using `Console.WriteLine()`. Now we will learn another method that complements `Console.WriteLine()`, and that is the `Console.ReadLine()` method. This method allows us to receive input from the user. I.e. The user can interact with the program via the console. Writing to and reading from the console is known as input and output, or I/O for short. We will also use a method called `Console.Write()`. Notice that it looks very similar to `Console.WriteLine()` sans the word _line_. This method still displays a message, but it keeps the cursor on the same line as the output. This allows the user to type on the same line as the message. This is purely for aesthetics, but I think you will prefer it.

### Skills to Practice

- Prompt a user for input and saving it to a variable
- Using variables containing user input

## Activity Instructions

### Setup

1. Create a new C# console application. Name the project **1.6 Input**.
2. Click Create.

### Code

```cs
// Buddy the Elf Greeting Program
// The program will pause and wait for the user to type a response.
Console.Write("Hey! What's your name? My name's Buddy! ");
string name = Console.ReadLine();
Console.WriteLine($"{name}, that's fun to say! {name}, {name}...");

Console.Write("Does someone need a hug? ");
string answer = Console.ReadLine();
Console.WriteLine($"{answer}!? I just wanted a hug!");

Console.Write("Buddy the Elf, what's your favorite color? ");
string favoriteColor = Console.ReadLine();
Console.WriteLine($"That's a nice {favoriteColor} outfit, very {favoriteColor}-y.\n\n");

// Secret Agent ID Program
Console.WriteLine("----- SECRET AGENT CONSOLE -----");
Console.WriteLine("IDENTITY NOT FOUND. CREATING NEW IDENTITY...");

Console.Write("Enter your first name: ");
string firstName = Console.ReadLine();
Console.Write("Enter your code name: ");
string codeName = Console.ReadLine();

// List of options
Console.WriteLine("Choose your gadget:");
Console.WriteLine("- ASMR Radio");
Console.WriteLine("- Flashbang Energy Drink");
Console.WriteLine("- Metamucil");
Console.Write("-> "); // Cool arrow prompt; Doesn't actually do anything
string gadget = Console.ReadLine();
Console.WriteLine();

Console.WriteLine("-- Constructing your agent identity --");
Console.WriteLine($"AGENT NAME: {firstName} - CODE NAME: {codeName}");
Console.WriteLine($"GADGET: {gadget}");
Console.WriteLine("-- IDENTITY CONFIRMED EXITING... --");
```

### Debug

**Important!** Since you can now type into the console, it's not enough to just click run and look at the output, you need to interact with the program! To do this, click into the console, type your input, and press **enter**.

Your programs will no longer need look exactly like the sample output. Write whatever you want, you don't have to follow the sample exactly!

```txt
Hey! What's your name? My name's Buddy! Anthony
Anthony, that's fun to say! Anthony, Anthony...
Does someone need a hug? No, weirdo
No, weirdo!? I just wanted a hug!
Buddy the Elf, what's your favorite color? purple
That's a nice purple outfit, very purple-y.


----- SECRET AGENT CONSOLE -----
IDENTITY NOT FOUND. CREATING NEW IDENTITY...
Enter your first name: Anthony
Enter your code name: Agent Poopy Pants
Choose your gadget:
- ASMR Radio
- Flashbang Energy Drink
- Metamucil
-> Metamucil

-- Constructing your agent identity --
AGENT NAME: Anthony - CODE NAME: Agent Poopy Pants
GADGET: Metamucil
-- IDENTITY CONFIRMED EXITING... --
```

## Tips, Tricks, and Reflection

- You may have tried prompting the user for a number and performing math calculations with the input. However, that won't work right now. That's because `Console.ReadLine()` always returns the user input as a _string_. We need to learn how to convert strings to number in order to use the values in math expressions. Check out the next activity to learn more!
