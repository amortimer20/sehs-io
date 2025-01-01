---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 1.5 Manipulating Variables
---

[← Back](/c-sharp-fundamentals/)

## Activity 1.5 Manipulating Variables

---

### Introduction

In programming, variables are used to store data that can be used later in the program. You’ve already learned how to declare and use variables. But one of the most powerful things about variables is that they don’t have to stay the same throughout a program. We can change the value of a variable after it's been initialized.

Changing the value of a variable allows you to work with dynamic data. For example, a game might change a player's score every time they earn points, or an app could update a temperature reading when the weather changes.

Let’s say you have a variable that holds your age:

```cs
int age = 15;
```

In this example, `age` is a variable, and it currently holds the value 15. But time passes, and you have a birthday, so now your age is 16. You can change the value of the `age` variable like this:

```cs
age = 16;
```

Notice you don't need to specify `int` again because the variable is already declared. You're just changing the value of the existing variable.

#### Keeping Track

Sometimes, you will need modify a variable by adding, subtracting, etc. to it. For example, let's say you're making a fighting game and your player takes damage:

```cs
int health = 100;

// Take damage
health = health - 10;
```

This takes the current value of health, subtracts 10, and saves the new result. If you're thinking of variables from Algebra class, this might seem odd. Remember, variables in programming aren't exactly the same as those in math class.

**Example Video**

<video src="/courses/c-sharp-fundamentals/manipulating-variables-animation.mp4" controls style="width: 100%; max-width: 640px;"></video>

#### Skills to Practice

- Manipulate variable values using the assignment operator

### Instructions

#### Setup

1. Create a new C# console application. Name the project **1.5 Manipulating Variables**.
2. Click Create.

#### Code

```cs
Console.WriteLine("--- Demo 1 - Battle Demo ---");
int playerHealth = 100;
int playerAttack = 25;
int enemyHealth = 100;
int enemyAttack = 20;
int potions = 3;

Console.WriteLine($"Health: {playerHealth}");
Console.WriteLine($"Enemy health: {enemyHealth}");
Console.WriteLine();

Console.WriteLine("Player attacks.");
enemyHealth = enemyHealth - playerAttack;
Console.WriteLine($"You did {playerAttack} damage! Enemy health: {enemyHealth}");
Console.WriteLine();

Console.WriteLine("Enemy attacks.");
playerHealth = playerHealth - enemyAttack;
Console.WriteLine($"Enemy did {enemyAttack} damage! Player health: {playerHealth}");
Console.WriteLine();

Console.WriteLine("Using potion...");
playerHealth = playerHealth + 10;
potions--; // What does -- do? Google 'C# -- operator'
Console.WriteLine($"Player health: {playerHealth}. Potions left: {potions}");

Console.WriteLine("Picked up a potion...");
potions++; // What does ++ do? Google 'C# ++ operator'


Console.WriteLine("\n\n"); // What does \n do? Google search 'C# \n'


Console.WriteLine("--- Demo 2 - Banking Simulator ---");
string accountName = "Checking Account";
double balance = 100.50;

Console.WriteLine($"{accountName} balance: {balance}");
Console.WriteLine($"Depositing $99.01 to {accountName}");
balance = balance + 99.01;
Console.WriteLine($"{accountName} balance: {balance}");
```

#### Debug

```txt
--- Demo 1 - Battle Demo ---
Health: 100
Enemy health: 100

Player attacks.
You did 25 damage! Enemy health: 75

Enemy attacks.
Enemy did 20 damage! Player health: 80

Using potion...
Player health: 90. Potions left: 2
Picked up a potion...



--- Demo 2 - Banking Simulator ---
Checking Account balance: 100.5
Depositing $99.01 to Checking Account
Checking Account balance: 199.51
```

### Tips, Tricks, and Reflection

- Remember that variables need to be spelled exactly the same every time.
- Use your judgement when deciding whether to use an integer or double variable. Should the value be allowed to have decimals in it?
    - Can dollar amounts have a decimal?
    - When shopping online, does the quantity of what you're buying usually need a decimal place?
