---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals Part 1 Extras
---

[← Back](/c-sharp-fundamentals/)

## C# Fundamentals Part 1 Extras

---

### Introduction

**Part 1 Extras** includes various useful programming content that didn't quite fit into a specific lesson. While you might not encounter some of these techniques in upcoming lessons, feel free to incorporate them into your future programs.

### Compound Assignment

Compound assignment operators combine variable assignment and arithmetic operations, allowing for more concise statements. They simplify the code by performing both tasks in a single step.

`+=` - Adds the right operand to the variable on the left side and assigns the result to the variable.

`-=` - Subtracts the right operand from the variable on the left side and assigns the result to the variable.

`*=` - Multiplies the right operand by the variable on the left side and assigns the result to the variable.

`/=` - Divides the variable by the right operand and assigns the result to the variable.

`%=` - Divides the variable by the right operand and assigns the remainder to the variable.

**Examples**

```cs
int number = 10;

number += 5;  // Equivalent to number = number + 5;
Console.WriteLine(number);

number -= 3;  // Equivalent to number = number - 3;
Console.WriteLine(number);

number *= 2;  // Equivalent to number = number * 2;
Console.WriteLine(number);

number /= 4;  // Equivalent to number = number / 4;
Console.WriteLine(number);

number %= 4;  // Equivalent to number = number % 4;
Console.WriteLine(number);
```

### Constants

Constants are named identifiers whose values are assigned at compile time (when the program is converted to executable code) and remain the same throughout the execution of the program. Think of constants as variables that are assigned a value before the program starts and can never be changed.

Constants provide a way to keep values fixed throughout the execution of a program. This prevents accidental changes that could introduce bugs or inconsistent behavior.

**Examples**

```cs
const double TAX_RATE = 0.8;const double TAX_RATE = 0.08; // Constants are typically named in uppercase
double subtotal = 20.48;
double grandTotal = subtotal * TAX_RATE;
```

In this example:

- TAX_RATE is a constant representing a fixed tax rate.
- Using a constant for the tax rate ensures that it remains unchanged and easily identifiable throughout the program.

Recall that `Math.PI` from Activity 1.8 is a constant. π is always the same value and should never change. Thus, it's defined as a constant as opposed to a simple variable.

### Escape Characters

Escape characters are special sequences used in strings to represent characters that are difficult to type directly into plain text. Here are a few useful escape characters you may need down the line. [See article](https://en.wikipedia.org/wiki/Escape_character) for more examples.

- `\n`: Newline - We've used the newline character to add extra spacing between lines of output.
- `\t`: Tab - Tabs are useful for providing even spacing between data.
- `\"`: Double quote - Use this if you need to put a double quote within a string.
- `\\`: Literal backslash - Since backslashes denote the beginning of an escape character, they need an escape character of their own.

