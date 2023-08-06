---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 1.3 String Formatting
---

[← Back](/courses/c-sharp-fundamentals/)

# Activity 1.3 String Formatting

## Introduction

In the previous activity, the math expressions were output seperately from the strings. Although this works, it doesn't look nice. In programming we format strings to construct complex text messages. In C#, there are two popular ways to format strings: _string concatenation_ and _string interpolation_.

String concatenation involves using the plus sign **`+`** to _combine_ data. For example, I can combining `"My name is "` with `"Anthony Mortimer` using the plus sign.

```cs
"My name is " + "Anthony Mortimer"
```

A newer way to format strings is to use a feature called _string interpolation_. With string interpolation, you prefix a string with the dollar sign **`$`**. You then use the curly brace symbols `{}` to insert code expressions anywhere you want to execute code in the string.

```cs
$"My age in months is {30 * 12}."
```

### Skills to Practice

- String concatenation
- String interpolation

## Activity Instructions

### Setup

1. Create a new C# console application. Name the project **1.3 String Formatting**.
2. Click Create.

### Code

```cs
// String concatenation - Use the *+* sign to append math expressions to strings
Console.WriteLine("10 squared is " + 10 * 10); // Multiply 10 * ten, then append it to the string.
Console.WriteLine();

// Mixing addition and string concatenation together can cause problems.
// You can use parentheses to ensure the addition is not mixed up with concatenation.
Console.WriteLine("I'm 5 foot 10 inches. That's " + (5 * 12 + 10) + " inches.");
Console.WriteLine();

// String interpolation - Prefix the string with $ and insert code in { }.
Console.WriteLine($"If I take out a $1000 loan, and pay $25 each month, I will pay my loan off in {1000 / 25} months.");
Console.WriteLine();

Console.WriteLine("A woodchuck can chuck 32 wood panels every minute.");
Console.WriteLine($"Therefore, a woodchuck can chuck {32 * 60} wood panels every hour.");
```

### Debug

```txt
10 squared is 100

I'm 5 foot 10 inches. That's 70 inches.

If I take out a $1000 loan, and pay $25 each month, I will pay my loan off in 40 months.

A woodchuck can chuck 32 wood panels every minute.
Therefore, a woodchuck can chuck 1920 wood panels every hour.
```

## Tips, Tricks, and Reflection

- You are welcome to use either technique for string formatting, but I personally favor string interpolation.
