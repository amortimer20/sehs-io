---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 3.2 Arrays and Loops
---

[← Back](/c-sharp-fundamentals/)

## Activity 3.2 Arrays and Loops

---

### Introduction

We can use loops to iterate through elements of an array. The key is to access each item, one at a time. We do this by tracking what index we are currently at using a number variable. A common convention is to use a variable named _i_ to track the index.

```cs
string[] games = new string[] { "Fallout", "Sonic", "Super Mario" };
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

Notice the repetition and copied code? Let's refactor this so it uses a while loop.

```cs
string[] games = new string[] { "Fallout", "Sonic", "Super Mario" };
int i = 0;

while (i < 3)
{
    Console.WriteLine(games[i]);
    i++;
}
```

#### Array Length

There are three games with indexes ranging from 0 to 2. So, we make sure the loop stops when i becomes 3. This code is inflexible though, because it only works for arrays of size 3. Luckily, there's a simple fix. Arrays have what's known as a **property** called **Length**. It returns the total number of elements in the array. The syntax looks like this: `arrayName.Length`. Keeping track of the size, or length, of a data structure is important in programming. We'll learn more about properties in Part 4 of this course.

```cs
string[] games = new string[] { "Fallout", "Sonic", "Super Mario", "Final Fantasy", "The Legend of Zelda", "Metroid", "Earthbound" };
int i = 0;

while (i < games.Length) // games.Length returns 7
{
    Console.WriteLine(games[i]);
    i++;
}
```

It doesn't matter what the size of the array is, because `games.Length`` will always correspond to the total number of elements. This algorithm for processing the array is now much more flexible.

#### For Loops

For loops are extremely useful when processing arrays. Notice the while loop contains all the necessary statements that make up a for loop. We can perform one final refactor our code.

```cs
string[] games = new string[] { "Fallout", "Sonic", "Super Mario", "Final Fantasy", "The Legend of Zelda", "Metroid", "Earthbound" };

for (int i = 0; i < games.Length; i++)
{
    Console.WriteLine(games[i]);
}
```

We get the exact same result but with concise code. You will often see for loops favored over while loops when working with arrays, although you should always use the correct control structure based on what you need to get done. If you think a while loop works better for a given scenario, use it.

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
// Drinks List
string[] sodas = new string[5];

for (int i = 0; i < sodas.Length; i++)
{
    Console.Write("Enter a soda: ");
    sodas[i] = Console.ReadLine();
}

Console.WriteLine("\nHere are your drinks: ");

for (int i = 0; i < sodas.Length; i++)
{
    Console.WriteLine($"* {sodas[i]}"); // * is a bullet list symbol
}

Console.WriteLine("\nPress enter to continue.");
Console.ReadLine();

// Todo List
string[] tasks = new string[100];
bool addingTasks = true;
int taskCount = 0; // Keep track of next empty index

Console.WriteLine("--- Todo List ---");

while (addingTasks)
{
    Console.WriteLine("-Menu-");
    Console.WriteLine("1) Add a task");
    Console.WriteLine("2) Finish");
    Console.Write("-> ");
    string input = Console.ReadLine();

    if (input == "1")
    {
        // Fill in task and move to the next empty index
        Console.Write("Enter task: ");
        tasks[taskCount] = Console.ReadLine();
        taskCount++;
    }
    else if (input == "2")
    {
        addingTasks = false;
    }
    else
    {
        Console.WriteLine("Invalid option. Try again.\n");
    }

    if (taskCount == 100)
    {
        Console.WriteLine("List is full.");
        addingTasks = false;
    }
}

Console.WriteLine("\nPrinting List");

for (int i = 0; i < taskCount; i++)
{
    Console.WriteLine($"* {tasks[i]}");
}
```

#### Debug

```txt
Enter a soda: Pepsi
Enter a soda: Coke
Enter a soda: Dr. Pepper
Enter a soda: Sprite
Enter a soda: Slice

Here are your drinks:
* Pepsi
* Coke
* Dr. Pepper
* Sprite
* Slice

Press enter to continue.

--- Todo List ---
-Menu-
1) Add a task
2) Finish
-> 1
Enter task: Grade homework
-Menu-
1) Add a task
2) Finish
-> 1
Enter task: Answer emails
-Menu-
1) Add a task
2) Finish
-> 2

Printing List
* Grade homework
* Answer emails
```

---

### Tips, Tricks, and Reflection

- Notice arrays are inconvenient when we have collections like todo lists where we don't know exactly how many elements we will have. There exists a more suitable data type called a **List** which we will cover shortly.
