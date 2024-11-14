---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 2.2 If Statements
---

[← Back](/c-sharp-fundamentals/)

## Activity 2.2 If Statements

---

### Introduction

In programming, we often need to make decisions based on certain conditions. For example, you might want your program to perform one task if a user enters a correct password and a different task if they enter the wrong one. To control the flow of your program and make decisions like this, we use something called **selection statements**.

The most basic selection statement is the if statement. An **if statement** allows your program to check a condition and decide whether or not to execute a block of code based on whether that condition is true or false. If the condition is true, the code inside the block runs. If the condition is false, the code is skipped entirely.

In C#, the code block following an if statement is enclosed in curly braces `{ }`. Here’s an example:

```cs
int number = 100;

if (number == 100)
{
    Console.WriteLine("Code inside this block runs because the condition is true.");
    Console.WriteLine("More code inside the same block...");
}
```

In this example, since `number == 100` is true, the code inside the curly braces is executed. If the condition were false, the program would skip that block entirely.

#### Common Mistakes

1. **Using the Assignment Operator Instead of the Equality Operator**: One common mistake is using a single `=` (assignment operator) instead of a double `==` (comparison operator) in a condition:

```cs
if (number = 100)  // This causes an error because it's trying to assign a value
```

Remember, the `==` operator checks for equality, while `=` assigns a value. This is a frequent error that can lead to unexpected results, so always double-check your conditions!

2. **Accidentally Terminating an If Statement with a Semicolon**: Another common mistake is placing a semicolon after the condition in an if statement. When you do this, the semicolon acts as an empty statement, causing the if condition to not affect the following code block:

```cs
if (number == 100);  // This semicolon makes the if statement ineffective
{
    Console.WriteLine("This code runs regardless of the condition.");
}
```

In this case, the block of code inside the curly braces will always run, regardless of whether the condition is true or false. To avoid this mistake, ensure that you don’t accidentally terminate the if statement with a semicolon.

#### Skills to Practice

- Constructing if statements
  - Creating a condition
  - Creating a code block

---

### Instructions

#### Setup

1. Create a new C# console application. Name the project **2.2 If Statements**.
2. Click Create.

#### Code

```cs
Console.WriteLine("--- Demo 1 - Age Validator ---\n");

Console.Write("Enter your age: ");
string input = Console.ReadLine();
int age = Convert.ToInt32(input);

if (age >= 16)
{
    Console.WriteLine("Time to hit the road! You've earned your driving permit.\n");
}
if (age >= 18)
{
    Console.WriteLine("Adulting 101: You can now vote and live independently.");
    Console.WriteLine("Please exit your mom's basement.\n");
}
if (age >= 35)
{
    Console.WriteLine("You're old enough to run for president.");
    Console.Write("Enter your full name: ");
    string name = Console.ReadLine();

    Console.Write("What year will you run? ");
    string year = Console.ReadLine();

    Console.Write("What's your nickname (adjective): ");
    string nickname = Console.ReadLine();

    Console.WriteLine($"{nickname} {name} for president in {year}!");
}


Console.WriteLine("\nPress enter to continue...");
Console.ReadLine();

Console.WriteLine("--- Demo 2 - Simple Score Calculator");

Console.Write("Enter your score (0-100): ");
int score = Convert.ToInt32(Console.ReadLine());

if (score >= 60)
{
    Console.WriteLine("you passed!");
}
if (score < 60)
{
    Console.WriteLine("You did not pass.");
}
```

#### Debug

```txt
--- Demo 1 - Age Validator ---

Enter your age: 42
Time to hit the road! You've earned your driving permit.

Adulting 101: You can now vote and live independently.
Please exit your mom's basement.

You're old enough to run for president.
Enter your full name: Anthony Mortimer
What year will you run? 2032
What's your nickname (adjective): Lazy
Lazy Anthony Mortimer for president in 2032!

Press enter to continue...

--- Demo 2 - Simple Score Calculator
Enter your score (0-100): 76
you passed!
```

---

### Tips, Tricks, and Reflection

- Indentation of code inside a block shows what code belongs to what section. Be consistent with your indentations, your code will be much more readable and maintainable.
