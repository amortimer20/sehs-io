---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 2.4 Compount Boolean Expressions
---

[← Back](/c-sharp-fundamentals/)

## Activity 2.4 Compound Boolean Expressions

---

### Introduction

The Boolean expressions we learned in the beginning of this section work for many scenarios, but sometimes we need more specific conditions. There are two more Boolean operators that are commonly used to create more complex logical expressions. Remember the not `!` logical operator? These operators are the other logical operators, but they behave a little differently.

- **And operator** `&&` - _Both_ sides of the expression must be true for the result to be true.
- **Or operator** `||` - _At least one_ side of the expression must be true for the result to be true.

Think of the `&&` operator as the stric operator between the two, and the `||` operator as the more relaxed operator.

Here's an example of when you may want to use a compound expression: "Check if a number is between 0 _and_ 100.

```cs
number >= 0 && number <= 100
```

The expression read like this: "number is greater than or equal to 0 and number is less than or equal to 100.

#### Truth Tables

| **Logical And (&&)**                   | **Result** |
| :------------------------------------- | ---------: |
| `100 == 100 && "anthony" == "anthony"` |       True |
| `100 == 99 && "anthony" == "anthony"`  |      False |
| `"abc" == "abc" && "ABC" == "abc"`     |      False |
| `10 > 100 && 90 < 10`                  |      False |

<br>

| **Logical Or (\|\|)**                    | **Result** |
| :-------------------------------------   | ---------: |
| `100 == 100 \|\| "anthony" == "anthony"` |       True |
| `100 == 99 \|\| "anthony" == "anthony"`  |       True |
| `"abc" == "abc" \|\| "ABC" == "abc"`     |       True |
| `10 > 100 \|\| 90 < 10`                  |      False |

<br>

#### Skills to Practice

- Creating compound boolean expressions
  - Logical And operator `&&`
  - Logical Or operator `||`

---

### Instructions

#### Setup

1. Create a new C# console application. Name the project **2.4 Compound Boolean Expressions**.
2. Click Create.

#### Code

```cs
// One round battle demo
int playerHealth = 10;
int enemyHealth = 10;
bool escaped = false; // If you decide to run, this will change to true
Random random = new();

Console.WriteLine("-- Menu --");
Console.WriteLine("1) attack");
Console.WriteLine("2) run");

Console.Write("-> "); // Arrow next to prompt, nothing special.
string choice = Console.ReadLine();

if (choice == "1"  || choice == "attack")
{
    int playerAttack = random.Next(1, 11);
    int enemyAttack = random.Next(1, 11);

    enemyHealth = enemyHealth - playerAttack;
    playerHealth = playerHealth - enemyAttack;

    Console.WriteLine($"You did {playerAttack} damage!");
    Console.WriteLine($"Enemy has {enemyHealth} health left.\n");
    Console.WriteLine($"Enemy did {enemyAttack} damage!");
    Console.WriteLine($"You have {playerHealth} health left.\n");
}
else if (choice == "2" || choice == "run")
{
    Console.WriteLine("You ran away like a baby.");
    escaped = true;
}
else
{
    Console.WriteLine("Invalid option selected. Exiting battle.");
}


// You can just say escaped, you don't need to say escaped == true. Both conditions work though.
if (escaped)
{
    Console.WriteLine("Bye bye! Back home to Mommy!");
}
else if (playerHealth > enemyHealth)
{
    Console.WriteLine("You are beating the enemy!");
}
else if (enemyHealth < playerHealth)
{
    Console.WriteLine("Be careful, the enemy is beating you!");
}
else
{
    Console.WriteLine("Battle is currently tied!");
}

Console.WriteLine();


// Lottery Lite
// This is a tough lottery game. Feel free to tweak the number range for testing.
int winningNumber = random.Next(0, 100); // 0 - 99

// Extract individual digits using division and modulus operators
int winningDigitOne = winningNumber / 10;
int winningDigitTwo = winningNumber % 10;

Console.Write("Enter your lottery number (0 - 99)");
string input = Console.ReadLine();
int entryNumber = Convert.ToInt32(input);
int entryDigitOne = entryNumber / 10;
int entryDigitTwo = entryNumber % 10;

Console.WriteLine($"\nAnd the winning number is.... {winningNumber}!");

// Exact match -> $10,000
// Digits match out of order -> $3,000
if (entryNumber == winningNumber)
{
    Console.WriteLine("Exact match! You win the grand prize of $10,000!");
}
else if (winningDigitOne == entryDigitTwo && winningDigitTwo == entryDigitOne)
{
    Console.WriteLine("Your digits match, but out of order! You win $3,000!");
}
else
{
    Console.WriteLine("No match. Better luck next time!");
}
```

#### Debug

```txt
-- Menu --
1) attack
2) run
-> 1
You did 4 damage!
Enemy has 6 health left.

Enemy did 5 damage!
You have 5 health left.

Battle is currently tied!

Enter your lottery number (0 - 99)24

And the winning number is.... 56!
No match. Better luck next time!
```

---

### Tips, Tricks, and Reflection

- When using the same variable on both sides of an expression, it may be tempting to write your condition like this: `choice == 0 || 1`. This syntax is incorrect, you must be explicit when writing your expressions: `choice == 0 || choice == 1`.
