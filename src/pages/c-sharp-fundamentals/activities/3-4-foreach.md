---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 3.4 Foreach Loops
---

[← Back](/c-sharp-fundamentals/)

## Activity 3.4 Foreach Loops

---

### Introduction

Although while loops and for loops are capable of iterating through collections, there is another C# loop that makes iterating through collections very easy and intuitive. This loop is known as a **foreach loop**, and it's purpose is to iterate through array elements in sequence, or one at a time.

**Example**
```cs
string[] fruits = new string[] { "apples", "bananas", "cherries", "dates" };

foreach (string fruit in fruits)
{
    Console.WriteLine("I like to eat " + fruit);
}
```

```txt
I like to eat apples
I like to eat bananas
I like to eat cherries
I like to eat dates
```

Notice the simplicity. No keeping track of _i_, no fear of accidentally trying to access an index that is out of range. As with the _i_ variable and for loops, the declared variable is only accessible within the scope of the foreach loop.

Here is the rule for tracing foreach loops: **for every element, perform one iteration**. For every iteration, the foreach loop will assign the next element to the variable. So, the fruit variable is initially assigned the string `"apple"`, then `"bananas"`, and so on. Four elements yields four iterations.

##### For Loop vs Foreach Loop

You may be wondering if the foreach loop renders while and for loops obselete. The answer is a resounding no!

- When you need to access each element without modifications, use a foreach loop.
- When you need to **modify**, or change elements, consider a for loop or even a while loop, depending on your needs.

Foreach loops are not meant to modify the collection it's iterating through, so I would consider a for loop in this case.

#### Skills to Practice

- Iterating through arrays using foreach loops
- Refactoring previous similar applications to use foreach loops where necessary

---

### Instructions

#### Setup

1. Create a new C# console application. Name the project **3.4 Foreach Loops**.
2. Click Create.

#### Code

```cs
List<string> shoppingCart = new List<string>();
string input = "";

Console.WriteLine("--- Shopping Cart ---");

while (input != "3")
{
    Console.WriteLine("-Menu-");
    Console.WriteLine("1) Add item to shopping cart");
    Console.WriteLine("2) Display cart contents");
    Console.WriteLine("3) Exit");

    Console.Write("-> ");
    input = Console.ReadLine();

    if (input == "1")
    {
        Console.Write("Enter new item: ");
        input = Console.ReadLine();
        shoppingCart.Add(input);
    }
    else if (input == "2")
    {
        Console.WriteLine("\n-Cart Contents-");

        foreach (string item in shoppingCart)
        {
            Console.WriteLine($"- {item}");
        }
    }
    else if (input == "3")
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

- Foreach loops can also iterate through characters of a string in a very intuitive way. We'll play around with this idea shortly.
