---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 2.9 For Loops
---

[← Back](/c-sharp-fundamentals/)

## Activity 2.9 For Loops

---

### Introduction

C# offers several loop constructs to facilitate iteration. While the while loop is versatile enough to handle most iterative tasks, other loops can sometimes achieve the same results with more efficient code.

One such loop is the **for loop**. Although it shares similarities with the while loop, its structure is distinct. A for loop consists of three main components, aside from the for keyword and the code block:

- **Initialization statement**: Executed once at the beginning of the loop, this statement typically initializes a variable used in the loop condition and termination.
- **Condition**: A logical expression evaluated before each iteration. If the condition is true, the loop continues; otherwise, it stops. This works similarly to the condition in a while loop.
- **Increment/Decrement expression**: Executed at the end of each iteration, this statement usually updates the variable initialized in the first part.

**Example**: Count up from 1 to 10 with a for loop

```cs
for (int i = 1; i <= 10; i++)
{
  Console.WriteLine(i);
}
```

**Example**: Count down from 10 to 1 with a for loop

```cs
for (int i = 10; i >= 1; i--)
{
  Console.WriteLine(i);
}
```

**Example Video**

<video src="/courses/c-sharp-fundamentals/for-loop-animation.mp4" controls style="width: 100%; max-width: 640px;"></video>


**While loop vs For loop**

- Use a for loop when you know the exact number of iterations required before starting the loop. This means you have a predetermined number of times the loop should execute.
- Use a while loop when the number of iterations is unknown, such as when you're waiting for a condition to be met during program execution.

#### Skills to Practice

- Writing for loops

---

### Instructions

#### Setup

1. Create a new C# console application. Name the project **2.9 For Loops**.
2. Click Create.

#### Code

```cs
Console.WriteLine("--- Demo 1 - Counting Multiples ---");

Console.Write("Choose a number: ");
int number = Convert.ToInt32(Console.ReadLine());
int sum = number; // Sum keeps track of current multiple

Console.Write($"How many multiples of {number} would you like listed? ");
int length = Convert.ToInt32(Console.ReadLine());

for (int i = 0; i < length; i++)
{
    Console.Write(sum + " "); // Count horizontally
    sum = sum + number;
}

Console.WriteLine("\nPress Enter to continue.\n");
Console.ReadLine();

Console.WriteLine("--- Demo 2 - Square Tables ---");

Console.Write("How many numbers would you like displayed? ");
int num = Convert.ToInt32(Console.ReadLine());

Console.WriteLine("\nNumber\tSquare");
Console.WriteLine("----------------");

// Use a for loop to print numbers 1 to 10 and their squares
for (int i = 1; i <= num; i++)
{
    Console.WriteLine($"{i}\t{i * i}");
}

```

#### Debug

```txt
--- Demo 1 - Counting Multiples ---
Choose a number: 3
How many multiples of 3 would you like listed? 5
3 6 9 12 15
Press Enter to continue.


--- Demo 2 - Square Tables ---
How many numbers would you like displayed? 7

Number  Square
----------------
1       1
2       4
3       9
4       16
5       25
6       36
7       49
```

---

### Tips, Tricks, and Reflection

- Remember, you can complete all of these sample programs using a while loop, but some programs you write later on might be more concise when using for loops.
