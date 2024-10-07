---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 2.6 While Loops
---

[← Back](/c-sharp-fundamentals/)

## Activity 2.6 While Loops

---

### Introduction

Ever faced a situation where a piece of code in your app needs to run over and over again? Think back to those battle demos we did earlier—they only ran for one turn. But what if we wanted them to keep going until someone wins? In programming, we use **loops** to make instructions repeat.

Imagine these scenarios:

- Playing each song in a playlist until you reach the end.
- Adding up the prices of items in your cart, one by one, to get the total.
- Printing out every student's name in a class roster.

One type of loop in C# is called a **while loop**. This loop will keep running a set of instructions while a certain condition is true.

A while loop is similar in structure to an if statement. It has a keyword, a condition, and a block of code. The key difference is that a while loop repeats as long as the condition remains true. Therefore, you will need a statement inside the loop that will eventually make the condition evaluate false, or else the loop may run forever!

**Example**

```cs
int number = 10;

// Keep executing loop while number is greater than 0
// Or, try this: while (number >= 1)
while (number > 0)
{
    Console.WriteLine($"Number is {number}");
    number--;
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

**Example Video**

<video src="/courses/c-sharp-fundamentals/while-loop-animation.mp4" controls style="width: 100%; max-width: 640px;"></video>

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
    bottles--; // # Subtract one from bottles to 'take one down'
    Console.WriteLine($"{bottles} bottles of {soda} on the wall!\n");

    // Console.ReadLine(); // Uncomment to pause after every iteration.
}

Console.WriteLine("\n");

// ATM Lite
string input = "";
double balance = 100.55;

Console.WriteLine("-- ATM --");

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
        Console.WriteLine("Thank you for using the ATM");
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



-- ATM --

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
Thank you for using the ATM
```

---

### Tips, Tricks, and Reflection

- Notice that you can specify invalid numbers for the deposit and withdraw values. For example, you shouldn't be able to deposit an amount less than or equal to $0. You also shouldn't be allowed to withdraw more money than your balance. How can we use if statements to validate the amounts the user specifies?
- Did you mess up a line of code and accidentally create an infinite loop? If so, how did you fix it? If not, try purposely breaking your code to create an infinite loop.
