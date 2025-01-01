---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 5.2 Introduction to OOP Part 2
---

[← Back](/c-sharp-fundamentals/)

## Activity 5.2 Introduction to OOP Part 2

---

### Introduction

In this activity, we will deepen our understanding of OOP concepts by exploring the following topics:

1. **Synonyms for OOP Terms**: Learn alternate ways to describe key concepts like objects, methods, and attributes to enhance your ability to communicate effectively in programming discussions.
2. **Class Diagrams**: Visualize the structure of classes and their relationships using class diagrams, a vital tool for designing and understanding OOP-based systems.
3. **Reference Type Behavior for Classes**: Review how reference types work in C# and why understanding their behavior is crucial when working with objects in memory.

##### Review of Object-Oriented Terms

Since a lot of content was covered in the opening activity, let's review important terms that were discussed.

- **class**: A blueprint for creating objects. A class defines the structure and behavior of its objects through variables called fields (attributes) and methods (functions). It encapsulates data and operations, representing an abstraction of an entity in a program.
- **object**: An instance of a class. If a class is the blueprint, an object is a realization of that blueprint in a program, with its own unique state based on the class's fields.
- **class members**: The components defined within a class, including fields (attributes) and methods (functions).
- **fields**: Variables defined within a class that represent the attributes or properties of the class and its objects. Fields store the state of the object.
- **methods**: Functions defined within a class that represent the behaviors or actions the class's objects can perform.

##### Synonyms

In object-oriented programming, many terms have synonyms that vary depending on the programming language you're learning. Different terms may resonate with you better, so feel free to use the ones that make the most sense to you. Here's a list of common synonyms:

<table class="table w-auto table-bordered">
    <thead>
        <tr>
            <th>Term</th>
            <th>Synonyms</th>
            <th>Examples</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>class</td>
            <td>type (as in data type)</td>
            <td>
                <strong>Python:</strong> <code>class MyClass:</code><br />
                <strong>C#:</strong> <code>class MyClass { }</code><br />
                <strong>Java:</strong> <code>class MyClass { }</code><br />
                <strong>Ruby:</strong> <code>class MyClass; end</code><br />
                <strong>JavaScript:</strong> <code>class MyClass { }</code>
            </td>
        </tr>
        <tr>
            <td>field</td>
            <td>instance variable<br />member variable<br />property (in some contexts)</td>
            <td>
                <strong>Python:</strong> <code>self.my_field</code><br />
                <strong>C#:</strong> <code>int myField;</code><br />
                <strong>Java:</strong> <code>int myField;</code><br />
                <strong>C# (property):</strong> <code>public int MyField { get; set; }</code><br />
                <strong>Ruby:</strong> <code>@my_field = 10</code><br />
                <strong>JavaScript:</strong> <code>this.myField;</code>
            </td>
        </tr>
        <tr>
            <td>method</td>
            <td>instance method<br />member function</td>
            <td>
                <strong>Python:</strong> <code>def my_method(self):</code><br />
                <strong>C#:</strong> <code>public void MyMethod() { }</code><br />
                <strong>Java:</strong> <code>public void myMethod() { }</code><br />
                <strong>Ruby:</strong> <code>def my_method; end</code><br />
                <strong>JavaScript:</strong> <code>myMethod() { }</code> (inside a class)
            </td>
        </tr>
    </tbody>
</table>

---

### Class Diagrams

Class diagrams are a key part of object-oriented programming and are used to visually represent the structure of a class. They provide a visual blueprint for designing software by showing the following elements of a class:

1. **Class Name**: The name of the class is shown at the top of the diagram in a box.
2. **Fields (Attributes)**: Below the class name, a list of fields shows the attributes that belong to the class.
3. **Methods (Behaviors)**: Under the fields, a list of methods shows the behaviors or actions the class can perform.

A class diagram is typically represented as a rectangle divided into these three sections.

<table class="table table-bordered text-center">
    <thead>
        <tr>
            <th>Class Diagram</th>
            <th>Example: Simple Student Class
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <img src="/courses/c-sharp-fundamentals/class-diagram-template.png" alt="Class Diagram Template">
            </td>
            <td>
                <img src="/courses/c-sharp-fundamentals/student-class-diagram.png" alt="Student Class Diagram">
            </td>
        </tr>
    </tbody>
</table>

**Why Use Class Diagrams?**

- **Clarity**: They help you visualize the structure of a class and its components.
- **Planning**: They serve as a guide for implementing code.
- **Communication**: They make it easier to explain your design to others.

There is much more to class diagrams, and as this unit progresses, more details will be added.

---

##### Classes are Reference Types

In Lesson 3.6, we discussed the distinction between value types and reference types. **Value types** store their actual data directly. When you assign a value type variable to another variable, the data is copied, meaning each variable has its own copy of the data. **Reference types**, on the other hand, store a memory address that points to the actual data. When you assign a reference type variable to another variable, only the memory address is copied. As a result, both variables refer to the same data in memory.

Classes in C# are reference types. This means if you assign one class instance to another variable, both variables will point to the same object in memory. Any changes made to the object through one variable will be reflected when accessed through the other variable.

**Example: Copying references**

```cs
Dog dog1 = new Dog();
dog1.name = "Fido";
dog1.breed = "Greyhound";
dog1.age = 3;
dog1.color = "gray";

// dog2 and dog1 are pointing to the same object
Dog dog2 = dog1; 
```

<div class="row">
    <div class="col">
        <img src="/courses/c-sharp-fundamentals/dog-reference.gif" class="img-fluid">
    </div>
</div>

### Tips, Tricks, and Reflection

- Why is it important to recognize and understand different terms for the same OOP concepts across programming languages?
- How can class diagrams help you better understand and plan your code?