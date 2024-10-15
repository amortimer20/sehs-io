---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 1.6 Prompting for Input
---

[← Back](/c-sharp-fundamentals/)

## Activity 1.6 Prompting for Input

### Introduction

In our previous lessons, we’ve used the Console.WriteLine() method to display messages to the user. But so far, our programs haven’t allowed users to provide input.

In this lesson, we’re going to learn how to get input from the user using the `Console.ReadLine()` method. With this method, users can interact with the program by typing into the console. This exchange of information between the user and the program is known as input and output (often abbreviated as I/O).

#### Console.ReadLine()

`Console.ReadLine()` is a method that pauses the program and waits for the user to type something in the console. When the user presses Enter, the input they typed is returned as a string. When a method does its job, it often gives back a result. This result is called the return value. The return value may be saved to a variable or used in some other expression.

In short, `Console.ReadLine()` can be thought of as asking a question and waiting for an answer.

```cs
Console.WriteLine("Enter your favorite color:");
string favoriteColor = Console.ReadLine();
Console.WriteLine("Your favorite color is " + favoriteColor);
```

```txt
Enter your favorite color:
purple [Enter]
Your favorite color is purple
```

**Example Video**

<video src="/courses/c-sharp-fundamentals/input-animation.mp4" controls style="width: 100%; max-width: 640px;"></video>

#### Console.Write()

You might have noticed that `Console.WriteLine()` always moves the cursor to a new line after printing the message. Sometimes, we want the cursor to stay on the same line so that the user can input their information on the same line as the prompt. We have a method, `Console.Write()`, that helps us with this.

The `Console.Write()` method works similarly to Console.WriteLine(), but it does not move the cursor to the next line after outputting text. This allows for cleaner looking prompts.

```cs
Console.Write("Enter your favorite color: ");
string favoriteColor = Console.ReadLine();
Console.WriteLine("Your favorite color is " + favoriteColor);
```

```txt
Enter your favorite color: purple [Enter]
Your favorite color is purple
```

#### Skills to Practice

- Prompt a user for input and saving it to a variable
- Using variables containing user input

### Instructions

#### Setup

1. Create a new C# console application. Name the project **1.6 Input**.
2. Click Create.

#### Code

```cs
Console.WriteLine("--- Demo 1 - Simple To-Do List ---");

Console.WriteLine("Let's add a few tasks to your list.");

Console.Write("Task 1: ");
string task1 = Console.ReadLine();

Console.Write("Task 2: ");
string task2 = Console.ReadLine();

Console.Write("Task 3: ");
string task3 = Console.ReadLine();

Console.WriteLine("\nYour To-Do List:");
Console.WriteLine("1. " + task1);
Console.WriteLine("2. " + task2);
Console.WriteLine("3. " + task3);


// Pause the program and wait for the user to press Enter before continuing to the next demo
Console.WriteLine("Press enter to continue...");
Console.ReadLine();


Console.WriteLine("--- Demo 2 - User Profile Setup ---");
Console.WriteLine("WELCOME! LET'S SET UP YOUR PROFILE...");

Console.Write("Enter your username: ");
string username = Console.ReadLine();

Console.Write("What’s your favorite subject in school? ");
string subject = Console.ReadLine();

// List of options
Console.WriteLine("Choose your preferred after-school activity:");
Console.WriteLine("- Sports");
Console.WriteLine("- Music");
Console.WriteLine("- Gaming");
Console.WriteLine("- Volunteering");
Console.Write("-> "); // Cool arrow prompt; Doesn't do anything special
string activity = Console.ReadLine();

Console.WriteLine("\n- Creating your profile -");
Console.WriteLine($"NAME: {username}");
Console.WriteLine($"FAVORITE SUBJECT: {subject}");
Console.WriteLine($"AFTER-SCHOOL ACTIVITY: {activity}");
```

#### Debug

Since you can now type into the console, it's not enough to just click run and look at the output, you need to interact with the program! To do this, click into the console, type your input, and press **enter** to submit your input.

Your programs no longer need look exactly like the sample output. Feel free to type whatever you like.

```txt
--- Demo 1 - Simple To-Do List ---
Let's add a few tasks to your list.
Task 1: cook
Task 2: clean
Task 3: homework

Your To-Do List:
1. cook
2. clean
3. homework
Press enter to continue...

--- Demo 2 - User Profile Setup ---
WELCOME! LET'S SET UP YOUR PROFILE...
Enter your username: chungus23
What's your favorite subject in school? computer science
Choose your preferred after-school activity:
- Sports
- Music
- Gaming
- Volunteering
-> gaming

- Creating your profile -
NAME: chungus23
FAVORITE SUBJECT: computer science
AFTER-SCHOOL ACTIVITY: gaming
```

### Tips, Tricks, and Reflection

- You might have tried asking the user for a number and then attempted to perform calculations with that input. However, this won’t work just yet because `Console.ReadLine()` always returns the input as a string, or text. To perform math operations, we need to convert these strings into numbers. In the next activity, we'll learn how to make this conversion so that we can use the input in calculations!

- Think about other types of input you might need to work with besides numbers and text (dates, colors, lists of items, etc.). How do you think we might handle those kinds of information?