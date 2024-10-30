---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 2.7 Number Guessing Game
---

[← Back](/c-sharp-fundamentals/)

## Activity 2.7 Number Guessing Game

---

### Introduction

Creating fun and engaging programs doesn't always require complex coding—sometimes a few simple loops and if statements can do the trick. In this activity, you'll design a classic number guessing game using a basic while loop.

#### Skills to Practice

- Writing while loops

---

### Instructions

#### Setup

1. Create a new C# console application. Name the project **2.7 Number Guessing Game**.
2. Click Create.

#### Code

```cs
Random random = new();
int secretNumber = random.Next(1, 11); // Number between 1 and 10
int tries = 0; // Track the number of tries
int guess = 0; // Any default number not between 1 and 10 is fine

while (guess != secretNumber)
{
    Console.Write("Guess the number (1-10): ");
    guess = Convert.ToInt32(Console.ReadLine());
    tries = tries + 1;

    if (guess == secretNumber)
    {
        Console.WriteLine($"Correct! It took you {tries} tries!");
    }
    else if (guess > secretNumber)
    {
        Console.WriteLine("Wrong! Too high.");
    }
    else
    {
        Console.WriteLine("Wrong! Too low.");
    }
}
```

#### Debug

```txt
Guess the number (1-10): 1
Wrong! Too low.
Guess the number (1-10): 9
Wrong! Too high.
Guess the number (1-10): 6
Wrong! Too high.
Guess the number (1-10): 5
Correct! It took you 4 tries!
```

---

### Tips, Tricks, and Reflection

- Try adding a feature before the game starts to set the difficulty.
  - Easy: 1-10
  - Medium: 1-25
  - Hard: 1-50
  - Insane: 1-100
