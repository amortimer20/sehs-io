---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 5.5 Static Members
---

[← Back](/c-sharp-fundamentals/)

## Activity 5.5 Static Members

---

### Introduction

When designing your classes, you may across cases where you want data to be shared by all instances of that class. 
Likewise, you may also want to implement methods that can be called without the need to instantiate an object.
In these cases, we can mark appropriate members as **static**.


Static members are defined using the `static` keyword. They can include fields, methods, or even constructors. 
These members are accessed directly through the class name, rather than an instance of the class.

#### Familiar Static Members

Throughout this course, you've already encountered several static members. Here are a few examples:

- `Console.WriteLine()` and `Console.ReadLine()` - These belong to the `Console` class.
- `Convert.ToInt32()` and `Convert.ToDouble()` - These belong to the `Convert` class.
- `Math.PI` and `Math.Round()` - These belong to the `Math` class.

#### Declaring and Using Static Members

A static field is shared by all instances of the class. Changes made to a static field affect all instances of the class. These are also known as **class variables**.

**Dog.cs**
```cs
public class Dog
{
    public string Name;
    public string Breed;

    public static int NumberOfDogs;

    public Dog(string name, string breed)
    {
        Name = name;
        Breed = breed;
        NumberOfDogs++; // Increment the static counter
    }

    public static void DisplayDogCount()
    {
        Console.WriteLine($"There are {NumberOfDogs} dogs.");
    }
}
```

**Program.cs**
```cs
Dog d1 = new Dog("Fido", "Greyhound");
Dog d2 = new Dog("Pooch", "German Shepherd");

Dog.DisplayDogCount();
```

- The `NumberOfDogs` field is used to keep track of how many Dog objects have been created. Every time a new Dog object is instantiated, the constructor increments this static field by 1. 
    - Unlike the instance fields `Name` and `Breed`, the static field `NumberOfDogs` belongs to the class.
- The `DisplayDogCount()` method provides a way to retrieve and display information about all instances of the Dog class by outputting the total number of Dog objects created.
    - `DisplayDogCount()` is a static method, so it belongs to the Dog class.

#### Why Use Static Members?

1. Shared State: A static field provides a single, shared piece of data that all instances of a class can modify.
2. Utility Methods: Static methods are ideal for utility or helper functions. Consider the `Math` or `Convert` methods. It's not necessary to make a **math** object in order to use the available methods and constants.
3. Efficient Access: Static members do not require creating an instance of the class. This makes them accessible directly through the class name, simplifying access.

<!-- #### Class Diagram with Static Members

<div class="text-center">
    <img src="/courses/c-sharp-fundamentals/static-class-diagram.png"FINISH alt="Class Diagram Template">
</div> -->