---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 2.2 If Statements
---

[← Back](/c-sharp-fundamentals/)

## Activity 2.2 If Statements

---

### Introduction

Programming languages have a series of constructs that allow a programmer to control what portions of their program execute, and if necessary, how many times to repeat that code. The first category of control structures to learn are referred to as _selection statements_. The first selection statement to learn is called the **if statement**.

An if statement will execute a section of code, known as a **code block**, if a boolean expression, known as a **condition** has a _true_ result. In C#, code blocks begin and end with curly braces `{ }`.

```cs
int number = 100;

if (number == 100)
{
    print("Code inside a code block.");
    print("More code inside a code block...");
}
```

If the condition is _true_, the code block, which is the code indented under the if statement, will execute. If the condition is _false_, the code block is skipped over, and does not execute.

Notice that if statements do not have a semi-colon to terminate it. Remember, control structures such as the if statement do not need a semi-colon, because a code block follows it. If you attempt to use a semi-colon, depending on the language, it either won't run, or won't work correctly because you've seperated the if statement from it's corresponding code block.

#### Skills to Practice

- Constructing if statements
  - Creating a condition
  - Creating a code block

#### Instructions

---

### Setup

1. Create a new C# console application. Name the project **2.2 If Statements**.
2. Click Create.

#### Code

```cs
// Age Validator
using System.Xml.Linq;

Console.Write("Enter your age: ");
string input = Console.ReadLine();
int age = Convert.ToInt32(input);

if (age < 0)
{
    Console.WriteLine("You're just a baby, you're not ready yet!\n");
}
if (age >= 13)
{
    Console.WriteLine("You're old enough to join Cobra Kai!");
    Console.WriteLine("Although, the last few seasons were terrible...\n");
}
if (age >= 16)
{
    Console.WriteLine("You're old enough to get your license!\n");
}
if (age >= 18)
{
    Console.WriteLine("You're old enough to live on your own.");
    Console.WriteLine("So... Get out of your parents' basement!\n");
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

    Console.WriteLine($"{nickname} {name} for president! Coming {year}");
}
```

#### Debug

```txt
Enter your age: 35
You're old enough to join Cobra Kai.

You're old enough to get your license!

You're old enough to live on your own.
So... Get out of your parents' basement!

You're old enough to run for president.
Enter your full name: Anthony Mortimer
What year will you run? 2020
What's your nickname (adjective): Sleepy

Sleepy Anthony Mortimer for president! Coming 2020
```

---

### Tips, Tricks, and Reflection

- There's an age range that's missing. If you type in 0 - 12, nothing happens. Add an if statement to fix this issue.
- Indentation of code inside a block shows what code belongs to what section. Be consistent with your indentations, your code will be much more readable and maintainable.
