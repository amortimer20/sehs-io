---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals Part 2 Extras
---

## C# Fundamentals Part 2 Extras

---

### Introduction

**Part 2 Extras** includes various useful programming content that didn't quite fit into a specific lesson. While you might not encounter some of these techniques in upcoming lessons, feel free to incorporate them into your future programs.

### Switch Statements

Switch statements provide an elegant way to handle multiple conditional paths based on the value of a variable. They’re particularly useful when you need to compare the same variable to different values.

**Example**:
```cs
int dayOfWeek = 3;
switch (dayOfWeek)
{
    case 1:
        Console.WriteLine("Monday");
        break;
    case 2:
        Console.WriteLine("Tuesday");
        break;
    case 3:
        Console.WriteLine("Wednesday");
        break;
    // Other cases...
    default:
        Console.WriteLine("Invalid day");
        break;
}
```

### Do While Loops

A do while loop is similar to a while loop, but it ensures the block of code executes at least once before the condition is evaluated.

```cs
string correctPassword = "Secret123";
string inputPassword;

do
{
    Console.Write("Enter password: ");
    inputPassword = Console.ReadLine();
} while (inputPassword != correctPassword);

Console.WriteLine("Access granted!");
```

### Break and Continue Keywords

These keywords control the flow of loops. `break` exits the loop entirely, while `continue` skips the rest of the current loop iteration and proceeds with the next iteration.

```cs
// Break Example
for (int i = 0; i < 10; i++)
{
    if (i == 5)
        break;
    Console.WriteLine(i);
}

// Continue Example
for (int i = 0; i < 10; i++)
{
    if (i % 2 == 0)
        continue;
    Console.WriteLine(i);
}
```