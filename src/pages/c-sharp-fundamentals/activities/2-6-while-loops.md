---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 2.6 While Loops
---

[← Back](/c-sharp-fundamentals/)

## Activity 2.6 While Loops

---

### Introduction

Ever faced a situation where a piece of code in your app needs to run over and over again? Think back to those battle demos we did—they only ran for one turn. But what if we wanted them to keep going until someone wins? In programming, **loops** allow us to repeat instructions efficiently.

Imagine these scenarios:

- Playing each song in a playlist until you reach the end.
- Adding up the prices of items in your cart, one by one, to get the total.
- Printing out every student's name in a class roster.

In each case, the code follows a pattern: start a task, repeat it as long as a certain condition is true, and then stop.

#### What is a While Loop?

One type of loop in C# is the **while loop**. This loop will keep running a set of instructions while a specific condition is true. Once the condition is false, the loop stops.

A while loop has three main parts:

- **The Keyword**: The loop starts with the keyword while.
- **The Condition**: The condition in parentheses determines how long the loop will run.
- **The Loop Block**: This block contains the code to repeat each time through the loop.

**Example: Counting Down**

Let’s look at an example where we count down from 10 to 1:

```cs
int number = 10;

// The loop will run as long as number is greater than 0
while (number > 0)
{
    Console.WriteLine($"Number is {number}");
    number--; // Reduces number by 1 each time
}
```

**Output**

```txt
Number is 10
Number is 9
Number is 8
Number is 7
Number is 6
Number is 5
Number is 4
Number is 3
Number is 2
Number is 1
```

In this example:

- The loop checks if `number > 0`.
- If `true`, it prints number and decreases number by 1.
- Once number reaches 0, the condition is `false`, and the loop stops.

**Example Video**

<video src="/courses/c-sharp-fundamentals/while-loop-animation.mp4" controls style="width: 100%; max-width: 640px;"></video>

#### While Loop vs. If Statement

A while loop is similar to an if statement in structure, with one big difference: it repeats as long as its condition remains true. This means that we need a statement inside the loop that eventually makes the condition false; otherwise, the loop will continue forever! This kind of loop is called an infinite loop (more on that soon).

#### Avoiding Infinite Loops

One major mistake when writing loops is creating a loop that never stops. Loops that run indefinitely are called infinite loops and can cause your program to freeze or crash.

Here’s an example of an infinite loop:

```cs
int number = 10;

// The condition will always be true since number is never decreased
while (number > 0)
{
    Console.WriteLine($"Number is {number}");
}
```

In this case, number is never changed, so `number > 0` is always `true`, and the loop never stops. To fix it, remember to update the variable in your loop so that the condition eventually becomes `false`.

#### Using Sentinel Values in While Loops

Sometimes, we want a loop to keep running until a specific signal is given to stop, instead of counting down from a set number. A sentinel value is a special value that signals the end of input or the stopping point of a loop. Sentinel values are often used when we don’t know in advance how many times a loop should run.

Imagine an example where users can keep entering scores until they input -1 to indicate they’re done.

```cs
int score;
int total = 0;

Console.WriteLine("Enter a score (-1 to finish): ");
score = int.Parse(Console.ReadLine());

while (score != -1)
{
    total += score; // Adds score to total
    Console.WriteLine("Enter a score (-1 to finish): ");
    score = int.Parse(Console.ReadLine()); // Update score
}

Console.WriteLine($"Total score is {total}");
```

In this example, -1 is the sentinel value that stops the loop. Sentinel values are a flexible way to end a loop when exact counts aren’t known beforehand.

#### Skills to Practice

- Writing while loops
- Using while loops to implement menu systems

---

### Instructions

#### Setup

1. Create a new C# console application. Name the project **2.6 While Loops**.
2. Click Create.

#### Code

```cs
Console.WriteLine("--- Demo 1 - 99 Bottles ---\n");
Console.Write("Enter your favorite soda: ");
string soda = Console.ReadLine();
int bottles = 99;

while (bottles > 0)
{
    Console.WriteLine($"{bottles} bottles of {soda} on the wall,");
    Console.WriteLine($"{bottles} bottles of {soda}!");
    Console.WriteLine("You take one down, pass it around,");
    bottles--; // Subtract one from bottles to 'take one down'
    Console.WriteLine($"{bottles} bottles of {soda} on the wall!\n");

    // Console.ReadLine(); // Uncomment to pause after every iteration.
}


Console.WriteLine("\nPress enter to continue...");
Console.ReadLine();


string input = "";
double balance = 100.55;
Console.WriteLine("-- Demo 2 - ATM Version 2 --");

// Input of "4" signals the user is finished.
while (input != "4")
{
    Console.WriteLine("\n- Menu -");
    Console.WriteLine("1) Check Balance");
    Console.WriteLine("2) Deposit Money");
    Console.WriteLine("3) Withdraw Money");
    Console.WriteLine("4) Exit");
    Console.Write("-> ");
    input = Console.ReadLine();

    if (input == "1")
    {
        Console.WriteLine($"Your balance is: ${balance}");
    }
    else if (input == "2")
    {
        Console.Write("How much would you like to deposit? $");
        input = Console.ReadLine();
        balance += Convert.ToDouble(input); // Using += for clarity
        Console.WriteLine($"Your new balance is ${balance}");
    }
    else if (input == "3")
    {
        Console.Write("How much would you like to withdraw? $");
        input = Console.ReadLine();
        balance -= Convert.ToDouble(input); // Using -= for clarity
        Console.WriteLine($"Your new balance is ${balance}");
    }
    else if (input == "4")
    {
        Console.WriteLine("Thank you for using the ATM");
    }
    else
    {
        Console.WriteLine("Incorrect menu option selected. Try again.");
    }
}
```

#### Debug

```txt
Console.WriteLine("--- Demo 1 - 99 Bottles ---");

Enter your favorite soda: Coke
99 bottles of Coke on the wall,
99 bottles of Coke!
You take one down, pass it around,
98 bottles of Coke on the wall!

...

1 bottles of Coke on the wall,
1 bottles of Coke!
You take one down, pass it around,
0 bottles of Coke on the wall!


Press enter to continue...

-- Demo 2 - ATM Version 2 --

- Menu -
1) Check Balance
2) Deposit Money
3) Withdraw Money
4) Exit
-> 1
Your balance is: $100.55

- Menu -
1) Check Balance
2) Deposit Money
3) Withdraw Money
4) Exit
-> 2
How much would you like to deposit? $45
Your new balance is $145.55

- Menu -
1) Check Balance
2) Deposit Money
3) Withdraw Money
4) Exit
-> 3
How much would you like to withdraw? $10
Your new balance is $135.55

- Menu -
1) Check Balance
2) Deposit Money
3) Withdraw Money
4) Exit
-> 4
Thank you for using the ATM
```

---

### Tips, Tricks, and Reflection

- **Validation Practice**: Notice that you can specify invalid numbers for the deposit and withdraw values. For example, you shouldn't be able to deposit an amount less than or equal to $0, and you also shouldn't be allowed to withdraw more money than your balance. How can we use if statements to validate these amounts and prevent such errors? Try adding these checks to your program!

- **Tackling Infinite Loops**: Have you ever messed up a line of code and accidentally created an infinite loop? If so, how did you fix it? Share your experience with the class. If you haven't encountered this yet, try purposely breaking your code to create an infinite loop—then practice debugging it. This exercise can be a fun way to get comfortable with identifying and fixing infinite loops.
