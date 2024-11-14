---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 4.5 Algorithms Part 3 - Sorting
---

[← Back](/c-sharp-fundamentals/)

## Activity 4.5 Algorithms Part 3 - Sorting

---

### Introduction

Have you ever wondered how large amounts of data are organized so quickly and efficiently? Sorting algorithms play a crucial role in arranging data in a specific order, making it easier to search, analyze, and manage. Sorting is fundamental to computer science because it lays the groundwork for more complex algorithms that require data to be in a particular sequence. In this lesson, we’ll explore two fundamental sorting algorithms: Selection Sort and Bubble Sort. These algorithms provide a foundation for understanding more advanced sorting techniques.

#### Selection Sort

The selection sort algorithm is a simple yet powerful way to sort elements in a list or array by repeatedly finding the smallest (or largest) element from the unsorted portion and moving it to the beginning of the list.

Steps in **Selection** Sort

1. For each element in the array (from the first to the second-to-last element):
    - Assume the first unsorted element is the minimum.
    - Compare this element with each remaining unsorted element to find the smallest value.
    - If a smaller element is found, update the minimum.
    - Swap the minimum element with the first unsorted element.
2. Repeat until the entire array is sorted.

```cs
void SelectionSort(int[] array)
{
    for (int i = 0; i < array.Length - 1; i++)
    {
        int minIndex = i;
        for (int j = i + 1; j < array.Length; j++)
        {
            if (array[j] < array[minIndex])
            {
                minIndex = j;  // Update minimum element index
            }
        }
        // Swap the minimum element with the first unsorted element
        int temp = array[minIndex];
        array[minIndex] = array[i];
        array[i] = temp;
    }
}
```

**Demo**

```cs
int[] numbers = { 64, 25, 12, 22, 11 };
SelectionSort(numbers);

foreach (int num in numbers)
{
    Console.Write(num + " ");
}
```

```txt
11 12 22 25 64
```

**Selection Sort Card Demo**

<video src="/courses/c-sharp-fundamentals/selection-sort-video.mp4" controls style="width: 100%; max-width: 640px;"></video>

---

#### Bubble Sort

The bubble sort algorithm is another straightforward way to sort elements in a list or array by repeatedly "bubbling" the largest unsorted element to the end of the list in each pass. Although not the most efficient, it’s valuable for understanding basic sorting principles.

**Steps in Bubble Sort**

1. For each pass through the array (up to the second-to-last element):
    - Compare each pair of adjacent elements.
    - If the current element is greater than the next, swap them.
    - At the end of each pass, the largest unsorted element is moved to its correct position.
2. Repeat until no more swaps are needed.

```cs
void BubbleSort(int[] array)
{
    for (int i = 0; i < array.Length - 1; i++)
    {
        for (int j = 0; j < array.Length - 1 - i; j++)
        {
            if (array[j] > array[j + 1])
            {
                // Swap adjacent elements if they’re out of order
                int temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}
```

**Demo**

```cs
int[] numbers = { 64, 34, 25, 12, 22, 11, 90 };
BubbleSort(numbers);

foreach (int num in numbers)
{
    Console.Write(num + " ");
}
```

```txt
11 12 22 25 34 64 90
```

**Bubble Sort Card Demo**

<video src="/courses/c-sharp-fundamentals/bubble-sort-video.mp4" controls style="width: 100%; max-width: 640px;"></video>