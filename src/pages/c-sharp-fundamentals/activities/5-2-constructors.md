---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 5.2 Constructors
---

[← Back](/c-sharp-fundamentals/)

## Activity 5.2 Constructors

---

### Introduction

When implementing your classes for a project, you will likely want specific ways you can quickly create objects from that class. So far, we’ve created objects with some default, blank data. There is a nice way to set up an object that gives us control of the process. These are called constructors, sometimes referred to as initializers. A constuctor is a special method defined in a class definition that is responsible for setting up, or constructing an object. You’ve used constructors in previous demos, specifically when you created an object using the `new` keyword.

**Example**

```cs
public class Movie
{
    public string Title;
    public string Director;

    public Movie()
    {
        Title = "";
        Director = "";
    }

    public Movie(string title, string director)
    {
        Title = title;
        Director = director;
    }
}
```
```cs
Movie movie1 = new Movie();
Movie movie2 = new Movie("ET", "Steven Spielberg");
```

First, you'll notice a constructor looks a lot like a method definition. However, there are two distinctions:

- A constructor does not specify a return type.
- A constructor is the same name as the class.

If a class does not have a constructor defined, a special **default constructor** exists. Default constructors have no
arguments, and don't initialize any data fields. Once you define a constructor, the default constructor will no longer exist,
unless you explicitly define it, as in the example above.

To initialize a movie object, you can use either of the two constructors. The first movie object uses the default constructor,
and the second movie is using the constructor with two parameters.

You may be confused with the second constructor, because the parameters have the same name as the fields. Don't thing too
much into this. Just know that the parameter value is copied to the field like any other assignment statement.

##### Introduction Summary

- Constructors are used to instantiate an object
- If a class does not have a constructor defined, an implicit, default constructor exists. It will not
initialize any data fields.
- You can define multiple constructors to have different options for initializing an object.

#### Skills to Practice

- Defining constructors with parameters
- Instantiating objects using constructors

---

### Instructions

#### Setup

1. Create a new C# console application. Name the project **5.2 Constructors**.
2. Click Create.
3. In your project, create a new file titled Circle.cs

#### Code

**Circle.cs**
```cs
public class Circle
{
    // Default, no-argument constructor
    public Circle()
    {
        Radius = 0;
    }

    // Constructor with one required parameter
    public Circle(double radius)
    {
        // It's common to seefields and parameters with identical names.
        // Field = parameter
        Radius = radius;
    }

    public double Radius;

    public double GetCircumference()
    {
        return 2 * Math.PI * Radius; // 2πr
    }

    public double GetArea()
    {
        return Math.PI * Radius * Radius; // πr^2
    }
}
```

**Program.cs  (or main.cs in Replit)**
```cs
Console.WriteLine("Initializing a cicle with radius of 0.");
Console.Write("Enter radius of the second circle: ");
double r = Convert.ToDouble(Console.ReadLine());

Circle c1 = new Circle(); // Default constructor
Circle c2 = new Circle(r);

while (true)
{
    Console.WriteLine("\n-- Menu --");
    Console.WriteLine("1) Display circle stats");
    Console.WriteLine("2) Edit circles");
    Console.WriteLine("3) Exit");
    Console.Write("-> ");
    string option = Console.ReadLine();

    if (option == "1")
    {
        // Use concatenation when the string is too long for
        // one line of code. It still displays a single line.
        Console.WriteLine($"Circle 1: Radius: {c1.Radius}, " +
            $"Circumference: {c1.GetCircumference()}, " +
            $"Area: {c1.GetArea()}");
        Console.WriteLine($"Circle 2: Radius: {c2.Radius}, " +
            $"Circumference: {c2.GetCircumference()}, " +
            $"Area: {c2.GetArea()}");
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
        break;
    }
}
```

#### Debug

```txt
Initializing a cicle with radius of 0.
Enter radius of the second circle: 2

-- Menu --
1) Display circle stats
2) Edit circles
3) Exit
-> 1
Circle 1: Radius: 0, Circumference: 0, Area: 0
Circle 2: Radius: 2, Circumference: 12.566370614359172, Area: 12.566370614359172

-- Menu --
1) Display circle stats
2) Edit circles
3) Exit
-> 2
Enter new radius for circle 1: 4.1
Enter new radius for circle 2: 2.2

-- Menu --
1) Display circle stats
2) Edit circles
3) Exit
-> 1
Circle 1: Radius: 2.2, Circumference: 13.823007675795091, Area: 15.205308443374602
Circle 2: Radius: 2, Circumference: 12.566370614359172, Area: 12.566370614359172

-- Menu --
1) Display circle stats
2) Edit circles
3) Exit
-> 3
```

---

### Tips, Tricks, and Reflection

- There's some repetion in this code. I wonder if we can store the objects in a collection and then iterate...
- Consider using rounding methods to make the stats more concise.
