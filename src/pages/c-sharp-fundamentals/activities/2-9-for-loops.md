---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 2.9 For Loops
---

[← Back](/c-sharp-fundamentals/)

## Activity 2.9 For Loops

---

### Introduction

C# has a number of different loop constructs built in to the language. The while loop is flexible enough to perform just about any task where iteration is required. However, there are other loops that can perform certain tasks with more efficient code.

The **for loop** is similar in nature to a while loop, but it has a different organization. There are three parts to a for loop, other than the `for` keyword and code block:

- Initialization statement - A statement that is executed at the beginning of the loop. This is usually a variable that is used the loop condition. This variable is also typically used in terminating the loop.
- Condition - A logic expresion that determines whether or not to run the loop. The condition works exactly like with a while loop.
- Final expression - At the end of the code block, the final expression executes. This statement typically manipulates the value of the variable declared in the initialization statement.

The following examples can be written with a while loop, but notice how the for loop is concise.

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

#### Skills to Practice

- Writing for loops

---

### Instructions

#### Setup

1. Create a new C# console application. Name the project **2.9 For Loops**.
2. Click Create.

#### Code

```cs
Console.WriteLine("--- Multiples ---");

Console.Write("Choose a number: ");
int number = Convert.ToInt32(Console.ReadLine());
int sum = number; // Sum keeps track of current multiple

Console.Write($"How many multiples of {number} do you want listed? ");
int length = Convert.ToInt32(Console.ReadLine());

for (int i = 0; i < length; i++)
{
    Console.Write(sum + " "); // Count horizontally
    sum = sum + number;
}

Console.WriteLine("\nPress Enter to continue.\n");
Console.ReadLine();

Console.WriteLine("--- Exponents ---");

Console.Write("Choose a base number: ");
number = Convert.ToInt32(Console.ReadLine());
int product = number;

Console.Write("How many products do you want listed? ");
length = Convert.ToInt32(Console.ReadLine());

for (int i = 1; i <= length; i++)
{
    Console.WriteLine($"{number}^{i} = {product}");
    product = product * number;
}
```

#### Debug

```txt
--- Multiples ---
Choose a number: 5
How many multiples of 5 do you want listed? 5
5 10 15 20 25
Press Enter to continue.


--- Exponents ---
Choose a base number: 10
How many products do you want listed? 5
10^1 = 10
10^2 = 100
10^3 = 1000
10^4 = 10000
10^5 = 100000
```

---

### Tips, Tricks, and Reflection

- Remember, you can technically complete all of these sample programs with a while loop, but there are programs that you will write later on that are arguably better written when for loops are used.
