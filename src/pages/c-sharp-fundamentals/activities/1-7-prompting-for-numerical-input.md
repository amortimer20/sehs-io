---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 1.7 Prompting for Numerical Input
---

[← Back](/c-sharp-fundamentals/)

## Activity 1.7 Prompting for Numerical Input

---

### Introduction

In the last activity, we learned how to prompt the user for input and store their response in a variable using `Console.ReadLine()`. However, there's an important detail to remember: `Console.ReadLine()` method always returns the user input as a **string**. This means if you ask the user to enter a number, you’ll get that number as text, not as something you can use for arithmetic.

**Examples**

```cs
string num1 = "5";
string num2 = "3";
Console.WriteLine(num1 + num2); // Outputs "53", not 8!
Console.WRiteLine(num1 * num2); // Error, cannot multiply strings
```

#### Converting Strings to Numbers

There are a few methods in C# that help us convert strings that contain numbers into numeric types, such as integers and doubles.

- `Convert.ToInt32()` - Converts a string into an integer
- `Convert.ToDouble()` - Convert a string into a double (decimal)

These methods will attempt to convert the string into its corresponding number, and if successful, it will return that number. Remember, some methods can return data. We can then save that returned value to a variable or use it in some other expression.

**Examples**
```cs
// Converting to an integer (whole number)
int number = Convert.ToInt32("32"); // Converts the string "32" to the number 32
Console.WriteLine(number + 10); // Outputs 42

// Converting to a double (number with a decimal)
double decimalNumber = Convert.ToDouble("100.4"); // Converts the string "100.4" to 100.4
Console.WriteLine(decimalNumber + 10.6); // Outputs 111.0
```

**Example Video**

<video src="/courses/c-sharp-fundamentals/numeric-input-animation.mp4" controls style="width: 100%; max-width: 640px;"></video>

#### Handling Errors with Invalid Input

What happens if a user enters something unexpected, like trying to convert "abc" into a number? Or what if we try to convert a string that contains a decimal into an integer, like "32.5"?

```cs
int bad = Convert.ToInt32("32.5"); // This will cause an error!
```

In this case, we’ll get an error because the `Convert.ToInt32()` method cannot handle a number with a decimal—it only works with whole numbers.

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
double area = length * length;

Console.WriteLine($"The area of the square is {area}");
```

#### Debug

```txt
--- Age to Months Calculator ---
Enter your age: 30
You are 30 years old. That's 360 months old, you old fart!

--- Square Area Calculator ---
Enter the length of the square: 25.5
The area of the square is 650.25
```

---

### Tips, Tricks, and Reflection

If writing input, conversion, and variable assignment all in one line feels confusing, it’s completely okay to break it up into multiple steps. In fact, it’s often helpful to write each step on its own line when you’re learning, so you can better understand what’s happening at each stage.

Remember, there’s no rush to write code in fewer lines—what’s important is that the code makes sense to you! Breaking things down into smaller steps can make it easier to spot errors and understand how each part of the program works.