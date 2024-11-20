---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 3.7 Algorithms Part 1 - Essentials
---

[← Back](/c-sharp-fundamentals/)

## Activity 3.7 Algorithms Part 1 - Essentials

---

### Introduction

Throughout this course, we have been learning not only the foundational constructs of computer programming but also how to apply these concepts to solve various simple problems and implement basic application features. While we have not explicitly referred to our programs as algorithms, that is precisely what they are. Recall that an algorithm is a well-defined sequence of instructions designed to perform a specific task or solve a particular problem. In this lesson, we will explore some basic yet essential algorithms: Accumulation, Min and Max, Swap, Shuffle, and Merge.

The study of algorithms is a central part of computer science because it equips students with the tools they need to approach problem-solving systematically. Understanding algorithms is not just about knowing a series of steps; it's about developing the ability to think critically and analytically. This skill set is invaluable as it enables students to tackle a wide range of computational problems with confidence.

Please be aware that this activity will differ from our previous ones. Each algorithm will serve as its own standalone activity. However, you are welcome to implement them all within a single project if you prefer.

#### Skills to Practice

- Practicing basic computational processes.

---

### Instructions

#### Setup

1. Create a new C# console application. Name the project **3.7 Algorithms Part 1**.
2. Click Create.

#### Accumulation Algorithm

The accumulation algorithm iterates through a collection of elements and combines them using a specific operation to produce a single cumulative result. Note that we have implemented a sum algorithm previously. However, this accumulation can use any math operation to aggregate the results, not just addition.

```cs
int[] numbers = [ 1, 2, 3, 4, 5 ];
int totalSum = 0;

foreach (int number in numbers)
{
    totalSum += number;
}

// Optional
Console.WriteLine($"The total sum is: {totalSum}");
```

**Steps:**

For a given collection:

1. Set a variable to store the accumulated result (e.g., totalSum).
2. Iterate through each element in the array using a loop.
3. Add each element to the accumulated result.

Optionally, output the final accumulated result.

---

#### Min and Max Algorithm

The min and max algorithm involves iterating through a collection of elements to find the smallest (minimum) and largest (maximum) values.

```cs
int[] numbers = [ 3, 1, 4, 1, 5, 9 ];

// Find min
int minValue = numbers[0];

foreach (int number in numbers)
{
    if (number < minValue)
    {
        minValue = number;
    }
}

// Find max
int maxValue = numbers[0];

foreach (int number in numbers)
{
    if (number > maxValue)
    {
        maxValue = number;
    }
}

// Optional
Console.WriteLine($"The minimum value is: {minValue}");
Console.WriteLine($"The maximum value is: {maxValue}");
```

**Steps:**

For a given collection:

1. Set the first element as the initial minimum and maximum values (minValue and maxValue).
2. Iterate through each element in the array starting from the second element.
3. Update the minValue if the current element is smaller.
4. Update the maxValue if the current element is larger.

Optionally, iutput the final minimum and maximum values.

**Note**

- The example above demonstrates finding both the minimum and maximum values, but you can choose to find just one if necessary.
- Using a foreach loop is not the most efficient way to implement this algorithm, as it compares the element at index 0 to itself on the first iteration. Consider refactoring the algorithm to start at index 1 instead, saving an iteration.
- You can modify this algorithm to keep track of the _index_ of the minimum/maximum instead of the value if you need to know the position of the minimum/maximum element, not just the value.

---

#### Swap Algorithm

The swap algorithm is a fundamental operation in computer programming that involves exchanging the values of two variables. This simple yet powerful technique is essential for many other algorithms, particularly in sorting algorithms.

```cs
int[] numbers = [ 1, 2, 3, 4, 5 ];
int temp;
int indexA = 1; // Index of the first element to swap
int indexB = 3; // Index of the second element to swap

temp = numbers[indexA];
numbers[indexA] = numbers[indexB];
numbers[indexB] = temp;
```

**Steps:**

For a given collection:

1. Define two indexes representing the positions of the elements to be swapped.
2. Use a temporary variable to hold the value of the first element.
3. Assign the value of the second element to the first element’s position.
4. Assign the value stored in the temporary variable to the second element’s position.

---

#### Shuffle

The shuffle algorithm rearranges the elements of a collection in a random order. Understanding how to shuffle elements is vital in scenarios where randomization is required, such as in games or simulations. Here’s an example using the Fisher-Yates* shuffle algorithm:

```cs
int[] numbers = [ 1, 2, 3, 4, 5 ];
Random random = new Random();

for (int i = numbers.Length - 1; i > 0; i--)
{
    int j = random.Next(0, i + 1);
    int temp = numbers[i];
    numbers[i] = numbers[j];
    numbers[j] = temp;
}

// Optional: Iterate through array for verification
foreach (int number in numbers)
{
    Console.Write(number + " ");
}
```

**Steps:**

For a given collection:

1. Create an instance of the Random class to generate random indices.
2. Iterate through the array from the last element to the first.
3. Generate a random index j within the range of 0 to i.
4. Swap the elements at indices i and j using a temporary variable.

Optionally, iterate through the array to verify that the elements have been shuffled.

*You may notice that there are algorithms that are named after their inventors as a way to honor their contributions to the field of computer science and mathematics.

---

#### Simple Merge Algorithm

The merge algorithm is a fundamental operation in computer programming that involves combining two or more sorted sequences into a single sorted sequence. This version of the merge algorithm combines two arrays by placing the elements of the second array immediately after the elements of the first array.

```cs
int[] array1 = [ 1, 3, 5, 7 ];
int[] array2 = [ 2, 4, 6, 8 ];
int[] mergedArray = new int[array1.Length + array2.Length];

for (int i = 0; i < array1.Length; i++)
{
    mergedArray[i] = array1[i];
}

for (int j = 0; j < array2.Length; j++)
{
    mergedArray[array1.Length + j] = array2[j];
}


// Optional: Iterate through array for verification
foreach (int number in mergedArray)
{
    Console.Write(number + " ");
}
```

**Steps:**

For two given collections:

1. Create an array to hold the merged result.
2. Copy the elements of the first array into the merged array.
3. Copy the elements of the second array into the merged array, starting after the last element of the first array.

Optionally, Iterate through the merged array to verify that the elements have been combined.

##### Simple Merge Algorithm with Lists

This version of the merge algorithm combines two lists, which can be more flexible and easier to work with compared to arrays.

```cs
List<int> list1 = [ 1, 3, 5, 7 ];
List<int> list2 = [ 2, 4, 6, 8 ];
List<int> mergedList = [];

foreach (int number in list1)
{
    mergedList.Add(number);
}

foreach (int number in list2)
{
    mergedList.Add(number);
}
```

**Steps:**

For two given collections:

1. Initialize an empty list.
1. Use a foreach loop to iterate through the elements of the first list, adding each element to the new list using the `Add()` method.
1. Use a foreach loop to iterate through the elements of the second list, adding each element to the new list using the `Add()` method.

**Bonus Method:** `AddRange()`

As an alternative, you can use the AddRange() method to achieve the same result more concisely. The AddRange() method allows you to add all elements from one list to another in a single call.

```cs
mergedList.AddRange(list1);
mergedList.AddRange(list2);
```

---

### Tips, Tricks, and Reflection

- **Key Takeaway:** Understanding and applying these basic algorithms enhances your ability to approach problems systematically and develop efficient solutions.
- Remember, it's perfectly okay not to memorize every algorithm by heart. The important thing is to be aware of their existence and understand their principles. With this knowledge, you can refer back to these algorithms and apply them when needed in your programming journey. Keep practicing, and continue building your skills one step at a time.