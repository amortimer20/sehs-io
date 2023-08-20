---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 1.7 Prompting for Numerical Input
---

[← Back](/c-sharp-fundamentals/)

## Activity 1.7 Prompting for Numerical Input

---

### Introduction

In the last activity, we learned how to prompt a user for input, and save their response to a variable. There is an issue that may arise with using `Console.ReadLine()`, this method always returns a **string**. Math cannot be performed with strings. Therefore, we need to be able to convert strings containing numbers into the number data type.

There are two methods for converting a string into a number:

- `Convert.ToInt32()` - Convert a string into an integer
- `Convert.ToDouble()` - Convert a string into a double (decimal)

**Examples**
```cs
Convert.ToInt32("32") // "32" converts to 32
Convert.ToDouble("100.4") // "100.4" converts to 100.4
Convert.ToInt32("32.5") // Raises an error. C# doesn't want to corrupt the data by removing the decimal.
```

#### Skills to Practice

- Prompting a user for input and saving it to a variable
- Converting input from a string to a number
  - Convert a string into an integer using `Convert.ToInt32()`
  - Convert a string into a double (decimal) using `Convert.ToDouble()`

---

### Instructions

#### Setup

1. Create a new C# console application. Name the project **1.7 Numerical Input**.
2. Click Create.

#### Code

```cs
// Age to months calculator
Console.WriteLine("--- Age to Months Calculator ---");
// Steps involved in the statements below:
// 1) User types in age
// 2) Convert string input to integer and save it to a new variable
Console.Write("Enter your age: ");
string ageString = Console.ReadLine();
int age = Convert.ToInt32(ageString);

Console.WriteLine($"You are {age} years old. That's {age * 12} months old, you old fart!\n");

// Square area calculator
Console.WriteLine("--- Square Area Calculator ---");
// Shorter, concise way to get input, convert to number, and save to variable
Console.Write("Enter the length of the square: ");
double length = Convert.ToDouble(Console.ReadLine());
Console.Write("Enter the unit of measurement (in, ft, m): ");
string unit = Console.ReadLine();
double area = length * length;

Console.WriteLine($"The area of the square is {area}{unit} squared");
```

#### Debug

```txt
--- Age to Months Calculator ---
Enter your age: 30
You are 30 years old. That's 360 months old, you old fart!

--- Square Area Calculator ---
Enter the length of the square: 25.5
Enter the unit of measurement (in, ft, m): ft
The area of the square is 650.25ft squared
```

---

### Tips, Tricks, and Reflection

- If getting input, converting it to a number, and saving it to a variable in one line is confusing, then write the code the long way. Sometimes it can be confusing, and it's perfectly fine to write the code over a few lines.
