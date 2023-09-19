---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 4.1 Method Basics
---

[← Back](/c-sharp-fundamentals/)

## Activity 4.1 Method Basics

---

### Introduction

Methods (also known as functions, subroutines, sub-programs, or procedures) are an important construct in programming as they allow us to create reusable sets of code. Consider this: you use `Console.WriteLine()` in every application you've made thus far. But, do you actually know what it's doing behind the scenes, or how many lines of code it takes to perform the action of displaying text in a console? Probably not, but that's fine! Programmers can implement methods that can be reused not only throughout an application, but also across different projects. Creating reusable code is foundational to the idea of program design. We refer to structuring programs around reusable procedures as **procedural programming**.

##### Defining a Method

To create a user-defined method, which is just a method created by a programmer (i.e. _you_), we create what is called a **method definition**. Method definitions are composed of two parts, the **method signature** and the the **method body**. The signature defines three key pieces of information: the method **identifier**/name, the **return type**, and any necessary **parameters**. The method body is the code block that follows the signature. We will learn about parameters in the next lesson.

The signature for the example below is `void Greeting()`. The method body is the code block containing the two statements.

**Example Method Definition**
```cs
void Greeting()
{
    Console.WriteLine("Hey buddy!");
    Console.WriteLine("How are you?");
}
```

If you try to execute this program, you may notice nothing happens. You may be expecting this program to display the two messages in a console. What gives?

##### Calling a Method

Just because you implemented a method, it does not mean it will execute. It's up to you when to decide you need your method to execute. Here's what cool though, we can use a defined method wherever and whenever I want! To **call/invoke/use** a method, write it's name, including the parenthesis.

```cs
// Some code
Greeting();
// Some more code
Greeting();
// Even more code
```

you can imagine the code was copy and pasted. However, we now have reusable code. If I need to make changes, I only need to change the method body once. This is very helpful for maintainability.

**Example Video**

<video src="/courses/c-sharp-fundamentals/method-animation.mp4" controls style="width: 100%; max-width: 640px;"></video>

##### Return Types

Methods have the ability to return a value when it is finished executing. For example, the `Console.ReadLine()` method returns a string containing user input. Return values allow us to save useful information that the method has generated. The signature for `Console.ReadLine()` looks like this: `string Console.ReadLine()`. The signature tells you what the return type is, and in this case, the return type is `string`. It's up to you as the programmer to decide if it's necessary to store the value the method returns.

```cs
string input = Console.ReadLine();
```

If a method has no value to return, the signature will have a return type of `void`, as with the `Greeting()` method in the first example.

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

##### Scope

In Part 2, there were instances where declared variables were only accessible in a given section of code. This is known as **scope**. Scope defines the context in which a variable is able to be used. Regarding methods, any variables declared inside a method body are only accessible within that method. Their value is also deleted in memory whenever the method finishes execution. Variables defined in a method body are referred to as **local variables**, as they are only accessible in that section. A variable accessible anywhere is in what's known as **global** scope.

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

These programs are not written using best practices. However, we're just practicing defining and calling methods at this point.

```cs
void Genie()
{
    Console.Write("What is your first wish? ");
    Console.ReadLine();
    Console.Write("What is your second wish? ");
    Console.ReadLine();
    Console.Write("What is your third wish? ");
    Console.ReadLine();
    Console.WriteLine("...");
    Thread.Sleep(3000); // Pause program for 3000 milliseconds, or 1 second.
    Console.WriteLine("I'll get right on that.");
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
```

#### Debug

```txt
What is your first wish? Quit teaching
What is your second wish? Eat pie
What is your third wish? Upgrade my PC
...
I'll get right on that.
Enter your minimum: 1
Enter your maximum: 100
Enter your minimum: 1
Enter your maximum: 1000
Enter your minimum: 1
Enter your maximum: 10000
Your random numbers are: 58, 865, and 3392.
```

---

### Tips, Tricks, and Reflection

- Learn more about methods from Microsoft's documentation <a href="https://learn.microsoft.com/en-us/dotnet/csharp/methods" target="_blank">here</a>.
