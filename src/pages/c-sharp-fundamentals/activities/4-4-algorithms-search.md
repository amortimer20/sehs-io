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