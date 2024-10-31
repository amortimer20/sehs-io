---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 3.6 Value Types vs. Reference Types
---

[← Back](/c-sharp-fundamentals/)

## Activity 3.6 Value Types vs. Reference Types

---

### Introduction

When programming, it’s crucial to understand how data types are stored and managed in memory. This knowledge helps you write more efficient and error-free code. Two fundamental categories of data types in C# are value types and reference types.

#### Value Types

Value types hold data directly. Examples of value types include `int`, `double`, and `bool`. When you assign a value type variable to another variable, you copy the data. This means the two variables operate independently of each other.

**Example: Value Types**

```cs
int a = 5;
int b = a; // b gets a copy of the value in a
b = 10;    // Changing b does not affect a
Console.WriteLine(a); // Output: 5
Console.WriteLine(b); // Output: 10
```

In this example, a and b hold separate copies of the value 5. Modifying b does not change the value of a.

#### Reference Types

Reference types, on the other hand, store references to the actual data. A reference just keeps track of where some data is in memory. Examples of reference types include arrays, lists, strings, and classes (classes are covered in Part 5). When you assign a reference type variable to another variable, you copy the reference, not the actual data. This means both variables refer to the same location in memory.

Collections, such as arrays and lists, are crucial reference types you'll encounter frequently. Working with collections requires a good grasp of how reference types operate, especially when copying or modifying them.

```cs
List<int> list1 = new List<int> { 1, 2, 3 };
List<int> list2 = new List<int>(list1); // Creates a new list with the same elements
list2[0] = 99;                          // Modifying list2 does not affect list1
Console.WriteLine(list1[0]); // Output: 1
Console.WriteLine(list2[0]); // Output: 99
```

Here, list2 is created as a new list with the same elements as list1. Modifying list2 does not affect list1 because they are separate lists in memory.

**Example Video: Value Types vs. Reference Types**

<video src="/courses/c-sharp-fundamentals/value-reference-types.mp4" controls style="width: 100%; max-width: 640px;"></video>

#### Skills to Practice

- Writing applications that are mindful of how reference types behave.

---

### Instructions

#### Setup

1. Create a new C# console application. Name the project **3.6 Reference Types**.
2. Click Create.

#### Code

```cs
Console.WriteLine("--- Demo - Collection Copy Algorithm ---");
int[] originalArray = [ 1, 2, 3, 4, 5 ];
// int[] copiedArray = originalArray *No Good* - Arrays are reference types

// Creating a new array to copy the data into
int[] copiedArray = new int[originalArray.Length];

// Copying data from originalArray to copiedArray
for (int i = 0; i < originalArray.Length; i++)
{
    copiedArray[i] = originalArray[i];
}

Console.WriteLine("Original Array:");
foreach (int number in originalArray)
{
    Console.Write(number + " ");
}

Console.WriteLine("\nCopied Array:");
foreach (int number in copiedArray)
{
    Console.Write(number + " ");
}

// Modifying the copied array to demonstrate they are independent
copiedArray[0] = 99;

// Displaying the arrays after modification
Console.WriteLine("\n\nAfter Modification:");
Console.WriteLine("Original Array:");
foreach (int number in originalArray)
{
    Console.Write(number + " ");
}
Console.WriteLine("\nCopied Array:");
foreach (int number in copiedArray)
{
    Console.Write(number + " ");
}
```


#### Debug

```txt
--- Demo - Collection Copy Algorithm ---
Original Array:
1 2 3 4 5
Copied Array:
1 2 3 4 5

After Modification:
Original Array:
1 2 3 4 5
Copied Array:
99 2 3 4 5
```

---

### Tips, Tricks, and Reflection

**Key Points**
- Value types hold the data directly and operate independently when assigned to another variable.
- Reference types store references to data, meaning multiple variables can refer to the same memory location.

Understanding these differences is essential when working with collections, ensuring you manage data correctly without unintended side effects.

**Copy Methods**
- There are a number of methods for easily copying elements from one array or list to another. For example, look up `List.CopyTo()`, `Array.CopyTo()`, `Array.Copy()`.

**Strings as Reference Types**

It may be confusing to hear that strings are reference types. Strings appear to behave like value types, but they are reference types. Do some research and see why this is the case.