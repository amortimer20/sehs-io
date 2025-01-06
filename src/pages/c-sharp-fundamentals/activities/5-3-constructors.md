---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 5.3 Constructors
---

[← Back](/c-sharp-fundamentals/)

## Activity 5.3 Constructors

---

### Introduction

When implementing your classes for a project, you will likely want specific ways to quickly create objects from that class. So far, we’ve created objects with default, blank data. However, constructors give you control over how objects are initialized.

A **constructor** is a special method defined in a class that is responsible for setting up, or constructing, an object. You’ve used constructors in previous examples when creating objects using the `new` keyword.

**Example**

```cs
public class Movie
{
    public string Title;
    public string Director;

    // Default constructor
    public Movie()
    {
        Title = "";
        Director = "";
    }

    // Parameterized constructor
    public Movie(string title, string director)
    {
        Title = title;
        Director = director;
    }

    public void GetDetails()
    {
        // Code ommitted
    }
}
```
```cs
Movie movie1 = new Movie();
Movie movie2 = new Movie("ET", "Steven Spielberg");
```

First, you'll notice a constructor looks a lot like a method definition. However, there are two distinctions:

1. A constructor's name must match the class name.
2. A constructor does not specify a return type, not even void.

If you do not explicitly define a constructor, a special default constructor is provided by the compiler. This default constructor:

- Has no arguments.
- Does not initialize any data fields.

However, once you define any constructor, the default constructor is no longer automatically available. To retain it, you must define it explicitly, as shown in the example.

You may be confused with the second constructor, because the parameters have the same name as the fields. Don't think too
much into this. The parameter value is simply copied to the field like any other assignment statement. If it helps, you can use the `this` keyword to explicitly refer to the field.

```cs
public Movie(string title, string director)
{
    this.Title = title;
    this.Director = director;
}
```

**Constructor Overloading**

Notice that the constructors have the same name as the class. In C#, methods are allowed to have the same name as long as they differ in the number or type of parameters. This is known as **constructor overloading**. Constructor overloading allows you to provide multiple ways to initialize objects, offering flexibility for different scenarios. This concept can also be applied to regular methods, which we will explore in a later activity.

#### Class Diagram with Constructors

<div class="text-center">
    <img src="/courses/c-sharp-fundamentals/movie-class-diagram.png" alt="Class Diagram Template">
</div>

#### Introduction Summary

- Constructors are special methods used to initialize objects.
- The compiler provides an implicit default constructor if no constructor is defined.
- You can define multiple constructors to offer flexibility in object initialization.

#### Skills to Practice

- Defining constructors with parameters
- Instantiating objects using constructors

---

### Instructions

#### Setup

1. Create a new C# console application. Name the project **5.3 Constructors**.
2. Click Create.
3. In your project, create a new file titled Circle.cs

#### Code

**Circle.cs**
```cs
public class Circle
{
    public double Radius;


    // Default, no-argument constructor
    public Circle()
    {
        Radius = 1;
    }

    // Constructor with one required parameter
    public Circle(double radius)
    {
        Radius = radius; // Field = parameter
    }

    public double GetCircumference()
    {
        double circumference = 2 * Math.PI * Radius; // 2πr
        return Math.Round(circumference, 3); // Round to three decimal places
    }

    public double GetArea()
    {
        double area = Math.PI * Radius * Radius; // πr^2
        return Math.Round(area, 3);
    }

    public void GetDetails()
    {
        Console.WriteLine($"Radius: {Radius}");
        Console.WriteLine($"Circumference: {GetCircumference()}");
        Console.WriteLine($"Area: {GetArea()}");
    }
}
```

**Program.cs**
```cs
Console.WriteLine("--- Circle Demo ---");
Console.WriteLine("Initializing circle 1 with a default radius of 1.");
Console.Write("Enter the radius for circle 2: ");
double r = Convert.ToDouble(Console.ReadLine());

Circle c1 = new Circle(); // Default no-argument constructor
Circle c2 = new Circle(r);

string option = "";

while (option != "3")
{
    Console.WriteLine("\n-Menu-");
    Console.WriteLine("1) Display circle details");
    Console.WriteLine("2) Edit circles");
    Console.WriteLine("3) Exit");
    Console.Write("-> ");
    option = Console.ReadLine();

    if (option == "1")
    {
        Console.WriteLine("Circle 1:");
        c1.GetDetails();
        Console.WriteLine("\nCircle 2:");
        c2.GetDetails();
    }
    else if (option == "2")
    {
        Console.Write("Enter new radius for circle 1: ");
        c1.Radius = Convert.ToDouble(Console.ReadLine());

        Console.Write("Enter new radius for circle 2: ");
        c1.Radius = Convert.ToDouble(Console.ReadLine());
    }
    else if (option == "3")
    {
        Console.WriteLine("Exiting application.");
    }
    else
    {
        Console.WriteLine("Invalid option.");
    }
}
```

#### Debug

```txt
--- Circle Demo ---
Initializing circle 1 with a default radius of 1.
Enter the radius for circle 2: 5

-Menu-
1) Display circle details
2) Edit circles
3) Exit
-> 1
Circle 1:
Radius: 1
Circumference: 6.283
Area: 3.142

Circle 2:
Radius: 5
Circumference: 31.416
Area: 78.54

-Menu-
1) Display circle details
2) Edit circles
3) Exit
-> 2
Enter new radius for circle 1: 7
Enter new radius for circle 2: 8

-Menu-
1) Display circle details
2) Edit circles
3) Exit
-> 1
Circle 1:
Radius: 8
Circumference: 50.265
Area: 201.062

Circle 2:
Radius: 5
Circumference: 31.416
Area: 78.54

-Menu-
1) Display circle details
2) Edit circles
3) Exit
-> 3
Exiting application.
```

---

### Tips, Tricks, and Reflection

- Proper use of constructors makes your code more robust, flexible, and easier to maintain by ensuring that objects are initialized correctly. In future projects, you can use constructors to simplify object creation, improve code readability, and enforce consistency.
- Choose reasonable default values for fields in your default constructor to make the object usable right after creation.
- Use multiple constructors to handle various initialization needs. This is especially helpful when you want to provide default values for some fields while allowing other fields to be customized.