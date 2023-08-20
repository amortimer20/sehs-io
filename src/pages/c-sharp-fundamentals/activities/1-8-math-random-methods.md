---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 1.8 Math Methods and Random Numbers
---

[← Back](/c-sharp-fundamentals/)

## Activity 1.8 Math Methods and Random Numbers

---

### Introduction

This lesson introduces you to more methods that you will utilize throughout this course. One important feature C# provides is a collection math methods and constants for performing advanced math operations. Here are a few that we will cover:

- `Math.Round()` - Rounds a number. Can be used to round to a specific decimal place.
- `Math.Floor()` - Always rounds down to the nearest integer.
- `Math.Ceiling()` - Always roudns up to the nearest integer.
- `Math.Sqrt()` - Calculate the square root of a non-negative number.
- `Math.Pow()` - Raise a base number to the specified exponent.
- `Math.PI` - Represents the constant value π (pi).

Another interesting thing we do in programming is generate random numbers. This allows us to make dynamic games with chance, autogenerate data, etc. We will use a new data type called `Random` for generating random numbers. The syntax for creating a `Random` variable is a little advanced, but we will learn about it in later sections.

#### Skills to Practice

- Utilizing math methods for complex math operations
- Generating random numbers using the `Random` data type

---

### Instructions

#### Setup

1. Create a new C# console application. Name the project **1.8 Math Methods Random**.
2. Click Create.

#### Code

```cs
Console.WriteLine("--- Circumference Calculator ---");

Console.Write("Enter radius: ");
double radius = Convert.ToDouble(Console.ReadLine());
double circumference = 2 * Math.PI * radius;

Console.WriteLine($"Radius: {radius}, Circumference: {circumference}");
Console.WriteLine($"Rounded circumference {Math.Round(circumference, 2)}\n");

Console.WriteLine("--- More math functions --");

// Exponents
Console.Write("Enter base number: ");
double number = Convert.ToDouble(Console.ReadLine());
Console.WriteLine($"{number} cubed equals {Math.Pow(number, 3)}");

// Square roots
Console.Write("Enter a positive number: ");
number = Convert.ToDouble(Console.ReadLine());
Console.WriteLine($"The square root of {number} is {Math.Sqrt(number)}");

// More rounding
Console.Write("Enter a decimal number: ");
number = Convert.ToDouble(Console.ReadLine());
Console.WriteLine($"Round: {Math.Round(number)}, Floor: {Math.Floor(number)}, Ceil: {Math.Ceiling(number)}\n");

Console.WriteLine("--- Random number generation ---");
Random random = new Random();

Console.WriteLine($"Random number between 1 and 10: {random.Next(1, 11)}");
Console.WriteLine($"Random number between 1 and 10: {random.Next(1, 11)}");
Console.WriteLine($"Random number between 1 and 10: {random.Next(1, 11)}");
```

#### Debug

```txt
--- Circumference Calculator ---
Enter radius: 15
Radius: 15, Circumference: 94.24777960769379
Rounded circumference 94.25

--- More math functions --
Enter base number: 7
7 cubed equals 343
Enter a positive number: 81
The square root of 81 is 9
Enter a decimal number: 3.543
Round: 4, Floor: 3, Ceil: 4

--- Random number generation ---
Random number between 1 and 10: 4
Random number between 1 and 10: 8
Random number between 1 and 10: 4
```

---

### Tips, Tricks, and Reflection

- For a detailed list of all the available methods and constants, <a href="https://learn.microsoft.com/en-us/dotnet/api/system.math" target="_blank">click here</a>.
- To learn more about `Random`, <a href="https://learn.microsoft.com/en-us/dotnet/api/system.random" target="_blank">click here</a>.
