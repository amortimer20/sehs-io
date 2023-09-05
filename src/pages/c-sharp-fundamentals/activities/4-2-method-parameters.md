---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 4.2 Method Parameters
---

[← Back](/c-sharp-fundamentals/)

## Activity 4.2 Method Parameters

---

### Introduction

Methods become much more powerful when we can send different pieces of information them to affect their behavior. The ability to pass information to a method is by using **parameters**. A parameter is simply a variable declared in a method signature. When we call a method with parameters, we can pass information that gets assigned to those parameter variables. The result is a method that can behave dynamically based on inputs passed to it.

In the example below, one parameter is declared, `double number`. A parameter is just a variable defined in a given context. It is scoped to its method, meaning `number` is only accessible inside of `CubeNumber()`. Once `CubeNumber()` is finished execution, the value of `number` is deleted.

The number 20 is passed to `number`. Data passed to a parameter is called an **argument**. Programmers regularly use the terms **parameter** and **argument** interchangably. Although they're closely related, they are two distinct things.

**Example**
```cs
static double CubeNumber(double number)
{
    return number * number * number;
}

// Pass the argument 20 to the parameter number
double answer = CubeNumber(20);
Console.WriteLine(answer);
```
```txt
8000
```

You can specify as many parameters as you need for a given method definition. Keep in mind, **the order of arguments matters**. In the example below, `baseNumber` is assigned 10, and exponent is assigned 3.

**Multiple Parameters**
```cs
static double Power(double baseNumber, double exponent)
{
    double product = baseNumber;

    for (int i = 1; i < exponent; i++)
    {
        product = product * baseNumber;
    }

    return product;
}

Console.WriteLine(Power(10, 3));
```
```txt
1000
```

**Example Video**

<video src="/courses/c-sharp-fundamentals/method-parameters-animation.mp4" controls style="width: 100%; max-width: 640px;"></video>

#### Skills to Practice

- Defining methods with parameters
- Invoking user defined methods with arguments

---

### Instructions

#### Setup

1. Create a new C# console application. Name the project **4.2 Method Parameters**.
2. Click Create.

#### Code

```cs
// Check if an integer is even
// Parameters: number - number to be evaluated
// Returns: true if even, otherwise false
static bool IsEven(int number)
{
    return number % 2 == 0;
}

// Check if an integer is odd
// Parameters: number - number to be evaluated
// Returns: true if odd, otherwise false
static bool IsOdd(int number)
{
    return number % 2 == 1;
}

// Roll a die
// Parameters: numberOfSides - number of sides of the die
// Returns: number rolled as integer
static int RollDie(int numberOfSides)
{
    Random random = new();
    return random.Next(1, numberOfSides + 1);
}

// Calculate wattage
// Parameters: voltage and amperage values
// Returns: watt value
static double GetWattage(double volts, double amps)
{
    return volts * amps;
}

Console.WriteLine("1) IsEven()");
Console.WriteLine("2) IsOdd()");
Console.WriteLine("3) RollDie()");
Console.WriteLine("4) GetWattage()");

Console.Write("Choose method (1-4): ");
string input = Console.ReadLine();

if (input == "1")
{
    Console.Write("Enter integer: ");
    int n = Convert.ToInt32(Console.ReadLine());
    bool result = IsEven(n);
    Console.WriteLine($"Is {n} even? {result}");
}
else if (input == "2")
{
    Console.Write("Enter integer: ");
    int n = Convert.ToInt32(Console.ReadLine());
    bool result = IsOdd(n);
    Console.WriteLine($"Is {n} odd? {result}");
}
else if (input == "3")
{
    Console.Write("How many sides is the die? ");
    int sides = Convert.ToInt32(Console.ReadLine());
    int roll = RollDie(sides);
    Console.WriteLine($"You rolled a {roll}.");
}
else if (input == "4")
{
    Console.Write("Enter voltage: ");
    double v = Convert.ToInt32(Console.ReadLine());
    Console.Write("Enter amperage: ");
    double a = Convert.ToInt32(Console.ReadLine());
    double watts = GetWattage(v, a);
    Console.WriteLine($"{v}V x {a}A = {watts}W");
}
else
{
    Console.WriteLine("Invalid option selected.");
}
```

#### Debug

```txt
1) IsEven()
2) IsOdd()
3) RollDie()
4) GetWattage()
Choose method (1-4): 4
Enter voltage: 3.3
Enter amperage: 2
3.3V x 2A = 6.6W
```

---

### Tips, Tricks, and Reflection

- Remember, lists and arrays are reference types. If you specify a list or array parameter, it's not receiving a copy of the data strucure, but a reference to it. Any modifications to the collection affects the original list/array!
