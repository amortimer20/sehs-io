---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 2.4 Compount Boolean Expressions
---

[← Back](/c-sharp-fundamentals/)

## Activity 2.4 Compound Boolean Logic: AND and OR

---

### Introduction

This lesson dives deeper into the fundamentals of Boolean logic, focusing specifically on the logical AND (`&&`) and OR (`||`) operators. You will learn how to apply these operators to evaluate multiple conditions in programming, allowing for more complex and expressive conditions.

The Boolean expressions we covered earlier work for many scenarios, but sometimes more specific conditions are needed. There are two more Boolean operators commonly used to create complex logical expressions: the AND (`&&`) and OR (`||`) operators. Remember the NOT (`!`) logical operator? These operators are its counterparts, behaving differently to help you refine your conditions.

- **And operator &&**: Both sides of the expression must be true for the result to be true.

- **Or operator ||**: At least one side of the expression must be true for the result to be true.

Think of the `&&` operator as the stricter of the two, while the `||` operator is less strict.

**Example 1: Check if a number is in range**

The expression below reads: "number is greater than or equal to 0 and number is less than or equal to 100."

```cs
if (number >= 0 && number <= 100)
{
    // Code omitted
}
```

**Example 2: Check driving eligibility**

```cs
bool hasLicense = true;
bool hasPermit = false;

if (hasLicense || hasPermit)
{
    Console.WriteLine("Eligible to drive.");
} 
else
{
    Console.WriteLine("Not eligible to drive.");
}
```

**Example 3: Validate username and password**

```cs
string username = "user123";
string password = "password123";

if (username == "user123" && password == "password123")
{
    Console.WriteLine("Login successful.");
} 
else
{
    Console.WriteLine("Login failed.");
}
```

#### Truth Tables

<table class="table table-hover table-bordered table-sm table-responsive w-auto">
  <thead>
    <tr>
      <th>Logical AND <code class="language-cs">&&</code></th><th>Result</th>
    </tr>
  </thead>
  <tbody class="table-striped">
    <tr>
      <td><code class="language-cs">100 == 100 && "anthony" == "anthony"</code></td>
      <td><code class="language-cs">true</code></td>
    </tr>
    <tr>
      <td><code class="language-cs">100 == 99 && "anthony" == "anthony"</code></td>
      <td><code class="language-cs">false</code></td>
    </tr>
    <tr>
      <td><code class="language-cs">"abc" == "abc" && "ABC" == "abc"</code></td>
      <td><code class="language-cs">false</code></td>
    </tr>
    <tr>
      <td><code class="language-cs">10 > 100 && 90 < 10</code></td>
      <td><code class="language-cs">false</code></td>
    </tr>
  </tbody>
</table>

<table class="table table-hover table-bordered table-sm table-responsive w-auto">
  <thead>
    <tr>
      <th>Logical OR <code class="language-cs">||</code></th><th>Result</th>
    </tr>
  </thead>
  <tbody class="table-striped">
    <tr>
      <td><code class="language-cs">100 == 100 || "anthony" == "anthony"</code></td>
      <td><code class="language-cs">true</code></td>
    </tr>
    <tr>
      <td><code class="language-cs">100 == 99 || "anthony" == "anthony"</code></td>
      <td><code class="language-cs">true</code></td>
    </tr>
    <tr>
      <td><code class="language-cs">"abc" == "abc" || "ABC" == "abc"</code></td>
      <td><code class="language-cs">true</code></td>
    </tr>
    <tr>
      <td><code class="language-cs">10 > 100 || 90 < 10</code></td>
      <td><code class="language-cs">false</code></td>
    </tr>
  </tbody>
</table>

#### Skills to Practice

- Creating compound boolean expressions using logical AND and logical OR

---

### Instructions

#### Setup

1. Create a new C# console application. Name the project **2.4 Boolean Logic AND OR**.
2. Click Create.

#### Code

```cs
Console.WriteLine("--- Demo 1 - One Round Battle ---");

int playerHealth = 10;
int enemyHealth = 10;
bool escaped = false; // Indicates if the player has chosen to escape
Random random = new Random();

Console.WriteLine("-- Menu --");
Console.WriteLine("1) Attack");
Console.WriteLine("2) Run");

Console.Write("-> ");
string choice = Console.ReadLine();

// Check if the player chose to attack or run
if (choice == "1" || choice == "attack")
{
    int playerAttack = random.Next(1, 11);
    int enemyAttack = random.Next(1, 11);

    enemyHealth -= playerAttack;
    playerHealth -= enemyAttack;

    Console.WriteLine($"You dealt {playerAttack} damage to the enemy!");
    Console.WriteLine($"Enemy has {enemyHealth} health left.\n");
    Console.WriteLine($"Enemy dealt {enemyAttack} damage to you!");
    Console.WriteLine($"You have {playerHealth} health remaining.\n");
}
else if (choice == "2" || choice == "run")
{
    Console.WriteLine("You chose to run away!");
    escaped = true;
}
else
{
    Console.WriteLine("Invalid option selected. Exiting battle.");
}

// Assessing battle outcome based on player's decision and health comparison
if (escaped)
{
    Console.WriteLine("You escaped safely. Better luck next time!");
}
else if (playerHealth > enemyHealth)
{
    Console.WriteLine("You are winning the battle!");
}
else if (enemyHealth > playerHealth)
{
    Console.WriteLine("Be careful, the enemy is stronger right now!");
}
else
{
    Console.WriteLine("The battle is evenly matched!");
}


Console.WriteLine("\nPress enter to continue...");
Console.ReadLine();


Console.WriteLine("--- Demo 2 - Lottery Lite ---");
// This is a tough game to win. Feel free to tweak the number range for testing.
int winningNumber = random.Next(0, 100); // Generate a random number between 0 and 99

// Extract individual digits using integer divsion
int winningDigitOne = winningNumber / 10; // Get the first digit (tens place)
int winningDigitTwo = winningNumber % 10; // Get the second digit (ones place)

Console.Write("Enter your lottery number (0 - 99): ");
int entryNumber = Convert.ToInt32(Console.ReadLine());

// Extract individual digits from the user's entry
int entryDigitOne = entryNumber / 10; // Get the first digit of the user's entry
int entryDigitTwo = entryNumber % 10; // Get the second digit of the user's entry

Console.WriteLine($"\nAnd the winning number is.... {winningNumber}!");

// Check for an exact match -> $10,000
// Check if the digits match out of order -> $3,000
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
--- Demo 1 - One Round Battle ---
-- Menu --
1) Attack
2) Run
-> 1
You dealt 9 damage to the enemy!
Enemy has 1 health left.

Enemy dealt 8 damage to you!
You have 2 health remaining.

You are winning the battle!

Press enter to continue...

--- Demo 2 - Lottery Lite ---
Enter your lottery number (0 - 99): 24

And the winning number is.... 30!
No match. Better luck next time!
```

---

### Tips, Tricks, and Reflection

**Be explicit with boolean expressions**

When using the same variable on both sides of an expression, it may be tempting to write your condition like this:

```cs
choice == 0 || 1
```

This syntax is incorrect because it can lead to logic errors. The correct way is to be explicit when writing your expressions, like this:

```cs
choice == 0 || choice == 1
```

In the incorrect example, 1 is treated as a constant, which will always evaluate to `true`. This can cause unexpected behavior in your code. By being explicit and stating `choice == 0 || choice == 1`, you ensure that both conditions are correctly evaluated.

**Parenthesis for Clarity**

Use parentheses to make complex logical expressions clearer and to ensure the correct order of evaluation.

```cs
if ((age >= 18 && hasID) || isAccompaniedByParent)
{
    // Code ommitted
}
```