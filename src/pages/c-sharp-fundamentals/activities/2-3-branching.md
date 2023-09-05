---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 2.3 Branching Statements
---

[← Back](/c-sharp-fundamentals/)

## Activity 2.3 Branching with Else If and Else

---

### Introduction

The last activity introduced us to the idea of controlling the flow of an application with _if statements_. The age validator app checked each if statement's condition resulted in true. There are many instances where you only want one selection to execute. i.e. One or the other.

We can _branch_ if statements with to other kinds of statements, `else if`and `else`.

- `else if` must follow and if statement, and will only check it's condition if the preceding if statement condition resulted in `false`. You can chain as many else if statements as you want, but they _must_ come after the initial if statement.
- `else` must be at the end of an if or else if statement. It does not require a condition, and will execute if any preceding `if` or `else if` statement coniditions result in `false`.

**Example**

```cs
Console.Write("Enter your age: ");
string input = Console.ReadLine();
int age = Convert.ToInt32(input);

if (age >= 16)
{
    Console.WriteLine("You are old enough to drive!");
}
else if (age == 15)
{
    Console.WriteLine("You can't drive on your own yet, but you are eligible for a learners permit.");
}
else
{
    Console.WriteLine("I'm sorry, but you are not old enough to drive");
}
```

#### Skills to Practice

- Branching if statements with `else if` and `else`
- Making a main menu

---

### Instructions

#### Setup

1. Create a new C# console application. Name the project **2.2 Branching with Else If and Else**.
2. Click Create.

#### Code

```cs
// Zodiac Calendar
Console.WriteLine("--- Zodiac Calendar ---\n");
Console.Write("Enter your birth year: ");
string input = Console.ReadLine();
int year = Convert.ToInt32(input);
int zodiacNumber = year % 12;

Console.Write($"\nYour birth year was {year}, so you were born the year of the ");

if (zodiacNumber == 0)
{
    Console.WriteLine("monkey");
}
else if (zodiacNumber == 1)
{
    Console.WriteLine("rooster");
}
else if (zodiacNumber == 2)
{
    Console.WriteLine("dog");
}
else if (zodiacNumber == 3)
{
    Console.WriteLine("pig");
}
else if (zodiacNumber == 4)
{
    Console.WriteLine("rat");
}
else if (zodiacNumber == 5)
{
    Console.WriteLine("ox");
}
else if (zodiacNumber == 6)
{
    Console.WriteLine("tiger");
}
else if (zodiacNumber == 7)
{
    Console.WriteLine("rabbit");
}
else if (zodiacNumber == 8)
{
    Console.WriteLine("dragon");
}
else if (zodiacNumber == 9)
{
    Console.WriteLine("snake");
}
else if (zodiacNumber == 10)
{
    Console.WriteLine("horse");
}
else
{
    Console.WriteLine("sheep");
}

Console.WriteLine();


// Simple ATM Demo
Console.WriteLine("\n--- ATM Demo ---\n");
Console.Write("Set your initial balance: $");
input = Console.ReadLine();
double balance = Convert.ToDouble(input);

Console.WriteLine("Simple ATM");
Console.WriteLine("------------------------");
Console.WriteLine("Select an option: ");
Console.WriteLine("1) View Balance");
Console.WriteLine("2) Deposit");
Console.WriteLine("3) Withdraw");

// We're not doing arithmetic with the input, so it's okay to leave it as a string.
Console.Write("Enter your option (1,2,3): ");
string option = Console.ReadLine();

if (option == "1")
{
    Console.WriteLine($"Your balance is ${balance}.");
}
else if (option == "2")
{
    Console.Write("How much would you like to deposit? $");
    input = Console.ReadLine();
    double deposit = Convert.ToDouble(input);
    balance = balance + deposit;
    Console.WriteLine($"Thank you for your deposit of ${deposit}.");
    Console.WriteLine($"Your balance is now ${balance}.");
}
else if (option == "3")
{
    Console.Write("How much would you like to withdraw? $");
    input = Console.ReadLine();
    double withdraw = Convert.ToDouble(input);
    balance = balance - withdraw;
    Console.WriteLine($"Thank you for your withdraw of ${withdraw}.");
    Console.WriteLine($"Your balance is now ${balance}.");
}
else
{
    Console.WriteLine("Invalid option. Exiting...");
}
```

#### Debug

```txt
--- Zodiac Calendar ---
Enter your birth year: 1990

Your birth year was 1990, so you were born the year of the horse

--- ATM Demo ---

Set your initial balance: $1200
Simple ATM
------------------------
Select an option:
1) View Balance
2) Deposit
3) Withdraw
Enter your option (1,2,3): 2
How much would you like to deposit? $75.95
Thank you for your deposit of $75.95.
Your balance is now $1275.95.
```

---

### Tips, Tricks, and Reflection

- Notice how many code blocks are used to create even a simple application. Make sure code inside a code block is indented one tab.
