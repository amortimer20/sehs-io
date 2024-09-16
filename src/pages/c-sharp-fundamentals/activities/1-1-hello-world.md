---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: "C# Fundamentals 1.1 Hello World"
---

[← Back](/c-sharp-fundamentals/)

## Activity 1.1 Hello World!

---

### Introduction

In this lesson, you will learn about output in programming. For console applications, **output** refers to information displayed to the user. However, the meaning of output can vary depending on the context. To output information to the user, we use the `Console.WriteLine()` methods.

The `Console.WriteLine()` method is a fundamental concept in programming. **Methods** perform specific actions, and in this case, `Console.WriteLine()` outputs a message to the user via the console. The console is a simple terminal for running text-based computer applications. Most of the introductory applications in these programming activities will be console-based.

Additionally, we will learn how to write comments in C#. **Comments** serve two main purposes: documenting your code and temporarily disabling parts of your program for testing. As we progress, our programs will grow in size and complexity. It’s crucial to document your code to ensure it is easily understood and maintainable by yourself and your team. In C#, comments begin with the `//` symbol.

#### Skills to Practice

- Writing and executing code
- Output messages with the `Console.WriteLine()` method
- Debugging potential errors in your code.
- Writing comments to document or disable code.

---

### Instructions

#### Setup

1. Create a new C# console application. Name the project **1.1 Output**.
2. Click Create.

#### Code

Your new project will contain a file with some starter code named _Program.cs_. Erase the code on line 1, and follow along by typing the code you see below. No copy and pasting! You will never be good at coding if you don’t write your own code.

```cs
Console.WriteLine("Hello, world!");
Console.WriteLine("This class is taught by Mr. Mortimer.");
Console.WriteLine("You are currently visiting: https://sehs.io");
Console.WriteLine(); // Display a blank line

Console.WriteLine("What is the answer to life, the universe, and everything?");
Console.WriteLine("The answer is 42.");
Console.WriteLine();

Console.WriteLine("Sally sells seashells by the seashore.");
Console.WriteLine("Sally wants to invite you to invest in a money making opportunity.");
Console.WriteLine();

Console.WriteLine("If you start to feel overwhelmed, just remember:");
Console.WriteLine("Mortimers don't quit, we get fired!");
Console.WriteLine();
Console.WriteLine();

Console.WriteLine("Sincerely,");
Console.WriteLine("Mr. Mortimer");

// These lines are disabled.
// Remove the comment symbols below (//) and run the program one more time.

// Console.WriteLine();
// Console.WriteLine("Display this message for 1 extra credit point");
```

#### Debug

To execute your new program, click the run button at the top of your workspace. If everything was written correctly, you will see the various message output to the console. If not, you need to try and see where you made a mistake in your code. The process of testing your program is called _debugging_.

Compare your console output with the example below to see if they match.

```txt
Hello, world!
This class is taught by Mr. Mortimer.
You are currently visiting: https://sehs.io

What is the answer to life, the universe, and everything?
The answer is 42.

Sally sells seashells by the seashore.
Sally wants to invite you to invest in a money making opportunity.

If you start to feel overwhelmed, just remember:
Mortimers don't quit, we get fired!


Sincerely,
Mr. Mortimer
```

---

### Tips, Tricks, and Reflection

- What happens when you write `Console.WriteLine()` without a message in the parentheses?
- You may have used a programming language where methods are referred to as functions. Technically, a method is a function, but it's defined in a different context. Don't worry about this for now. When we learn about object-oriented programming, we'll discuss this in more detail.
