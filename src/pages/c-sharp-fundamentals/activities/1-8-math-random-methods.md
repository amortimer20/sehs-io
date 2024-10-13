---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 1.8 Math Methods and Random Numbers
---

[← Back](/c-sharp-fundamentals/)

## Activity 1.8 Math Methods and Random Numbers

---

### Introduction

This lesson introduces you to some essential math methods and constants provided by the C# Math class. These tools will be invaluable throughout your programming journey, helping you perform advanced mathematical operations with ease. Here are some of the methods and constants we'll cover:

- `Math.Round()` - Rounds a number. Can be used to round to a specific decimal place.
    - `Math.Round(33.526)` rounds to the nearest integer (34).
    - `Math.Round(33.526, 2)` rounds to the second decimal place (33.53).
- `Math.Floor()` - Always rounds down to the nearest integer.
- `Math.Ceiling()` - Always roudns up to the nearest integer.
- `Math.Sqrt()` - Calculate the square root of a non-negative number.
- `Math.Pow()` - Raise a base number to the specified exponent.
- `Math.PI` - Represents the constant value π (pi).

#### Random Number Generation

Another interesting aspect of programming is the ability to generate random numbers. This capability allows us to create dynamic games involving chance, automatically generate data, and much more.

In C#, we use the Random class to generate random numbers. We create a variable with the data type `Random`. This variable gives us access to a method called `Random.Next()`. The syntax for creating this variable and using this method is a little foreign, but don't worry—we'll dive deeper into this syntax in later sections.

Some programming languages will generate a random range of numbers, but the top number we specify isn't included in the range of possible numbers. This is called an exclusive upper bound. It might seem odd, but it serves a purpose. Just remember the syntax for now; we'll discuss its practical uses later.

```cs
Random random = new Random();
int randomNumber = random.Next(1, 101); // Generates a number between 1 and 100
Console.WriteLine("Random number between 1 and 100: " + randomNumber);
```

#### Skills to Practice

- Utilizing math methods for complex math operations
- Generating random numbers using the `Random` data type

---

### Instructions

#### Setup

1. Create a new C# console application. Name the project **1.8 Math Methods and Random Numbers**.
2. Click Create.

#### Code

```cs
Console.WriteLine("--- Demo 1 - Circumference Calculator ---\n");

Console.Write("Enter radius: ");
double radius = Convert.ToDouble(Console.ReadLine());
double circumference = 2 * Math.PI * radius;

Console.WriteLine($"Radius: {radius}, Circumference: {circumference}");
Console.WriteLine($"Rounded circumference {Math.Round(circumference, 2)}\n");


Console.WriteLine("Press enter to continue...");
Console.ReadLine();


Console.WriteLine("--- Demo 2 - More Math Functions --");

Console.WriteLine("-Exponents-");
Console.Write("Enter base number: ");
double number = Convert.ToDouble(Console.ReadLine());
Console.Write("Enter exponent: ");
double exponent = Convert.ToDouble(Console.ReadLine());
// Caret (^) can be used to symbolize exponents in plain text
Console.WriteLine($"{number}^{exponent} is {Math.Pow(number, exponent)}\n");

Console.WriteLine("-Square Roots-");
Console.Write("Enter a positive number: ");
number = Convert.ToDouble(Console.ReadLine());
Console.WriteLine($"The square root of {number} is {Math.Sqrt(number)}\n");

Console.WriteLine("-Rounding methods-");
Console.Write("Enter a decimal number: ");
number = Convert.ToDouble(Console.ReadLine());
Console.WriteLine($"Round: {Math.Round(number)}, Floor: {Math.Floor(number)}, Ceil: {Math.Ceiling(number)}\n");


Console.WriteLine("Press enter to continue...");
Console.ReadLine();


Console.WriteLine("--- Demo 3 - Random Number Generation ---");
Random random = new Random();

int n1 = random.Next(1, 11); // 1 to 10
int n2 = random.Next(1, 1001); // 1 to 1000

Console.WriteLine($"Random number between 1 and 10: {n1}");
Console.WriteLine($"Random number between 1 and 1000: {n2}");
```

#### Debug

```txt
--- Demo 1 - Circumference Calculator ---

Enter radius: 5
Radius: 5, Circumference: 31.41592653589793
Rounded circumference 31.42

Press enter to continue...

--- Demo 2 - More Math Functions --
-Exponents-
Enter base number: 3
Enter exponent: 4
3^4 is 81

-Square Roots-
Enter a positive number: 16
The square root of 16 is 4

-Rounding methods-
Enter a decimal number: 53.54
Round: 54, Floor: 53, Ceil: 54

Press enter to continue...

--- Demo 3 - Random Number Generation ---
Random number between 1 and 10: 10
Random number between 1 and 1000: 6
```

---

### Tips, Tricks, and Reflection

- For a detailed list of Math methods and constants, <a href="https://learn.microsoft.com/en-us/dotnet/api/system.math" target="_blank">click here</a>.
- To learn more about `Random`, <a href="https://learn.microsoft.com/en-us/dotnet/api/system.random" target="_blank">click here</a>.
    - Sometimes when learning a programming language, you may need to learn some techniques without knowing exactly every little detail of the syntax and/or behavior. Just know that it will all make sense in the end.