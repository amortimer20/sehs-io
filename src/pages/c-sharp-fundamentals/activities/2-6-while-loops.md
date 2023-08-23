---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 2.6 While Loops
---

[← Back](/c-sharp-fundamentals/)

## Activity 2.6 While Loops

---

### Introduction

It is not uncommon for a program to run a set of instructions repeatedly. Programming languages all provide some construct for repeatedly executing a set of statements. These are known as **loops**.

There are a few different ways to repeat code. For C# developers, the first construct to learn is known as the while loop.

**While loops** look similar to if statements in that they have a keyword, a condition, and an associated code block. However, a while loop while repeatedly execute as long as the specified condition is `true`. That means somewhere in the loop, there needs to be a statement that will change the condition to evaluate to `false`.

**Example**

```cs
int number = 10;

// Keep executing loop while number is greater than 0
while (number > 0)
{
    Console.WriteLine($"Number is {number}");
    number = number - 1;
}
```

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

#### Infinite Loops

One major mistake when writing loops is creating a loop then never terminates. Loops that never stop executing are called **infinite loops**. Remember this, you always want to eventually terminate a loop, or else your program will crash.

**Example**

```cs
int number = 10;

// number is never reduced, therefore it is always greater than 0.
while (number > 0)
{
    Console.WriteLine($"Number is {number}");
}
```

```txt
Number is 10
Number is 10
Number is 10
...
```

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
// 99 Bottles
Console.Write("Enter your favorite soda: ");
string soda = Console.ReadLine();
int bottles = 99;

while (bottles > 0)
{
    Console.WriteLine($"{bottles} bottles of {soda} on the wall,");
    Console.WriteLine($"{bottles} bottles of {soda}!");
    Console.WriteLine("You take one down, pass it around,");
    bottles = bottles - 1; // # Subtract one from bottles variables
    Console.WriteLine($"{bottles} bottles of {soda} on the wall!\n");

    // Console.ReadLine(); // Uncomment to pause after every iteration.
}

Console.WriteLine("\n");

// ATM Lite
bool usingAtm = true;
double balance = 100.55;

Console.WriteLine("-- ATM Lite --");

while (usingAtm)
{
    Console.WriteLine("\n- Menu -");
    Console.WriteLine("1) Check Balance");
    Console.WriteLine("2) Deposit Money");
    Console.WriteLine("3) Withdraw Money");
    Console.WriteLine("4) Exit");

    Console.Write("-> ");
    string input = Console.ReadLine();

    if (input == "1")
    {
        Console.WriteLine($"Your balance is: ${balance}");
    }
    else if (input == "2")
    {
        Console.Write("How much would you like to deposit? $");
        input = Console.ReadLine();
        balance = balance + Convert.ToDouble(input);
        Console.WriteLine($"Your new balance is ${balance}");
    }
    else if (input == "3")
    {
        Console.Write("How much would you like to withdraw? $");
        input = Console.ReadLine();
        balance = balance - Convert.ToDouble(input);
        Console.WriteLine($"Your new balance is ${balance}");
    }
    else if (input == "4")
    {
        Console.WriteLine("Thank you for using ATM Lite");
        usingAtm = false;
    }
    else
    {
        Console.WriteLine("Incorrect menu option selected. Try again.");
    }
}
```

#### Debug

```txt
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



-- ATM Lite --

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
How much would you like to deposit? $25
Your new balance is $125.55

- Menu -
1) Check Balance
2) Deposit Money
3) Withdraw Money
4) Exit
-> 4
Thank you for using ATM Lite
```

---

### Tips, Tricks, and Reflection

- Did you mess up a line of code and accidentally create an infinite loop? If so, how did you fix it? If not, try purposely breaking your code to create an infinite loop.
