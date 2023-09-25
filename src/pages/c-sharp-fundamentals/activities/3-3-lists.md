---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 3.3 Lists
---

[← Back](/c-sharp-fundamentals/)

## Activity 3.3 Lists

---

### Introduction

Lists are a convenient data type for storing elements in a collection. While they are similar to arrays in that they can store elements of a given type in a collection, there is one significant difference: **lists are resizable**. In other words, we don't need to set their size, unlike arrays. This makes lists an attractive option when you need to store values in a group, but you don't know ahead of time what the size needs to be, or if there is ever a final size. Consider this exmaple, do you always shop for the same number of items every time you go to the grocery store? Of course not. Sometimes you may have a cart overflowing with foods, and sometimes you have just a few items you need to pick up.

Lists are declared using different syntax than you may be used to: `List<data type> nameOfList = new List<string>();`. Notice the data type is surrounded by angle brackets. This is called generic syntax. It's an intermediate level concept that you needn't worry to much about at this point.

```cs
List<string> games = new List<string>();
```

This code initializes an empty list. Keep in mind that until elements are added, there are no available indexes. `games[0]` will cause an out of range error.

##### List.Add() Method

When you create a new list, it's empty. Therefore, there is no index available to insert an element. To add a new element to a list, use the method `List.Add()`, where `List` is the name of your variable.

```cs
games.Add("Sonic Adventure");
games.Add("House of the Dead");
games.Add("Marvel vs. Capcom");
games.Add("Power Stone");
```

##### List.Count Property

Similar to Array.Length, List.Count returns the number of elements contained in the list. This is helpful when iterating through list elements.

```cs
Console.WriteLine($"Number of games: {games.Count}");

for (int i = 0; i < games.Count; i++)
{
    Console.WriteLine($"- {games[i]}");
}
```
```txt
Number of games: 4
- Sonic Adventure
- House of the Dead
- Marvel vs. Capcom
- Power Stone
```

Notice that elements are still accessed using the square bracket notation. You can still access and modify elements at any valid index.

##### List Initialization Syntax

Lists can also be initialized with data, similar to initialization syntax with arrays.

```cs
List<int> stats = new List<string>() { 99, 72, 33, 5, 100, 67, 1776 };

// For larger datasets, you can break down data over multiple lines.
List<string> roster = List<string>()
{
    "Jim",
    "Jack",
    "Joe Bob"
};
```

##### Arrays vs. Lists

Follow this rule: if you know the number of elements needed ahead of time, you can use an array. If the number of elements will vary, use a list. In theory, you could use a list for just about any scenario over an array, but you should always consider your options.

#### Skills to Practice

- Initializing lists
- Iterating through list elements
- Refactoring previous applications to use lists where necessary

---

### Instructions

#### Setup

1. Create a new C# console application. Name the project **3.3 Lists**.
2. Click Create.

#### Code

```cs
List<string> tasks = new List<string>();
bool addingTasks = true;

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
        Console.Write("Enter task: ");
        input = Console.ReadLine();
        tasks.Add(input);
    }
    else if (input == "2")
    {
        addingTasks = false;
    }
    else
    {
        Console.WriteLine("Invalid option. Try again.\n");
    }
}

Console.WriteLine("\nPrinting List");

for (int i = 0; i < tasks.Count; i++)
{
    Console.WriteLine($"* {tasks[i]}");
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
* Homework
* Clean bedroom
* Cook dinner
```

---

### Tips, Tricks, and Reflection

- Check out <a href="https://stackoverflow.com/questions/434761/array-versus-listt-when-to-use-which" target="_blank">this interesting discussion</a> on Stack Overflow regarding when to use arrays or lists.
