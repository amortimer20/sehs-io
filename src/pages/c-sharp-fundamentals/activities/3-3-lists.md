---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 3.3 Lists
---

[← Back](/c-sharp-fundamentals/)

## Activity 3.3 Lists

---

### Introduction

Lists are a convenient data type for storing collections of elements. Similar to arrays, lists can store multiple elements of a given type. However, unlike arrays, **lists are dynamic and can grow or shrink** in size. This makes lists particularly useful when you need to store an unknown number of elements, or when the number of elements may change over time.

For example, when you go grocery shopping, do you always know exactly how many items you'll buy? Not always! Sometimes you buy just a few things, and other times your cart is full. A list is perfect for handling this kind of varying data.

Here's an example of how to declare a list in C#:

```cs
List<string> games = new List<string>();
```

This line of code initializes an empty list that will hold strings. Notice the syntax `List<string>`. The type (in this case, `string`) is surrounded by angle brackets—this is called **generic syntax**. Generics allow lists to hold elements of any data type, but the list will only hold elements of one specific type, as defined when the list is created.

You don't need to worry too much about the advanced details of generics for now. Just know that the angle brackets specify the type of element the list will hold.

#### Adding Elements to a List

When you create a new list, it starts out empty. To add elements, use the Add() method:

```cs
games.Add("Sonic Adventure");
games.Add("House of the Dead");
games.Add("Marvel vs. Capcom");
games.Add("Power Stone");
```


#### Accessing Elements in a List

You can access elements in a list using square brackets, just like arrays. However, be careful when accessing elements in a list—since lists can grow dynamically, trying to access an index that doesn’t exist will cause an error. For example:

```cs
List<int> grades = new List<int>();
Console.WriteLine(grades[0]); // an empty list has no indexes
```

Since the list starts empty, attempting to access an element (e.g., grades[0]) before adding anything will cause an "IndexOutOfRange" error.

#### List.Count Property

To find out how many elements are currently in the list, use the `Count` property. This is similar to `Array.Length`:

```cs
Console.WriteLine($"Number of games: {games.Count}");

for (int i = 0; i < games.Count; i++)
{
    Console.WriteLine($"- {games[i]}");
}
```

**Output**

```txt
Number of games: 4
- Sonic Adventure
- House of the Dead
- Marvel vs. Capcom
- Power Stone
```

Notice that elements are still accessed using the square bracket notation. You can still access and modify elements at any valid index.

##### Initializing a List with Elements

You can also initialize a list with elements, similar to arrays:

**Newer Collection Expression Syntax**

```cs
```cs
List<int> stats = [ 99, 72, 33, 5, 100, 67, 1776 ];

// For larger datasets, you can break down data over multiple lines.
List<string> roster = 
[
    "Jim",
    "Jack",
    "Joe Bob"
];
```

**Older Initializer Syntax**

```cs
List<int> stats = new List<string>() { 99, 72, 33, 5, 100, 67, 1776 };

List<string> roster = List<string>()
{
    "Jim",
    "Jack",
    "Joe Bob"
};
```

#### Lists vs. Arrays

Use this rule of thumb:

- If you know the exact number of elements you need, you can use an array.
- If the number of elements might change, or you don’t know the size ahead of time, use a list.

Arrays are may be efficient in cases where the number of elements is fixed, but lists provide more flexibility in dynamic situations. For most scenarios, lists offer greater convenience and versatility.

#### Skills to Practice

- Initializing lists
- Adding elements to a list
- Iterating through list elements

---

### Instructions

#### Setup

1. Create a new C# console application. Name the project **3.3 Lists**.
2. Click Create.

#### Code

```cs
List<string> tasks = new List<string>();
string input = "";

Console.WriteLine("--- Todo List ---");

while (input != "2")
{
    Console.WriteLine("-Menu-");
    Console.WriteLine("1) Add a task");
    Console.WriteLine("2) Finish");
    Console.Write("-> ");
    input = Console.ReadLine();

    if (input == "1")
    {
        Console.Write("Enter task: ");
        input = Console.ReadLine();
        tasks.Add(input);
    }
    else if (input == "2")
    {
        Console.WriteLine("\nPrinting List");

        for (int i = 0; i < tasks.Count; i++)
        {
            Console.WriteLine($"- {tasks[i]}");
        }
    }
    else
    {
        Console.WriteLine("Invalid option. Try again.\n");
    }
}
```

#### Debug

```txt
--- Todo List ---
-Menu-
1) Add a task
2) Finish
-> 1
Enter task: Homework
-Menu-
1) Add a task
2) Finish
-> 1
Enter task: Clean bedroom
-Menu-
1) Add a task
2) Finish
-> 1
Enter task: Cook dinner
-Menu-
1) Add a task
2) Finish
-> 2

Printing List
- Homework
- Clean bedroom
- Cook dinner
```

---

### Tips, Tricks, and Reflection

- Check out <a href="https://stackoverflow.com/questions/434761/array-versus-listt-when-to-use-which" target="_blank">this interesting discussion</a> on Stack Overflow regarding when to use arrays or lists.
