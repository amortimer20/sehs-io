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

Programming languages have a way to store many things together in a group using **data structures**. C# provides a data type called an **array**. An array can store a collection of items, all of the same type (like strings or numbers). However, an important thing to know is that arrays have a **fixed size**, which means we need to specify the number of elements the array can hold when we create it. This makes arrays efficient, but less flexible than some other data structures, which we’ll explore later.

##### Declaring an Array Variable

```cs
string[] friends;
```

The variable _friends_ is declared as an array capable of storing a collection of strings. At this point, the array has been declared but not initialized, meaning it does not yet have a specific size or contain any elements.

##### Assigning an Empty Array to a Variable

```cs
string[] friends = new string[100];
```

The friends array is now initialized and can store up to 100 strings. Each spot in an array is called an element, and right now, all 100 elements of the friends array are empty (holding null). One important limitation of arrays is that they are not resizable. Once you decide the size of an array, it cannot be changed. If you need a structure that can grow or shrink as needed, other data structures might be more suitable.

##### Assigning and Accessing Elements in an Array

Each element in an array is stored in a specific position, called an **index**. C# arrays use zero-based indexing, meaning the first element is at position 0. For example, the friends array can hold elements from index 0 to 99 (since its size is 100).

```cs
// Assign element at index 0, or the first index
friends[0] = "Mortimer";
friends[1] = "Schilf";
friends[2] = "Rupanovic";
```

Notice the use of square brackets `[]`. This is the notation used to assign or access elements in an array.

```cs
// Access elements of the friends array
Console.WriteLine($"The best teachers at St. Ed's are {friends[0]}, {friends[1]}, and {friends[2]}.");
```

If you attempt to access an element outside of the available indexes, such as `friends[500]`, the program will crash and throw an `IndexOutOfRangeException`. This is because arrays can only store elements within the range specified at initialization (in this case, 0 to 99).

##### Array Initialization with Pre-determined Values

If you already know the values that the array will contain, you can initialize the array with those values from the start. The number of elements you provide will determine the size of the array.

```cs
// Initialize an array with three elements. This array has a capacity, or length, of 3 elements.
double[] accounts = [1000.50, 999.99, 2530.02];
```

This syntax is a collection expression, a newer feature in C#. However, you'll often encounter the more traditional syntax for array initialization, which is slightly more verbose:

```cs
double[] accounts = new double[] {1000.50, 999.99, 2530.02};
```

Both syntaxes are valid and do the same thing: they initialize an array and pre-populate it with the specified values.

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
Console.WriteLine("--- Demo 1 - Movies ---");

string[] movies = new string[3]; // 3 empty indexes

Console.WriteLine("Enter your top three movies of all time: ");

// Copy and pasted code 🤮. Is there a better way to implement this?
Console.Write("1) ");
movies[0] = Console.ReadLine();
Console.Write("2) ");
movies[1] = Console.ReadLine();
Console.Write("3) ");
movies[2] = Console.ReadLine();
Console.WriteLine($"Your top three movies are {movies[0]}, {movies[1]}, and {movies[2]}!\n");

Console.WriteLine("Press enter to continue...");
Console.ReadLine();

Console.WriteLine("--- Demo 2 - Gradebook ---");

double[] grades = [90, 88, 95, 60, 85];
double totalPoints = grades[0] + grades[1] + grades[2] + grades[3] + grades[4];
// Assuming grades are out of 100, five assignments = 500 points total.
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

Console.WriteLine($"Grades: {grades[0]}/100, {grades[1]}/100, {grades[2]}/100, {grades[3]}/100, {grades[4]}/100");
Console.WriteLine($"Final grade: {gradePercentage}%. Letter grade: {letterGrade}");
```

#### Debug

```txt
--- Demo 1 - Movies ---
Enter your top three movies of all time:
1) Terminator 2
2) Tron
1) The Matrix
Your top three movies are Terminator 2, Tron, and The Matrix!

Press enter to continue...

--- Demo 2 - Gradebook ---
Grades: 90/100, 88/100, 95/100, 60/100, 85/100
Final grade: 84%. Letter grade: B
```

---

### Tips, Tricks, and Reflection

These sample applications are not very practical, because we are manually working with indexs for each array. What if I have hundreds or even thousands of elements to process? In our next lesson, we'll explore how to combine loops with arrays for data processing. By using these two tools together, you'll be able to create much more dynamic and efficient programs.

For more information on arrays, check out the Microsoft C# documentation:
- <a href="https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/arrays/" target="_blank">Arrays</a>
- <a href="https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/arrays/single-dimensional-arrays" target="_blank">Single-Dimension Arrays</a>
