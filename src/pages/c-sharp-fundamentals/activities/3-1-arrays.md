---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 3.1 Arrays
---

[← Back](/c-sharp-fundamentals/)

## Activity 3.1 Arrays

---

### Introduction

Thus far, we've been able to start building some pretty cool applications. There's one big missing piece though when it comes to storing data: What happens when we need to store many things of the same kind? For example, what if you're building an application that allows a user to create a music playlist. How many variables will you need? One string variable per song? What if you need to store a couple songs, one hundred songs, or even one thousand songs!? This could become a massive headache if we stored one song per variable. Luckily, there's a solution to this problem.

Programming languages have a way to store many things together in a group. These are known as **data structures**. C# provides a data type known as an **array** that is capable of storing data of the same type in a collection. An important feature of an array is that it is of a _fixed size_, meaning that the number of items an array can store must be determined when it is initialized.

##### Declaring an Array Variable

```cs
string[] friends;
```

The variable titled `friends` is capable of storing a collection of strings.

##### Assigning an Empty Array to a Variable

```cs
string[] friends = new string[100];
```

The friends array has now been initialized and is capable of storing 100 strings. Values of an array are referred to as **elements**. The array is only ever capable of storing 100 elements. This is a limitation of arrays in that they are not resizable. There are other data structures available when you need a collection type that can resize as needed.

##### Assigning and Accessing Elements in an Array

Elements in an array are positioned in sequence. Their positions are referred to as **indexes**. Arrays begin indexing elements at position _0_. Therefore, the friends array can index elements of the range between 0 and 99.

```cs
// Assign element at index 0, or the first index
friends[0] = "Mortimer";
friends[1] = "Schilf";
friends[2] = "Rupanovic";
```

Notice the square bracket notation is a common indicator that we're working with arrays.

```cs
// Access elements of the friends array
Console.WriteLine($"I am friends with {friends[0]}, {friends[1]}, and {friends[2]}.");
```

If you attempt to access an element outside of the available indexes, such as `friends[500]`, your program will crash and you will receive an `IndexOutOfRangeException`. You may not attempt to access elements outside of the specified range.

##### Array Initialization

If the values to be inserted into the array are pre-determined, you may use array initialization syntax to pre-populate an array. Note that the number of elements you assign at initialization will determine the array's size.

```cs
// Initialize an array with three elements. This array has a capacity of 3 elements.
double [] accounts = new double[]{ 1000.50, 999.99, 2530.02 };
```

#### Skills to Practice

- Declaring arrays
- Assinging elements to arrays
- Accessing elements of an array
- Initializing arrays with data

---

### Instructions

#### Setup

1. Create a new C# console application. Name the project **3.1 Arrays**.
2. Click Create.

#### Code

```cs
string[] besties = new string[3]; // 3 empty elements
besties[0] = "Mr. Fistek";
besties[1] = "Mr. Barrett";

Console.Write("Which teacher is your bestie? ");
besties[2] = Console.ReadLine();

Console.WriteLine($"My besties are {besties[0]}, {besties[1]}, and {besties[2]}!\n");

Console.WriteLine("Press enter to continue...");
Console.ReadLine();

Console.WriteLine("--- Gradebook ---");
// Initialize array with 5 elements.
double[] grades = new double[]{ 90, 88, 95, 60, 85 };
double totalPoints = grades[0] + grades[1] + grades[2] + grades[3] + grades[4];
// Assuming grades are out of 100. Total possible points = 500
// Multiply by 100 to get percentage as a whole number
double gradePercentage = Math.Round(totalPoints / 500 * 100);
string letterGrade;

if (gradePercentage > 90)
{
    letterGrade = "A";
}
else if (gradePercentage > 80)
{
    letterGrade = "B";
}
else if (gradePercentage > 70)
{
    letterGrade = "C";
}
else if (gradePercentage > 60)
{
    letterGrade = "D";
}
else
{
    letterGrade = "F";
}

Console.WriteLine($"Grades: {grades[0]}, {grades[1]}, {grades[2]}, {grades[3]}, {grades[4]}");
Console.WriteLine($"Final grade: {gradePercentage}%. Letter grade: {letterGrade}");
```

#### Debug

```txt
Which teacher is your bestie? Mr. Mortimer
My besties are Mr. Fistek, Mr. Barrett, and Mr. Mortimer!

Press enter to continue...

--- Gradebook ---
Grades: 90, 88, 95, 60, 85
Final grade: 84%. Letter grade: B
```

---

### Tips, Tricks, and Reflection

- For more information on arrays, check out the Microsoft C# documentation:
    - <a href="https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/arrays/" target="_blank">Arrays</a>
    - <a href="https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/arrays/single-dimensional-arrays" target="_blank">Single-Dimension Arrays</a>
