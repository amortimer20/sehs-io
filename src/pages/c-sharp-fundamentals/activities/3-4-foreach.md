---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 3.4 Foreach Loops
---

[← Back](/c-sharp-fundamentals/)

## Activity 3.4 Foreach Loops

---

### Introduction

In C#, both `while` loops and `for` loops are capable of iterating through collections, but there’s another type of loop that makes this process even simpler and more intuitive: the `foreach` loop. The purpose of a `foreach` loop is to iterate over each element in a collection, such as an array or list, automatically processing each item one by one without needing to manage an index.

**Example using an array**

```cs
string[] fruits = [ "apples", "bananas", "cherries", "dates" ];

foreach (string fruit in fruits)
{
    Console.WriteLine("I like to eat " + fruit);
}
```

**Output**

```txt
I like to eat apples
I like to eat bananas
I like to eat cherries
I like to eat dates
```

**Example using lists**

```cs
List<int> numbers = [ 2, 4, 6, 8, 10 ];

Console.WriteLine("Here are some even numbers:");
foreach (int number in numbers)
{
    Console.WriteLine(number);
}
```

**Outuput**

```txt
Here are some even numbers:
2
4
6
8
10
```

Notice how simple this loop is compared to a for loop: you don’t need to keep track of an index variable or worry about accessing invalid indexes. The foreach loop automatically assigns each element in fruits to the fruit variable in sequence, allowing you to use it directly.

Here’s a good rule to remember when using a foreach loop: for each element in the collection, the loop will iterate once. For instance, with four elements in the fruits array, there will be four iterations, and each time, fruit will be assigned the next element in the sequence.

**Example Video**

<video src="/courses/c-sharp-fundamentals/foreach-loop-animation.mp4" controls style="width: 100%; max-width: 640px;"></video>

#### When to Use a for Loop vs. a foreach Loop

The foreach loop is a great tool, but it doesn’t replace while or for loops in all situations. Here are some guidelines:

- Use a foreach loop when you simply want to read or access each element without modifying the collection.
- If you need to modify elements in a collection, consider a for or while loop instead. foreach is not designed for modifying the items in the collection it’s iterating over.

Even if both for and foreach loops are valid for a collection, foreach is often clearer for reading code since it makes the purpose of iteration obvious—processing each item in a collection without needing to worry about indices. Choosing foreach over for can make code easier to maintain in many cases.

#### Skills to Practice

- Iterating through collections using foreach loops
- Refactoring previous similar applications to use foreach loops where necessary

---

### Instructions

#### Setup

1. Create a new C# console application. Name the project **3.4 Foreach Loops**.
2. Click Create.

#### Code

```cs
List<string> shoppingCart = new List<string>();
string menuChoice = "";

Console.WriteLine("--- Shopping Cart ---");

while (menuChoice != "3")
{
    Console.WriteLine("-Menu-");
    Console.WriteLine("1) Add item to shopping cart");
    Console.WriteLine("2) Display cart contents");
    Console.WriteLine("3) Exit");

    Console.Write("-> ");
    menuChoice = Console.ReadLine();

    if (menuChoice == "1")
    {
        Console.Write("Enter new item: ");
        string newItem = Console.ReadLine();
        shoppingCart.Add(newItem);
        Console.WriteLine($"'{newItem}' added to the cart.");
    }
    else if (menuChoice == "2")
    {
        Console.WriteLine("\n-Cart Contents-");
        
        if (shoppingCart.Count == 0)
        {
            Console.WriteLine("The cart is empty.");
        }
        else
        {
            foreach (string item in shoppingCart)
            {
                Console.WriteLine($"- {item}");
            }
        }
    }
    else if (menuChoice == "3")
    {
        Console.WriteLine("Exiting.");
    }
    else
    {
        Console.WriteLine("Invalid option. Please select again.");
    }

    Console.WriteLine();
}
```

#### Debug

```txt
--- Shopping Cart ---
-Menu-
1) Add item to shopping cart
2) Display cart contents
3) Exit
-> 1
Enter new item: Milk

-Menu-
1) Add item to shopping cart
2) Display cart contents
3) Exit
-> 1
Enter new item: Eggs

-Menu-
1) Add item to shopping cart
2) Display cart contents
3) Exit
-> 1
Enter new item: Cheese

-Menu-
1) Add item to shopping cart
2) Display cart contents
3) Exit
-> 2

-Cart Contents-
- Milk
- Eggs
- Cheese

-Menu-
1) Add item to shopping cart
2) Display cart contents
3) Exit
-> 3
Exiting.
```

---

### Tips, Tricks, and Reflection

- A foreach loop can also be used to iterate through each character in a string, making it easy to process text one character at a time. We’ll explore this concept soon.
