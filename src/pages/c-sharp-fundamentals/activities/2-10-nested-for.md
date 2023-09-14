---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 2.10 Nested For Loops - Multiplication Table
---

[← Back](/c-sharp-fundamentals/)

## Activity 2.10 Nested For Loops - Multiplication Table

---

### Introduction

Nested loops are loops within loops. They are the stuff of nightmares and legends. Every time the outer loops executes an iteration, the inner loop performs a full set of iterations. It's important to understand how to trace nested loops, as they can be a cause of confusion when time is not taken to understand them. This activity consists of building a multiplication table. As you're coding, try manipulating the program to see how the output differs. For example, play around with newlines, disabling certain sections, etc.

**Example**

```cs
for (int i = 0; i < 3; i++)
{
    for (int j = 0; j < 3; j++)
    {
        Console.WriteLine($"i: {i}, j: {j}");
    }
}
```
```txt
i: 0, j: 0
i: 0, j: 1
i: 0, j: 2
i: 1, j: 0
i: 1, j: 1
i: 1, j: 2
i: 2, j: 0
i: 2, j: 1
i: 2, j: 2
```

The outer for loop iterates three times, where i increments from 0 to 2 the inner loop iterates three times as well. Three iterations of the outer loop _times_ three iterations of the inner loop iterations totals 9 iterations. Isn't this great?! Also, notice the declared variables will often be named using sequential letters after _i_.

#### Skills to Practice

- Writing nested for loops
- Tracing loop iterations and corresponding variable values

---

### Instructions

#### Setup

1. Create a new C# console application. Name the project **2.10 Multiplication Table**.
2. Click Create.

#### Code

```cs
Console.WriteLine("--- Multiplication Table ---");
Console.Write("What number do you want to multiply up to? ");
int max = Convert.ToInt32(Console.ReadLine());

// Header row
for (int i = 0; i <= max; i++)
{
    // Color top row and left column to distinguish them
    Console.ForegroundColor = ConsoleColor.DarkGreen;

    // Exclude zero at top left
    if (i == 0)
    {
        Console.Write("  "); // 2 spaces
    }
    else
    {
        Console.Write(i + " "); // Add blank space to the right
    }
}

Console.WriteLine();

for (int i = 1; i <= max; i++)
{
    // Left column
    Console.ForegroundColor = ConsoleColor.DarkGreen;
    Console.Write(i + " ");
    Console.ForegroundColor = ConsoleColor.White;

    for (int j = 1; j <= max; j++)
    {
        Console.Write(i * j + " ");
    }

    Console.WriteLine();
}
```

#### Debug

Note: The green console color won't display in the example below, but it will work in an actual terminal.

```txt
--- Multiplication Table ---
What number to you want to multiply up to? 10
  1 2 3 4 5 6 7 8 9 10
1 1 2 3 4 5 6 7 8 9 10
2 2 4 6 8 10 12 14 16 18 20
3 3 6 9 12 15 18 21 24 27 30
4 4 8 12 16 20 24 28 32 36 40
5 5 10 15 20 25 30 35 40 45 50
6 6 12 18 24 30 36 42 48 54 60
7 7 14 21 28 35 42 49 56 63 70
8 8 16 24 32 40 48 56 64 72 80
9 9 18 27 36 45 54 63 72 81 90
10 10 20 30 40 50 60 70 80 90 100
```

---

### Tips, Tricks, and Reflection

- Notice the table becomes uneven as you list larger numbers. Consider a way to pad numbers ahead of time. Maybe use \t and see what it does?
