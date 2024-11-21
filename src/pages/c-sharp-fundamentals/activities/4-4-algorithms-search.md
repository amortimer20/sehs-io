---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 4.4 Algorithms Part 2 - Searching
---

[← Back](/c-sharp-fundamentals/)

## Activity 4.4 Algorithms Part 2 - Searching

---

### Introduction

Have you ever wondered how Google instantly finds what you're looking for among billions of web pages? The answer lies in the power of search algorithms. Search algorithms are step-by-step procedures used to locate specific data within a larger set of data, such as finding a particular book in a vast library or a single email in your inbox. Understanding search algorithms is essential because they are the backbone of today's data-driven world. They make our online experiences faster and more efficient, helping us navigate through massive amounts of information with ease. In this lesson, we’ll dive into the two core search algorithms, **linear search** and **binary search**.

#### Linear Search

The linear search algorithm is a straightforward way to search for a specific element in a list or array by checking each element one by one, from the beginning to the end, until the desired element is found or the entire list has been searched.

**Steps in Linear Search**

1. For each element in the collection:
    - If the current element equals the target, return its index.
2. If the loop terminates with no match, return -1.

```cs
int LinearSearch(int[] array, int target)
{
    for (int i = 0; i < array.Length; i++)
    {
        if (array[i] == target)
        {
            return i;  // Target found, return index
        }
    }
    return -1;  // Target not found
}
```

**Demo**

```cs
int[] numbers = [5, 10, 15, 20, 25];
int target1 = 20;
int target2 = 49;

int search1 = LinearSearch(numbers, target1);
int search2 = LinearSearch(numbers, target2);

Console.WriteLine(search1);
Console.WriteLine(search2);
```

```txt
3
-1
```

**Linear Search Card Demo**

<video src="/courses/c-sharp-fundamentals/linear-search-video.mp4" controls style="width: 100%; max-width: 640px;"></video>

---

#### Binary Search

The binary search algorithm is an efficient way to search for a specific element in a **sorted** list or array. It repeatedly divides the search interval in half, eliminating half of the elements each time, until the desired element is found or the search interval is empty.

Note: If the collection is not sorted, the binary search algorithm will not work correctly. This requirement is known as a precondition, meaning the collection must be sorted before the algorithm can be applied.

**Steps in Binary Search**

1. **Begin with two pointers**: `low` at the start of the array and `high` at the end.
2. Repeat until `low` is greater than `high`:
    - Calculate the middle index: `mid = (low + high) / 2`.
    - If the middle element equals the target, return `mid`.
    - If the middle element is less than the target, move the `low` pointer to `mid + 1`.
    - If the middle element is greater than the target, move the high pointer to `mid - 1`.
3. If the loop terminates with no match, return -1.

```cs
int BinarySearch(int[] array, int target)
{
    int low = 0;
    int high = array.Length - 1;

    while (low <= high)
    {
        int mid = (low + high) / 2;
        if (array[mid] == target)
        {
            return mid;  // Target found, return index
        }
        else if (array[mid] < target)
        {
            low = mid + 1;  // Search right half
        }
        else
        {
            high = mid - 1;  // Search left half
        }
    }
    return -1;  // Target not found
}
```

**Demo**

```cs
int[] numbers = [ 5, 10, 15, 20, 25 ];
int target1 = 25;
int target2 = 49;

int search1 = BinarySearch(numbers, target1);
int search2 = BinarySearch(numbers, target2);

Console.WriteLine(search1);
Console.WriteLine(search2);
```

```txt
4
-1
```

**Binary Search Card Demo**

<video src="/courses/c-sharp-fundamentals/binary-search-video.mp4" controls style="width: 100%; max-width: 640px;"></video>

---

### Demo: Linear Search vs. Binary Search

The provided program compares the efficiency of linear search versus binary search in finding a target value within a large dataset. By running both search algorithms on a list of integers, the program demonstrates the significant speed advantage of binary search over linear search. Each search method includes detailed tracing to show the number of iterations and steps taken to find the target value, providing insight into why binary search is more efficient for sorted data sets.

```cs
int LinearSearchTraced(List<int> collection, int target)
{
    Console.WriteLine("--Linear Search--");
    int iterationNumber = 0;

    for (int i = 0; i < collection.Count; i++)
    {
        iterationNumber++;
        Console.WriteLine($"Iteration number: {iterationNumber}. Current element: {collection[i]}.");
        if (collection[i] == target)
        {
            Console.WriteLine($"Target {target} found at index {i} after {iterationNumber} tries.");
            return i;
        }
    }

    Console.WriteLine($"Target {target} not found after {iterationNumber} tries.");
    return -1;
}

int BinarySearchTraced(List<int> collection, int target)
{
    Console.WriteLine("--Binary Search--");
    int low = 0;
    int high = collection.Count - 1;
    int iterationNumber = 0;

    while (low <= high)
    {
        iterationNumber++;
        int mid = (low + high) / 2;
        Console.WriteLine($"Iteration Number {iterationNumber}; Low:{low}, Mid: {mid}, High: {high}");

        if (collection[mid] == target)
        {
            Console.WriteLine($"Target {target} found at index {mid} after {iterationNumber} tries.");
            return mid;
        }
        else if (collection[mid] > target)
        {
            Console.WriteLine($"Too far right, shift high to index {mid - 1}");
            high = mid - 1; // If too far right, shift left
        }
        else
        {
            Console.WriteLine($"Too far left, shift low to index {mid + 1}");
            low = mid + 1; // If too far left, shift right
        }
    }

    Console.WriteLine($"Target {target} not found after {iterationNumber} tries.");
    return -1;
}

// --- Demo: Linear Search vs. Binary Search ---
List<int> largeNumberSet = new List<int>();
Random r = new Random();

Console.Write("Enter target element (1-1000): ");
int target = Convert.ToInt32(Console.ReadLine());

// Populate set of 100,00 numbers
for (int i = 0; i < 10000; i++)
{
    largeNumberSet.Add(r.Next(1, 1001));
}

largeNumberSet.Sort(); // List must be sorted before using binary search

LinearSearchTraced(largeNumberSet, target);

Console.WriteLine("\nPress enter to continue...");
Console.ReadLine();

BinarySearchTraced(largeNumberSet, target);
```

```txt
Enter target element (1-1000): 777
--Linear Search--
Iteration number: 1. Current element: 1.
Iteration number: 2. Current element: 1.
Iteration number: 3. Current element: 2.
Iteration number: 4. Current element: 2.
...
Iteration number: 7710. Current element: 776.
Iteration number: 7711. Current element: 776.
Iteration number: 7712. Current element: 776.
Iteration number: 7713. Current element: 776.
Iteration number: 7714. Current element: 777.
Target 777 found at index 7713 after 7714 tries.

Press enter to continue...

--Binary Search--
Iteration Number 1; Low:0, Mid: 4999, High: 9999
Too far left, shift low to index 5000
Iteration Number 2; Low:5000, Mid: 7499, High: 9999
Too far left, shift low to index 7500
Iteration Number 3; Low:7500, Mid: 8749, High: 9999
Too far right, shift high to index 8748
Iteration Number 4; Low:7500, Mid: 8124, High: 8748
Too far right, shift high to index 8123
Iteration Number 5; Low:7500, Mid: 7811, High: 8123
Too far right, shift high to index 7810
Iteration Number 6; Low:7500, Mid: 7655, High: 7810
Too far left, shift low to index 7656
Iteration Number 7; Low:7656, Mid: 7733, High: 7810
Too far right, shift high to index 7732
Iteration Number 8; Low:7656, Mid: 7694, High: 7732
Too far left, shift low to index 7695
Iteration Number 9; Low:7695, Mid: 7713, High: 7732
Target 777 found at index 7713 after 9 tries.
```