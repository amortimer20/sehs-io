---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: "C# Fundamentals Tracer 1"
---

[← Back](/c-sharp-fundamentals/)

## Tracer 1 - While Loops

---

### Instructions

<a href="/courses/c-sharp-fundamentals/tracer-1.pdf" target="_blank">PDF Instructions</a>

For each question, complete the following:

1. Create the loop from the prompt or trace the loop provided.
2. Show your work tracing the variable(s). Assume the variables are named _n, m, etc._.
3. Answer the following questions:
    1. How many iterations are performed?
    2. What is/are the final value of the variable(s) when the loop terminates?
    3. What is the output, if any?

##### Example

1. Create a while loop that displays the numbers from 5 to 25 in increments of 4.

```cs
int n = 5;

while (n <= 25)
{
    Console.Write(n + ",");
    n = n + 4;
}
```

- n: ~~5~~, ~~9~~, ~~13~~, ~~17~~, ~~21~~, ~~25~~, 29
- Number of iterations: 6
- Final value of n: 29
- Output: 5,9,13,17,21,25

### Questions

1. Create a while loop that displays the numbers from 1 to 10.
2. Create a while loop that displays the numbers from 27 down to 15.
3. Create a while loop that displays the numbers 1 to 30 in increments of 3.
4. Create a while loop that displays the numbers from 5 to 50 in increments of 5.
5. Trace the following loop:
```cs
int n = 10;

while (n <= 45)
{
    n = n * 2;
    n = n - 5;
    Console.WriteLine(n);
}
```

6. Trace the following loop:
```cs
int n = 1;

while (n < 100)
{
    n = n + 25;
    n = n - 10;

    if (n % 2 == 0)
    {
        Console.WriteLine(n);
    }
}

```
