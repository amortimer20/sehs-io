---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 3.5 List Methods
---

[← Back](/c-sharp-fundamentals/)

## Activity 3.5 List Methods

---

### Introduction

In addition to `List.Add()`, we will cover more methods that make lists easy to work with. For a complete reference of the available properties and methods, see the link below.

**Example List**
```cs
List<string> movies = new List<string>()
{
    "Jurassic Park",
    "Toy Story",
    "Mortal Kombat",
    "Braveheart",
    "Big Daddy",
    "Armageddon",
    "Forrest Gump",
    "True Lies",
    "The Matrix",
    "The Lion King"
};
```

**`List.Clear()`** - Removes all elements from the list.

```cs
movies.Clear();
Console.WriteLine(movies.Count); // Outputs 0
```

**`List.Contains(item)`** - Determines whether an element is in the list. Returns true if the element is found; otherwise, false.

```cs
movies.Contains("Toy Story"); // returns true
movies.Contains("A Bug's Life"); //returns false
```

**`List.IndexOf(item)`** - Returns the index of the first occurrence of a value in the list. If not found, returns **-1**.

```cs
movies.Contains("Toy Story"); // returns 1
movies.Contains("A Bug's Life"); //returns -1
```

**`List.Insert(index, item)`** - Inserts an element into the list at the specified index. Elements at or to the right of the index get shifted to the right.

```cs
movies.Insert(2, "Toy Story 2");
/* {
    "Jurassic Park", "Toy Story", "Toy Story 2", "Mortal Kombat", "Braveheart", "Big Daddy",
    "Armageddon", "Forrest Gump", "True Lies", "The Matrix", "The Lion King"
} */
```

**`List.Remove(item)`** - Removes the first occurrence of a specific object from the list. Returns true if the item was sucessfully removed; otherwise, false.

```cs
movies.Insert("Jurassic Park");
/* {
    "Toy Story", "Mortal Kombat", "Braveheart", "Big Daddy", "Armageddon",
    "Forrest Gump", "True Lies", "The Matrix", "The Lion King"
} */
```

**`List.RemoveAt(index)`** - Removes the element at the specified index of the list.

```cs
movies.RemoveAt(5);
/* {
    "Jurassic Park", "Toy Story", "Mortal Kombat", "Braveheart", "Big Daddy",
    "Forrest Gump", "True Lies", "The Matrix", "The Lion King"
} */
```

**`List.Reverse()`** - Reverses the order of the elements in the list.
```cs
movies.Reverse();
/* {
    "The Lion King", "The Matrix", "True Lies", "Forrest Gump", "Armageddon",
    "Big Daddy", "Braveheart", "Mortal Kombat", "Toy Story", "Jurassic Park"
} */
```


**`List.Sort()`** - Sorts the elements in the list.

```cs
movies.Sort();
/* {
    "Armageddon", "Big Daddy", "Braveheart", "Forrest Gump", "Jurassic Park",
    "Mortal Kombat", "The Lion King", "The Matrix", "Toy Story", "True Lies"
} */
```

This activity only uses a subset of the methods, but know that these methods and many more exist to help you work with lists.

#### Skills to Practice

- Initializing lists
- Iterating through list elements
- Utilizing list methods to implement complex features

---

### Instructions

#### Setup

1. Create a new C# console application. Name the project **3.5 List Methods**.
2. Click Create.

#### Code

```cs
bool managingInventory = true;
List<string> inventory = new List<string>()
{
    "axe",
    "shovel",
    "axe",
    "rope",
    "tent",
    "grill",
    "poncho",
    "sleeping bag",
    "flint",
    "sleeping bag"
};

Console.WriteLine("--- Inventory Manager ---");

while (managingInventory)
{
    Console.WriteLine("\n-Main Menu-");
    Console.WriteLine("1) List inventory");
    Console.WriteLine("2) Add new item");
    Console.WriteLine("3) Insert new item");
    Console.WriteLine("4) Find item");
    Console.WriteLine("5) Sort inventory");
    Console.WriteLine("6) Remove an item");
    Console.WriteLine("7) Delete inventory");
    Console.WriteLine("8) Exit");
    Console.Write("-> ");
    string input = Console.ReadLine();

    if (input == "1")
    {
        Console.WriteLine("-Inventory-");

        if (inventory.Count == 0)
        {
            Console.WriteLine("No inventory.");
        }

        foreach (string item in inventory)
        {
            Console.WriteLine("- " + item);
        }
    }
    else if (input == "2")
    {
        Console.Write("New Item: ");
        input = Console.ReadLine();
        inventory.Add(input);
        Console.WriteLine(input + " added to list.");
    }
    else if (input == "3")
    {
        Console.Write("New Item: ");
        input = Console.ReadLine();

        Console.Write($"Which index? (0-{inventory.Count - 1}): ");
        int index = Convert.ToInt32(Console.ReadLine());

        inventory.Insert(index, input);
        Console.WriteLine(input + " inserted into list.");
    }
    else if (input == "4")
    {
        Console.Write("Which item? ");
        input = Console.ReadLine();
        int index = inventory.IndexOf(input);

        if (index >= 0)
        {
            Console.WriteLine($"{input} located at index {index}");
        }
        else
        {
            Console.WriteLine("Item not found.");
        }
    }
    else if (input == "5")
    {
        Console.WriteLine("Sorting inventory.");
        inventory.Sort();
    }
    else if (input == "6")
    {
        Console.Write("Which item? ");
        input = Console.ReadLine();
        bool itemRemoved = inventory.Remove(input);

        if (itemRemoved)
        {
            Console.WriteLine(input + " removed.");
        }
        else
        {
            Console.WriteLine(input + " not found, or an error occured.");
        }
    }
    else if (input == "7")
    {
        Console.Write("Are you sure? (y/n) ");
        input = Console.ReadLine();

        if (input == "y")
        {
            inventory.Clear();
        }
        else
        {
            Console.WriteLine("Canceled.");
        }
    }
    else if (input == "8")
    {
        Console.WriteLine("Exiting.");
        managingInventory = false;
    }
}
```

#### Debug

```txt
--- Inventory Manager ---

-Main Menu-
1) List inventory
2) Add new item
3) Insert new item
4) Find item
5) Sort inventory
6) Remove an item
7) Delete inventory
8) Exit
-> 6
Which item? flint
flint removed.

-Main Menu-
1) List inventory
2) Add new item
3) Insert new item
4) Find item
5) Sort inventory
6) Remove an item
7) Delete inventory
8) Exit
-> 5
Sorting inventory.

-Main Menu-
1) List inventory
2) Add new item
3) Insert new item
4) Find item
5) Sort inventory
6) Remove an item
7) Delete inventory
8) Exit
-> 3
New Item: charcoal
Which index? (0-8): 0
charcoal inserted into list.

-Main Menu-
1) List inventory
2) Add new item
3) Insert new item
4) Find item
5) Sort inventory
6) Remove an item
7) Delete inventory
8) Exit
-> 1
-Inventory-
- charcoal
- axe
- axe
- grill
- poncho
- rope
- shovel
- sleeping bag
- sleeping bag
- tent

-Main Menu-
1) List inventory
2) Add new item
3) Insert new item
4) Find item
5) Sort inventory
6) Remove an item
7) Delete inventory
8) Exit
```

---

### Tips, Tricks, and Reflection

- <a href="https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1?view=net-7.0#methods" target="_blank">List Methods</a>
- <a href="https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1?view=net-7.0#properties" target="_blank">List Properties</a>
