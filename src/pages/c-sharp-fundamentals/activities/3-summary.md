---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: "C# Fundamentals Part 3 Summary"
---

[← Back](/c-sharp-fundamentals/)

## C# Fundamentals Part 3 Summary

---

### Arrays

- An array is a collection of elements of the same type.

- **Declaration**
    - Declare an array variable:
    ```cs
    string[] friends;
    ```

    - Initialize an empty array with a fixed size:
    ```cs
    string[] friends = new string[100];
    ```

    - Initialize an array with predetermined values:
    ```cs
    double[] accounts = [ 1000.50, 999.99, 2530.02 ];
    ```
- **Accessing Elements:**
    - Access elements using zero-based indexing:
    ```cs
    friends[0] = "Alice";
    string firstFriend = friends[0];
    ```
- **Limitations:**
    - Arrays have a fixed size once initialized.
    - Accessing an index outside the array bounds results in an IndexOutOfRangeException.

### Arrays and Loops

- Use loops to efficiently traverse arrays without hardcoding indexes.
- **Using While Loop:**
    ```cs
    int i = 0;
    while (i < games.Length)
    {
        Console.WriteLine(games[i]);
        i++;
    }
    ```
- **Using For Loop:**
    ```cs
    for (int i = 0; i < games.Length; i++)
    {
        Console.WriteLine(games[i]);
    }
    ```
- **Array.Length Property:**
    - Dynamically access the number of elements in an array.
    - Allows loops to adapt to arrays of any size.
- **Dynamic Arrays:**
    - Create arrays with user-defined sizes at runtime:
    ```cs
    Console.Write("Enter the number of games: ");
    int numGames = Convert.ToInt32(Console.ReadLine());
    string[] games = new string[numGames];
    ```

### Lists

- A list is a dynamic collection that can grow or shrink in size, storing elements of a specified type.
- **Declaration:**
    ```cs
    List<string> games = new List<string>();
    ```
- **Adding Elements:**
    ```cs
    games.Add("Sonic Adventure");
    ```
- **Accessing Elements:**
    - Similar to arrays, use zero-based indexing:
    ```cs
    string firstGame = games[0];
    ```
- **List.Count Property:**
    - Retrieves the current number of elements in the list.
- **Initializing with Element:**
    ```cs
    List<int> stats = [ 99, 72, 33 ];
    ```
- **When to Use:**
    - Use lists when the number of elements can change or is unknown at compile time.

### Foreach Loops

- Simplifies iteration over collections by accessing each element directly without using indexes.

- **Syntax:**
    ```cs
    foreach (var item in collection)
    {
        // Use item
    }
    ```
- **Example with Array:**
    ```cs
    foreach (string fruit in fruits)
    {
        Console.WriteLine("I like to eat " + fruit);
    }
    ```
- **Example with List:**
    ```cs
    foreach (int number in numbers)
    {
        Console.WriteLine(number);
    }
    ```
- **Usage Guidelines:**
    - Use when you need to read or access each element.
    - Not ideal for modifying elements or when an index is needed.

### List Methods

- `Add(item)`: Adds an item to the end of the list.
- `AddRange(list)`: Add the elements of a specified collection to the end of a list.
- `Clear()`: Removes all elements from the list.
- `Contains(item)`: Checks if an item exists in the list.
- `IndexOf(item)`: Returns the index of the item, or -1 if not found.
- `Insert(index, item)`: Inserts an item at the specified index.
- `Remove(item)`: Removes the first occurrence of the item.
- `RemoveAt(index)`: Removes the item at the specified index.
- `Reverse()`: Reverses the order of elements.
- `Sort()`: Sorts the elements in ascending order.

### Value Types vs. Reference Types

- **Value Types:**
    - Store the actual data.
    - Examples: int, double, bool.
    - Copying a value type creates a new independent copy.

    ```cs
    int a = 5;
    int b = a;
    b = 10; // a remains 5
    ```
- **Reference Types:**
    - Store a reference to the data's memory address.
    - Examples: arrays, lists, strings, classes.
    - Copying a reference type variable copies the reference, not the data.

    ```cs
    List<int> list1 = new List<int> [ 1, 2, 3 ];
    List<int> list2 = list1;
    list2[0] = 99; // Both list1 and list2 reflect the change
    ```
- **Important Note:**
    - Be cautious when copying reference types to avoid unintended side effects.
    - For independent copies, create new instances.
    - Although strings are technically reference types, they appear to behave like value types.

### Essential Algorithms

- **Accumulation Algorithm:** Combines elements in a collection using a specified operation (e.g., sum).
- **Min and Max Algorithm:** Finds the smallest or largest value in a collection.
- **Swap Algorithm:** Exchanges the values of two variables or elements.
- **Shuffle Algorithm:** Randomizes the order of elements in a collection.
- **Merge Algorithm:** Combines two collections into one.

### Key Takeaways

- Understanding **arrays** and **lists** is fundamental for managing collections of data.
- **Loops** (`for`, `while`, `foreach`) are essential for iterating over collections efficiently.
- **List methods** provide powerful tools for manipulating dynamic collections.
- Grasping the difference between **value types** and **reference types** is crucial for memory management and avoiding bugs.
- Familiarity with **essential algorithms** equips you with problem-solving tools applicable in various programming scenarios.