---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: "C# Fundamentals 1.1 Hello World"
---

[← Back](/c-sharp-fundamentals/)

## Activity 1.1 Hello World!

---

### Introduction

The programming construct you will learn in this lesson is known as **output**. With regards to console applications, output is information that is displayed to the user. However, output can mean different things depending on the context. In order to output information to the use, we need to use something called `Console.WriteLine()`.

`Console.WriteLine()` is known as a _method_. Methods perform some action in programming. In this case, `Console.WriteLine()` outputs a message to the user via the console. The console is a simple terminal for running text based computer applications. Most of the introductory applications in these programming activities will be console based.

We will also learn how to write comments in Python. Comments serve two purposes, to document, or take notes, in your code, and to disable parts of your program for temporary purposes, such as testing. We will be writing simple programs for the time being, but they will eventually grow in size and complexity. It's important to document parts of your code for yourself and your team, so your code can be easily understood and maintainable. We will start with one type of comment, the single line comment: `// comment`.

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

Your new workspace will contain a file with some starter code named _main.cs_ (or _Program.cs_ in Visual Studio). Erase the code on line 1, and follow along by typing the code you see below. No copy and pasting! You will never be good at coding if you don’t write your own code.

```cs
Console.WriteLine("Hello, world!");
Console.WriteLine("This class is taught by Mr. Mortimer.");
Console.WriteLine("Please visit my blog: https://www.what-oh-heck-no-hold-up-huh-oh-okay.com");
Console.WriteLine(); // Display a blank line

Console.WriteLine("What is the answer to life, the universe, and everything?");
Console.WriteLine("The answer is 42.");
Console.WriteLine();

Console.WriteLine("Sally sells seashells by the seashore.");
Console.WriteLine("Sally's doing five years for running a seashell pyramid scheme.");
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
// Console.WriteLine("PS You're fired!");
```

#### Debug

To execute your new program, click the run button at the top of your workspace. If everything was written correctly, you will see the various message output to the console. If not, you need to try and see where you made a mistake in your code. The process of testing your program is called _debugging_.

Compare your console output with the example below to see if they match.

```txt
Hello, world!
This class is taught by Mr. Mortimer.
Please visit my blog: https://www.what-oh-heck-no-hold-up-huh-oh-okay.com

What is the answer to life, the universe, and everything?
42. The answer is 42.

Sally sells seashells by the seashore.
Sally's doing five years for running a seashell pyramid scheme.

If you start to feel overwhelmed, just remember:
Mortimers don't quit, we get fired!


Sincerely,
Mr. Mortimer

PS You're fired!
```

---

### Tips, Tricks, and Reflection

- What happens when you write `Console.WriteLine()` without a message in the parentheses?
- You may have used a programming language where methods are referred to as functions. Technically, a method is a function, but it's defined in a different context. Don't worry about this for now. When we learn about object-oriented programming, we'll discuss this in more detail.
