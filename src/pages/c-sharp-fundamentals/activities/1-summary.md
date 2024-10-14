---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: "C# Fundamentals Part 1 Summary"
---

[← Back](/c-sharp-fundamentals/)

## C# Fundamentals Part 1 Summary

---

### Methods

- Methods in programming perform specific tasks or actions. They have a name, parentheses, and sometimes arguments specified within the parentheses. Arguments are values provided to a method that help it carry out its task. Examples from this section:
    - `Console.WriteLine()`
    - `Convert.ToDouble()`
    - `Math.Round()`
- Some programming languages use the term function. Methods are functions, but they are defined in a different context. Feel free to refer to them as functions if you prefer.
- When a method does its job, it often gives back a result. This result is called the return value. The return value may be saved to a variable or used in some expression.

### Data Types

- Data types specify the kinds of data used in programming. There many built-in types, but this section starts with three basic types:
    - string - Represents a sequence of characters, used for text. Example: `"Hello, World!"`
    - int - Stands for integer, used for whole numbers without a decimal point. Example: `42`
    - double - Represents A floating-point number, used for large and precise decimal numbers. Example: `3.14159`

### Output

- Console output refers to information displayed to the user in a console application.
- `Console.WriteLine()` - Outputs text to the console and then moves the cursor to a new line, ready for the next output.
- `Console.Write()` - Displays text but keeps the cursor on the same line, so the next output continues right after it.

### Arithmetic

- **`+`** Addition: Adds two numbers together.
- **`-`** Subtraction: Subtracts one number from another.
- **`*`** Multiplication: Multiplies two numbers.
- **`/`** Division: Divides one number by another and returns the quotient.
- **`%`** Modulus (aka mod): Returns the remainder after division.
- Integer Division: When both operands are integers, the division operation returns an integer result, discarding any remainder
- Floating Point Division: When at least one operand is a decimal number (like double), the division operation returns a floating-point result, including any decimals.
- Use parenthesis () for order of operations.
- **`++`** - Increment operator: Adds 1 (increment) the value of a numeric variable.
- **`--`** - Decrement operator: Subtracts 1 (decrement) from the value of a numeric variable.

### String Formatting

- String concatenation involves using the plus sign ( + ) to combine data.
- A newer way to format strings is through string interpolation. You prefix a string with the dollar sign ( $ ). Then you use curly braces {} to insert code expressions directly within the string.

### Variables

- Variables store data during a program's execution. They can be described as containers for storing information.
- Creating a variable is called declaring a variable.
- Use the equal sign ( = ) to assign a value to a variable.
- Static typing is a language feature where a aata type must be specified during declaration of a variable. Once it's defined, it cannot be changed.
- Variables must be declared before they can be used. This is referred to as variable scope.

### Input

- `Console.ReadLine()` - Allows the user to input via the keyboard. Returns the input as a string value.
    - String values do not perform arithmetic. Therefore, any user input must be converted from a string to a numeric type.

### Type Conversion

- `Convert.ToInt32()` - Converts a specified value to an integer. Returns the integer if successful.
- `Convert.ToDouble()` - Converts a specified value to a floating-point (decimal) number. Returns the double if successful.
- These methods can be used to convert user input from strings to the appropriate numeric type.

### Math Methods and Constants

- `Math.Round()` - Rounds a number to either an integer or to some decimal place
- `Math.Sqrt()` - Calculate the square root of a non-negative number.
- `Math.Pow()` - Raise a base number to the specified exponent.
- `Math.PI` - Represents the constant value π (pi).

### Random Numbers

- Random numbers are used for generating chance in games, for sample data generation, security, etc.
- The `Random` data type is used to for random number generation.
    - Create a variable of type `Random`.
    - The variable has a method named `Next()` which is written `variableName.Next()`.
    - The upper limit of the range is not included in the possible values. For example, in the range Next(1, 101), the upper bound (101) is not included, so the possible values are 1 to 100.