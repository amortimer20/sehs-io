---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 2.10 Nested Loops
---

[← Back](/c-sharp-fundamentals/)

## Activity 2.10 Nested Loops

---

### Introduction

In this lesson, we’ll explore the concept of nested loops in C#. Nested loops are tools for handling tasks that involve multiple layers of repetition. By placing one loop inside another, you can manage more complex operations efficiently. In computer science education, nested loops are both challenging and legendary. Each time the outer loop runs, the inner loop completes all its iterations. When tracing nested loops, take your time—it's easy to get lost in the iterations.

Note, you can nest with any kind of loop, but we will be practicing with for loops.

**Example Use Cases**

- Generating tables
- Iterating through rows and columns in a 2D data, such as a spreadsheet
- Performing operations on matrices
- Managing nested menus or options in a user interface
- Iterating through game data that is grid based (Tic-Tac-Toe, Connect 4, Sudoku)

**Example**

```cs
for (int row = 1; row <= 5; row++)
{
	for (int col = 1; col <= 3; col++)
	{
        Console.Write($"[Row {row}, Col {col}]\t");
	}

    Console.WriteLine();
}
```
```txt
[Row 1, Col 1]  [Row 1, Col 2]  [Row 1, Col 3]
[Row 2, Col 1]  [Row 2, Col 2]  [Row 2, Col 3]
[Row 3, Col 1]  [Row 3, Col 2]  [Row 3, Col 3]
[Row 4, Col 1]  [Row 4, Col 2]  [Row 4, Col 3]
[Row 5, Col 1]  [Row 5, Col 2]  [Row 5, Col 3]
```

**Example Video**

<video src="/courses/c-sharp-fundamentals/nested-loop-animation.mp4" controls style="width: 100%; max-width: 640px;"></video>

#### Skills to Practice

- Writing nested loops
- Generating tables

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
Console.WriteLine();

// Header row
for (int i = 0; i <= max; i++)
{
    // Color top row and left column to distinguish them
    Console.ForegroundColor = ConsoleColor.DarkGreen;

    // Exclude zero at top left
    if (i == 0)
    {
        Console.Write("\t"); // Tab space for alignment
    }
    else
    {
        Console.Write($"{i}\t"); // Use \t for spacing
    }
}

Console.WriteLine();

for (int n1 = 1; n1 <= max; n1++)
{
    // Left column
    Console.ForegroundColor = ConsoleColor.DarkGreen;
    Console.Write($"{n1}\t");
    Console.ForegroundColor = ConsoleColor.White;

    // Body for each row
    for (int n2 = 1; n2 <= max; n2++)
    {
        Console.Write($"{n1 * n2}\t"); // Use \t for spacing
    }

    Console.WriteLine();
}
```

#### Debug

Note: The green console color won't display in the example below, but it will work in an actual terminal.

```txt
--- Multiplication Table ---
What number do you want to multiply up to? 5

        1       2       3       4       5
1       1       2       3       4       5
2       2       4       6       8       10
3       3       6       9       12      15
4       4       8       12      16      20
5       5       10      15      20      25
```

---

### Tips, Tricks, and Reflection

- Nested loops can be pretty intimidating when starting out. Here are a few tips to help you:
    - **Start Simple**: Begin with basic loops and ensure you understand how they function individually before nesting them.
    - **Debugging Tools**: Use debugging tools and breakpoints to step through your loops and inspect the values of variables at each stage.
    - **Use Comments**: Add comments in your code to explain what each loop is doing. This practice makes it easier to follow the logic.