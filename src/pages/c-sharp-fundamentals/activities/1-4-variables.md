---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 1.4 Variables
---

[← Back](/c-sharp-fundamentals/)

## Activity 1.4 Variables

### Introduction

Variables allow us to store data during our program's execution. Sometimes, variables are described as _containers for storing information_. For example, in an RPG video game, your character has attributes such as health, magic, and stamina. These values need to be tracked throughout the game. Variables enable us to store and use this data within the program. 

In C#, creating a variable is known as declaring a variable. Assigning a value to a variable is known as variable assignment. We use the equal sign (=) to assign a value to a variable. You can both declare and assign a value in one line, which is known as initialization. We will start by using three data types: string, int, and double.

When declaring a variable, you must specify the data type. Once the data type is declared, the variable can only store data of that type. This is known as **static typing**.

```cs
// Declare a string variable.
string name;

// Assign a value to name.
// No need to use the string keyword after the variable has been declared.
name = "Anthony";

// Initialize an integer and a double variable.
int age = 5;
double weight = 500.55;

name = 10; // Bad! name is a string, this will cause an error.
```

Variables can be used anywhere their given data type may be used.

```cs
int number1 = 10;
int number2 = 400;
int sum = number1 + number 2;
Console.WriteLine($"The sum is {sum}");
```

**Example Video**

<video src="/courses/c-sharp-fundamentals/variables-animation.mp4" controls style="width: 100%; max-width: 640px;"></video>

#### Variable Scope

Variable Scope refers to where a variable can be accessed in your code. For example, the program below will not run because `number1` must be declared before it can be used.

```cs
// Error
Console.WriteLine(number1);
int number1 = 5;
```

#### Naming Rules and Conventions

There are some syntax rules for naming variables, and there are best practices known as conventions. Here are a few tips for naming variables:

- Use meaningful names. `int age = 25;` is more descriptive than `int x = 25;` if the variable is storing an age value.
- Variables can't have spaces in their names. For readability, use **camelCase** when naming a variable containing multiple words.
- Variable names cannot start with a number.

#### Skills to Practice

- Declaring and assigning values to variables
- Use variables in formatted strings

### Instructions

#### Setup

1. Create a new C# console application. Name the project **1.4 Variables**.
2. Click Create.

#### Code

```cs
// FYI, I use hypens in titles for fun. You'll see them a lot.
Console.WriteLine("- String variables -");

// Declare string variables
string name = "Anthony"; // Try using your name instead of mine
string food = "Steak"; // Try replacing steak with your favorite food.
string item = "peppers"; // Try replacing this with some other noun.

Console.WriteLine($"Hello, this is {name}!");
Console.WriteLine($"{name} loves to eat {food}.");
Console.WriteLine();

Console.WriteLine("Try saying this five times fast:");
Console.WriteLine($"Peter Piper picked a peck of pickled {item}");
Console.WriteLine($"A peck of pickled {item} Peter Piper picked");
Console.WriteLine($"If Peter Piper picked a peck of {item},");
Console.WriteLine($"Where’s the peck of {item} Peter Piper picked?");
Console.WriteLine();

Console.WriteLine("- Number variables -");
int age = 30; // Replace the number with your age

Console.WriteLine($"You will reach age 100 in {100 - age} years!");
Console.WriteLine();

double balance = 35.25;
double withdraw = 0; // Replace the 0 with a larger number.
double leftover = balance - withdraw;

Console.WriteLine($"You have a balance of ${balance} in your bank account.");
Console.WriteLine($"If you withdraw ${withdraw}, you will have ${leftover}.");
Console.WriteLine();

int health = 100;
double damage = 55.5;

Console.WriteLine($"You've taken {damage} damage. You have {health - damage} health left.");
```

#### Debug

```txt
- String variables -
Hello, this is Anthony!
Anthony loves to eat Steak.

Try saying this five times fast:
Peter Piper picked a peck of pickled peppers
A peck of pickled peppers Peter Piper picked
If Peter Piper picked a peck of peppers,
Where's the peck of peppers Peter Piper picked?

- Number variables -
You will reach age 100 in 70 years!

You have a balance of $35.25 in your bank account.
If you withdraw $0, you will have $35.25.

You've taken 55.5 damage. You have 44.5 health left.
```

### Tips, Tricks, and Reflection

- Students will often get in the habit of always using string interpolation when printing a variable. Remember, `Console.WriteLine()` does not always need a string argument. For example, dont write `Console.WriteLine($"{numberVariable}");` when `Console.WriteLine(numberVariable);` will suffice.
- There are a number of naming conventions that different programming language communities adhere to. We will use even more naming conventions for other programming constructs. For fun, check out some of these examples:
    - snake_case
    - PascalCase
    - kebab-case
    - SCREAMING_SNAKE_CASE
    - HungarianNotation