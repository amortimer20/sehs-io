---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 4.2 Method Parameters
---

[← Back](/c-sharp-fundamentals/)

## Activity 4.2 Method Parameters

---

### Introduction

Methods become much more powerful when we can pass specific information to them, allowing them to behave differently depending on the input. This is done by using parameters. A **parameter** is a variable that is part of a method’s signature and is used to accept values passed into the method. These values allow a method to operate dynamically based on the data it receives.

When we call a method with parameters, we supply values known as arguments, which are then assigned to the parameter variables. In C#, the terms parameter (the variable in the method definition) and argument (the value passed when calling the method) are often used interchangeably, though they refer to distinct parts of the process.

In the example below, the method `CubeNumber()` has a single parameter, double number. This parameter is a variable that exists only within the scope of CubeNumber—meaning that number can only be used inside `CubeNumber()` and will no longer exist once the method finishes executing.

**Example: Single Parameter**
```cs
double CubeNumber(double number)
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

In this example, `CubeNumber()` is called with the argument `20`, which is assigned to the `number` parameter. The method then returns the cube of `number`.

#### Multiple Parameters

You can specify multiple parameters in a method definition to provide more data for the method to work with. The **order of arguments matters** when you call a method with multiple parameters—the first argument matches the first parameter, the second argument matches the second parameter, and so on.

In the example below, the Power method has two parameters: baseNumber and exponent. When Power is called, the first argument (10) is assigned to baseNumber, and the second argument (3) is assigned to exponent.

**Example: Multiple Parameters**

```cs
double Power(double baseNumber, double exponent)
{
    double product = baseNumber;

    for (int i = 1; i < exponent; i++)
    {
        product *= baseNumber;
    }

    return product;
}

Console.WriteLine("10^3 equals " + Power(10, 3));
```
```txt
10^3 equals 1000
```

#### Method Declaration Graphic

![Function Declaration Graphic](/courses/c-sharp-fundamentals/function-syntax.png)

#### Parameters with Reference Types

Recall that arrays and lists are both reference types. This means that when you pass an array or a list to a method, you’re not passing a copy of the data. Instead, you’re passing a reference to the original array or list. Any changes made to the array or list within the method will affect the original object outside the method as well.

Consider this example, where a method modifies elements of an array passed as a parameter:

**Example: Modifying an Array Parameter**

```cs
void DoubleValues(int[] numbers)
{
    for (int i = 0; i < numbers.Length; i++)
    {
        numbers[i] *= 2;
    }
}

int[] myNumbers = [ 1, 2, 3 ];
DoubleValues(myNumbers);

foreach (int n in myNumbers)
{
    Console.Write(n + " ");
}
```
```txt
2 4 6
```

In this example, `DoubleValues` receives a reference to `myNumbers`, so the method modifies the original array. After calling `DoubleValues`, the elements in `myNumbers` are doubled.

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
bool IsEven(int number)
{
    return number % 2 == 0;
}

// Check if an integer is odd
// Parameters: number - number to be evaluated
// Returns: true if odd, otherwise false
bool IsOdd(int number)
{
    return number % 2 == 1;
}

// Roll a die
// Parameters: numberOfSides - number of sides of the die
// Returns: number rolled as integer
int RollDie(int numberOfSides)
{
    Random random = new();
    return random.Next(1, numberOfSides + 1);
}

// Calculate wattage
// Parameters: voltage and amperage values
// Returns: watt value
double GetWattage(double volts, double amps)
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

**Key Points to Remember**

- **Parameters vs. Arguments**: Parameters are the variables listed in the method signature, while arguments are the actual values passed when calling the method.
- **Scope of Parameters**: Parameters exist only within their method and cannot be accessed outside of it.
- **Order of Arguments**: When a method has multiple parameters, ensure that arguments are passed in the correct order to avoid unexpected behavior.
- **Intentional Modification**: Be careful when passing arrays and lists to methods, as any modification will affect the original collection outside the method.