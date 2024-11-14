---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 4.1 Defining Methods
---

[← Back](/c-sharp-fundamentals/)

## Activity 4.1 Defining Methods

---

### Introduction

Methods (also known as functions, subroutines, sub-programs, or procedures) are a fundamental construct in programming. They allow us to create reusable code blocks that can perform specific tasks. Think about `Console.WriteLine()`, which you've used in every application so far. You may not know exactly how it works behind the scenes or how many lines of code it requires to display text in the console. But that’s okay—methods are designed to let us use functionality without having to know all the details. We can reuse methods not only within a single application but across different projects, making code both modular and efficient. Reusable code is a core part of program design, and this principle is central to **procedural programming**.

**Key Benefits of Implementing Methods**
- **Reusability**: Write code once and use it multiple times.
- **Modularity**: Break down complex problems into smaller, manageable parts.
- **Readability**: Make code more organized and easier to understand.
- **Debugging**: Simplify the process of finding and fixing errors.
- **Efficiency**: Avoid repeated code, making programs more efficient.

#### Defining a Method

To create a user-defined method—one that is custom-built for your application—you need a **method definition**. This consists of two main parts: the **method signature** and the **method body**.

- The **signature** defines three key pieces of information: the method’s identifier (its name), the return type, and any required parameters.
- The **method body** is the code block that follows the signature, containing the actual instructions the method will execute.

In the example below, the signature is `void Greeting()`, and the method body is the code block containing two statements.

**Example Method Definition**
```cs
void Greeting()
{
    Console.WriteLine("Hey buddy!");
    Console.WriteLine("How are you?");
}
```

You may expect this code to display the two messages in the console, but if you try to execute it, nothing will happen. This brings us to the next important part of methods: calling them.

#### Calling a Method

Defining a method doesn’t automatically execute it. Instead, you, as the programmer, decide when and where a method should run. You can use a defined method anywhere in your program by calling or invoking it by name, followed by parentheses.

```cs
// Some code
Greeting();
// Some more code
Greeting();
// Even more code
```

By calling `Greeting()` in multiple places, you avoid duplicating code and make your program easier to update. If you need to make a change, you only have to update the method body in one place. This is an example of code reuse and maintainability.

**Example Video**

<video src="/courses/c-sharp-fundamentals/method-animation.mp4" controls style="width: 100%; max-width: 640px;"></video>

#### Return Types

In a method, the return type specifies what kind of data the method will give back once it finishes executing. For example, the return type of `Console.ReadLine()` is `string`, meaning it provides a string value after the user enters input. he signature for `Console.ReadLine()` looks like this: `string Console.ReadLine()`. 

Not every method needs to produce a value. When a method doesn’t return any information, its return type is defined as `void`.

```cs
string input = Console.ReadLine();
```

**Example Method with a Return Type**

```cs
int RandomNumber()
{
    Random random = new();
    return random.Next(1, 1000001);
}

int num1 = RandomNumber();
int num2 = RandomNumber();
```

The `RandomNumber()` method has a return type of `int`, as defined in the signature. This method must use the `return` keyword at some point in the method body, otherwise the program will fail to build. Once the method has reached a return statement, it immediately exits the method and returns the specified value back to where it was called. If there are statements immediately following a return statement, note that they will _never_ execute, since the return statement is the last statement to execute in a method definition.

#### Scope

In previous lessons, you learned that variables declared within certain code blocks are only accessible within those blocks. This concept is known as **scope**. Scope determines the context in which a variable can be used. Within methods, any variables declared in the method body are only accessible inside that method and are deleted from memory once the method finishes executing. These are called local variables. In contrast, variables accessible throughout a program have what’s known as **global** scope.

**Example**

```cs
int RandomNumber()
{
    // random is only accessible within this method
    Random random = new();
    return random.Next(1, 1000001);
}

void Greeting()
{
    Console.WriteLine("Hey buddy!");
    Console.WriteLine("How are you?");
    // This will cause a build error. random is local to the RandomNumber() method.
    int n = random.Next();
}
```

#### Skills to Practice

- Declaring and invoking user-defined methods

---

### Instructions

#### Setup

1. Create a new C# console application. Name the project **4.1 Method Basics**.
2. Click Create.

#### Code

```cs
// Method definition for Greeting
void GreetBasedOnTime()
{
    // Get current hour in UTC (0 to 23)
    int hour = DateTime.Now.Hour;

    if (hour < 12)
    {
        Console.WriteLine("Good morning!");
    }
    else if (hour < 18)
    {
        Console.WriteLine("Good afternoon!");
    }
    else
    {
        Console.WriteLine("Good evening!");
    }
}

int RandomNumber()
{
    Random random = new();
    Console.Write("Enter your minimum: ");
    int min = Convert.ToInt32(Console.ReadLine());
    Console.Write("Enter your maximum: ");
    int max = Convert.ToInt32(Console.ReadLine());
    return random.Next(min, max + 1);
}

void RandomCompliment()
{
    string[] compliments =
    [
        "You look great today!",
        "You're a fantastic coder!",
        "You have a brilliant mind!",
        "You're doing an amazing job!",
        "Keep up the excellent work!",
        "You're way better than Mr. Mortimer!"
    ];

    Random random = new();
    int index = random.Next(compliments.Length);
    Console.WriteLine(compliments[index]);
}

// Main program
GreetBasedOnTime();
RandomCompliment();

int n1 = RandomNumber();
int n2 = RandomNumber();
int n3 = RandomNumber();
Console.WriteLine($"Your random numbers are: {n1}, {n2}, and {n3}");
```

#### Debug

```txt
Good afternoon!
You're way better than Mr. Mortimer!
Enter your minimum: 1
Enter your maximum: 100
Enter your minimum: 5
Enter your maximum: 500
Enter your minimum: 1000
Enter your maximum: 10000
Your random numbers are: 67, 72, and 7540
```

---

### Tips, Tricks, and Reflection

- Unfortunately, the custom method we made for generating numbers works a little bit differently than the code we're using to generate a random compliment.
    - Luckily, in the next lesson, we will learn how to pass values to a method to get different behavior/output. That way, we can use that method and eliminate some semi-duplicate code.
- Learn more about methods from Microsoft's documentation <a href="https://learn.microsoft.com/en-us/dotnet/csharp/methods" target="_blank">here</a>.
