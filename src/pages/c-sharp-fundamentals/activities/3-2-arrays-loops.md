---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 3.2 Arrays and Loops
---

[← Back](/c-sharp-fundamentals/)

## Activity 3.2 Arrays and Loops

---

### Introduction

At this point, we've seen how arrays allow us to store multiple elements under a single variable, making it much easier to manage collections of data. So far, we’ve manually accessed and modified specific indexes in our arrays, but this approach is impractical for large datasets. Working with each element individually would be both inefficient and error-prone.

In this lesson, we’ll explore how to traverse arrays efficiently and dynamically handle their size, improving both flexibility and scalability.

**Sample array with output**

Consider this simple example:

```cs
string[] games = ["Fallout", "Sonic", "Super Mario"];
int i = 0;

Console.WriteLine(games[i]);
i++;
Console.WriteLine(games[i]);
i++;
Console.WriteLine(games[i]);
i++;
```

```txt
Fallout
Sonic
Super Mario
```

As you can see, this code is repetitive. Let’s refactor it to use a loop for better efficiency.

#### Using a While Loop to Traverse Arrays

Instead of manually incrementing `i` and writing multiple `Console.WriteLine()` statements, we can use a while loop:

```cs
string[] games = ["Fallout", "Sonic", "Super Mario"];
int i = 0;

while (i < 3)
{
    Console.WriteLine(games[i]);
    i++;
}
```

This code is more streamlined, but notice that the condition `i < 3` is still hardcoded. What if the array had more or fewer elements? To make this flexible, we can use the array's `Length` property.

#### Array.Length Property

Arrays in C# have a `Length` property, which automatically gives the total number of elements in the array. Using this property, we can adapt our code to any array size without needing to manually adjust the loop condition.

Note, we will cover properties properly later on in the course.


```cs
string[] games = ["Fallout", "Sonic", "Super Mario", "Final Fantasy", "The Legend of Zelda", "Metroid", "Earthbound"];
int i = 0;

while (i < games.Length) // games.Length dynamically adjusts to the array size
{
    Console.WriteLine(games[i]);
    i++;
}
```

This ensures that the loop will run as many times as there are elements in the array, no matter how large or small it becomes.

#### Using a For Loop

The for loop is often preferred for iterating over arrays because it consolidates the initialization, condition, and increment into one line, making the code more concise.

```cs
string[] games = ["Fallout", "Sonic", "Super Mario", "Final Fantasy", "The Legend of Zelda", "Metroid", "Earthbound"];

for (int i = 0; i < games.Length; i++)
{
    Console.WriteLine(games[i]);
}
```

This for loop achieves the same result as the while loop but is shorter and easier to read.

#### Dynamically Setting Array Length at Runtime

Up until now, we’ve hardcoded arrays with a fixed length in the examples. However, in real-world applications, the length of an array might not be known in advance. What if we want to allow the user to specify how many elements the array should have? This can be achieved by asking the user for input and creating the array dynamically based on that input.

Here’s how you can set the length of an array dynamically at runtime:

```cs
Console.Write("Enter the number of games: ");
int numGames = Convert.ToInt32(Console.ReadLine()); 

string[] games = new string[numGames];  // Create an array of the specified length

// Prompt the user to enter the names of the games
for (int i = 0; i < games.Length; i++)
{
    Console.Write($"Enter the name of game {i + 1}: ");
    games[i] = Console.ReadLine();
}

// Output all the games entered
Console.WriteLine("\nHere are the games you entered:");
for (int i = 0; i < games.Length; i++)
{
    Console.WriteLine(games[i]);
}
```

This approach opens the door for more interactive and flexible programs. Arrays can now handle any size of input data, giving the user full control.

#### Skills to Practice

- Creating arrays
- Assigning elements to an array
- Accessing values in an array using integer variables
- Iterating through arrays using loops

---

### Instructions

#### Setup

1. Create a new C# console application. Name the project **3.2 Arrays and Loops**.
2. Click Create.

#### Code

```cs
Console.WriteLine("Demo 1 - Populate an array\n");

Console.Write("How many numbers will your collection contain? ");
int size = Convert.ToInt32(Console.ReadLine());

double[] numbers = new double[size]; // Length is determined by user input

for (int i = 0; i < numbers.Length; i++)
{
    // Start counting at 1 from user's perspective
    Console.Write($"Element {i + 1}: ");
    numbers[i] = Convert.ToDouble(Console.ReadLine());
}

Console.Write("Here are your elements: ");

for (int i = 0; i < numbers.Length; i++)
{
    Console.Write(numbers[i] + " ");
}
Console.WriteLine();

Console.WriteLine("\nPress enter to continue...");
Console.ReadLine();

Console.WriteLine("Demo 2 - Sum Calculator\n");

double sum = 0;

for (int i = 0; i < numbers.Length; i++)
{
    // Uncomment to see the sum algorithm in action
    //Console.WriteLine($"{sum} + {numbers[i]} = {sum + numbers[i]}");
    sum = sum + numbers[i];
}

Console.WriteLine($"The sum is {sum}");
```

#### Debug

```txt
Demo 1 - Populate an array

How many numbers will your collection contain? 5
Element 1: 34
Element 2: 19
Element 3: 25.5
Element 4: 42
Element 5: 96
Here are your elements: 34 19 25.5 42 96

Press enter to continue...

Demo 2 - Sum Calculator

The sum is 216.5
```

---

### Tips, Tricks, and Reflection

- Be cautious when writing while loops for iterating over arrays. If you forget to increment i (e.g., by leaving out i++), the condition will never become false, and your program could get stuck in an infinite loop.