---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 3.2 Arrays and Loops
---

[← Back](/c-sharp-fundamentals/)

## Activity 3.2 Arrays and Loops

---

### Introduction

At this point, we've seen how arrays allow us to store multiple elements under a single variable, making it much easier to manage collections of data. However, the examples we've worked with might not seem very practical. After all, we've been manually accessing specific indexes, assigning values, and retrieving them one by one. This approach works fine when dealing with a handful of elements, but what if you had hundreds or even thousands of elements to process?

Manually working with each index would not only be inefficient but also highly error-prone. Imagine trying to manage a large dataset—having to manually reference each element would be overwhelming and impractical.

**Sample array with output**

```cs
string[] games = ["Fallout", "Sonic", "Super Mario"];
int i = 0;

Console.WriteLine(games[i]);
i++;
Console.WriteLine(games[i]);
i++;
Console.WriteLine(games[i]);
i++;
```

```txt
Fallout
Sonic
Super Mario
```

Notice the repetition and copied code? Let's refactor this so it uses a while loop.

```cs
string[] games = ["Fallout", "Sonic", "Super Mario"];
int i = 0;

while (i < 3)
{
    Console.WriteLine(games[i]);
    i++;
}
```

While this code works, it’s not flexible. If the array size changes, we would need to update the condition manually. To address this, we can use the `Length` property of arrays.

#### Array.Length

Arrays in C# have a property called `Length`, which gives the total number of elements in the array. This makes our code more flexible by allowing us to loop through all elements, regardless of how many there are.

Note, we will cover properties properly later on in the course.


```cs
string[] games = ["Fallout", "Sonic", "Super Mario", "Final Fantasy", "The Legend of Zelda", "Metroid", "Earthbound"];
int i = 0;

while (i < games.Length) // games.Length returns 7
{
    Console.WriteLine(games[i]);
    i++;
}
```

In this code, games.Length dynamically adjusts to the size of the array. The loop will process every element, even if the array grows or shrinks.

#### For Loops

A for loop is a more concise and often preferred way to iterate through arrays. We can use a for loop perform one more refactor our code.

```cs
string[] games = ["Fallout", "Sonic", "Super Mario", "Final Fantasy", "The Legend of Zelda", "Metroid", "Earthbound"];

for (int i = 0; i < games.Length; i++)
{
    Console.WriteLine(games[i]);
}
```

The result is the same as the while loop, but the for loop makes the code more concise and easier to read. You'll often see for loops favored when working with arrays because of this simplicity. However, always choose the loop type that best fits your needs.

#### Skills to Practice

- Creating arrays
- Assigning elements to an array
- Accessing values in an array using integer variables
- Iterating through arrays using loops

---

### Instructions

#### Setup

1. Create a new C# console application. Name the project **3.2 Arrays and Loops**.
2. Click Create.

#### Code

```cs
Console.WriteLine("Demo 1 - Populate an array\n");

Console.Write("How many numbers will your collection contain? ");
int size = Convert.ToInt32(Console.ReadLine());

double[] numbers = new double[size]; // Length is determined by user input

for (int i = 0; i < numbers.Length; i++)
{
    // Start counting at 1 from user's perspective
    Console.Write($"Element {i + 1}: ");
    numbers[i] = Convert.ToDouble(Console.ReadLine());
}

Console.Write("Here are your elements: ");

for (int i = 0; i < numbers.Length; i++)
{
    Console.Write(numbers[i] + " ");
}
Console.WriteLine();

Console.WriteLine("\nPress enter to continue...");
Console.ReadLine();

Console.WriteLine("Demo 2 - Sum Calculator\n");

double sum = 0;

for (int i = 0; i < numbers.Length; i++)
{
    // Uncomment to see the sum algorithm in action
    //Console.WriteLine($"{sum} + {numbers[i]} = {sum + numbers[i]}");
    sum = sum + numbers[i];
}

Console.WriteLine($"The sum is {sum}");
```

#### Debug

```txt
Demo 1 - Populate an array

How many numbers will your collection contain? 5
Element 1: 34
Element 2: 19
Element 3: 25.5
Element 4: 42
Element 5: 96
Here are your elements: 34 19 25.5 42 96

Press enter to continue...

Demo 2 - Sum Calculator

The sum is 216.5
```

---

### Tips, Tricks, and Reflection

- Be cautious when writing while loops for iterating over arrays. If you forget to increment i (e.g., by leaving out i++), the condition will never become false, and your program could get stuck in an infinite loop.