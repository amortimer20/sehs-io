---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: "C# Fundamentals 1.2 Arithmetic"
---

[← Back](/c-sharp-fundamentals/)

## Activity 1.2 Arithmetic

---

### Introduction

Mathematics is a cornerstone of computer science. Any useful program, from video games to online stores, relies on numbers. Whether it's calculating scores, processing transactions, or generating graphics, math is everywhere in software.

In C#, we don’t just use math to crunch numbers; we also use it to display results to users. The `Console.WriteLine()` method helps us with this—it can output text messages, numbers, and the results of math expressions.

**Integers and Doubles**

C#, like many other programming languages, differentiates between whole numbers and decimal numbers. Whole numbers are called integers, while decimal numbers are referred to as doubles (or floating-point numbers). This distinction is crucial for handling arithmetic operations accurately.

**Math Operators**

- **`+`** Addition: Adds two numbers together.
- **`-`** Subtraction: Subtracts one number from another.
- **`*`** Multiplication: Multiplies two numbers.
- **`/`** Division: Divides one number by another and returns the quotient.
- **`%`** Modulus (aka mod): Returns the remainder after division.

#### Integer and Floating-point Division

In C#, division behaves differently depending on whether you’re using integers or doubles.

**Integer division**

When you divide two integers, C# performs integer division, which means it discards any fractional part and returns only the whole number.

```cs
Console.WriteLine(10 / 3); // Outputs 5
Console.WriteLine(10 / 4); // Outputs 2
```

**Floating-point (decimal) division**

If at least one of the numbers has a decimal, the result will have a decimal.

```cs
Console.WriteLine(10.0 / 3); // Outputs 3.3333333333333335
Console.WriteLine(10 / 6.25); // Outputs 1.6
```

The use of multiple division symbols might seem a bit unfamiliar because they don't match the ones we use in traditional arithmetic. Don't worry, we'll practice them thoroughly so you can see how useful they are for dividing numbers in different ways.

#### Skills to Practice

- Write math expressions
- Output numbers with `Console.WriteLine()`
- Document code with single line comments
- Control math calculation with order of operations

### Instructions

#### Setup

1. Create a new C# console application. Name the project **1.2 Math**.
2. Click Create.

#### Code

```cs
// Addition
Console.WriteLine("I'm adding 2 and 1. The result is:");
Console.WriteLine(2 + 1);
Console.WriteLine();

Console.WriteLine("Adding $1000 and $500.96 gives us:");
Console.WriteLine(1000 + 500.96);
Console.WriteLine();

// Subtraction
Console.WriteLine("I have 3 apples, and I eat one. Now, I have:");
Console.WriteLine(3 - 1);
Console.WriteLine();

// Multiplication
Console.WriteLine("I'm 30 years old. In months, that's: ");
Console.WriteLine(30 * 12);
Console.WriteLine();

// Division - Quotient and remainder

// Quotient
Console.WriteLine("If we divide 8 pizza slices between 2 people, each person gets:");
Console.WriteLine(8 / 2);
Console.WriteLine();

Console.WriteLine("Dividing $100 among 6 people gives each person:");
Console.WriteLine(100.0 / 6);
Console.WriteLine("Without fractional amounts, each person gets:");
Console.WriteLine(100 / 6);
Console.WriteLine();

// Remainder using the modulus, or mod, operator
Console.WriteLine("After dividing $100 among 6 people, the leftover cents are:");
Console.WriteLine(100 % 6);
Console.WriteLine();

// Order of operations
Console.WriteLine("The expression 4 * 10 + 12 equals:");
Console.WriteLine(4 * 10 + 12);
Console.WriteLine("The expression 4 * (10 + 12) equals:");
Console.WriteLine(4 * (10 + 12));
```

#### Debug

```txt
Adding $1000 and $500.96 gives us:
1500.96

I have 3 apples, and I eat one. Now, I have:
2

I'm 30 years old. In months, that's:
360

If we divide 8 pizza slices between 2 people, each person gets:
4

Dividing $100 among 6 people gives each person:
16.666666666666668
Without fractional amounts, each person gets:
16

After dividing $100 among 6 people, the leftover cents are:
4

The expression 4 * 10 + 12 equals:
52
The expression 4 * (10 + 12) equals:
88
```

### Tips, Tricks, and Reflection

- Formatting Issues: Notice how the division involving money returns a repeating decimal, every answer is on its own line, and the monetary values lack a dollar sign. We'll learn how to fix these issues in future lessons to make the output more readable and professional.
- Spacing in Math Expressions: While it’s valid to write `2+2`, it’s much clearer to write `2 + 2`. Using spaces around math operators improves readability and helps you spot errors more easily.
- You will see this math terms used frequently:
    - Operators: The symbols used in math expressions (+, -, *, /, %).
    - Operands: The numbers used with operators.
    - Expressions: Math statements that combine operators and operands to calculate a value.
