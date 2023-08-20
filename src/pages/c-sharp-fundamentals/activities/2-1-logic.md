---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 2.1 Logic Crash Course
---

[← Back](/c-sharp-fundamentals/)

## Activity 2.1 Logic Crash Course

---

### Introduction

Computers aren't limited to performing arithmetic calculations. We are able to program computers to make decisions using logical expressions. When a computer can make decisions, it's able to determine different outcomes in a program. Here are a few example scenarios:

- If you sign in to an application, the app will determine if you signed in with a valid account or not.
- When viewing mature games on Steam, the app needs to verify if you are old enough to view the game or not.
- If you're playing a video game, the game needs to know when you've won or lost.

These examples all use instances of decision making. Think of it like a computer being able to answer _yes_ or _no_, _correct_ or _incorrect_, or more specifically, _True_ or _False_. Programming languages have a data type called a **boolean** that represents the values **frue** and **false**. The study of computing logical expressions is known as boolean logic. Logical expressions in programming result in either a True or False answer. Let's revisit the examples above:

- If I sign into Instagram with a my username but an invalid password, will I see my feed? **true** or **false**?
- If I type in my birthday, _May 24, 1990_ when viewing a mature game on Steam, will I be able to see it? **true** or **false**?
- If I'm playing Skyrim, and my health goes below 0, do I lose? **true** or **false**?

Just as math has arithmetic operators (`+ - * /`), C# has various categories of boolean operators: equality operators, comparison operators, and logical operators. We won't cover every logical operator in this lesson, but there is more to come.

Here is a brief rundown of the various operators: equality `==`, inequality `!=`, greater than (`>`), less than (`<`), greater than or equal to (`>=`), less than or equal to (`<=`), and not (`!`). Logic expressions can be constructed using different data types combined with these operators. The result will be either **true** or **false**. Here's an example:

```cs
1000 == 1000
```

Is 1000 equal to 1000? It is, so the result is the value **true**. You can see a number of different examples in the tables below. These are known as truth tables.

| **Equality (`==`)** | **Result** |
| :------------------ | ---------: |
| `100 == 100`        |       True |
| `100 == 99`         |      False |
| `"abc" == "abc"`    |       True |
| `"ABC" == "abc"`    |      False |
| `True == True`      |       True |
| `True == False`     |      False |

| **Inequality (`!=`)** | **Result** |
| :---------------------- | ---------: |
| `100 != 100`            |      False |
| `100 != 99`             |       True |
| `"abc" != "abc"`        |      False |
| `"ABC" != "abc" `       |       True |
| `True != True`          |      False |
| `True != False`         |       True |

| **Greater than/Less than (`>`,`<`)** | **Result** |
| :----------------------------------- | ---------: |
| `100 > 100`                          |      False |
| `100 > 99`                           |       True |
| `0 < 100`                            |       True |
| `0 < -1`                             |      False |

| **Greater than or equal/Less than or equal (`>=`,`<=`)** | **Result** |
| :---------------------------------------------------------- | ---------: |
| `100 >= 100`                                                |       True |
| `100 <= 99`                                                 |      False |

| **Not (`!`)**   | **Result** |
| :---------------- | ---------: |
| `!True`        |      False |
| `!False`       |       True |
| `!(100 > 100)` |       True |

#### Skills to Practice

- Constructing boolean expressions using the following operators:
  - Equality (`==`) and inequality (`!=`)
  - Greater than (`>`) and less than (`<`)
  - Greater than or equal (`>=`) and less than or equal (`<=`)
  - not (`!`)

---

### Instructions

#### Setup

1. Create a new C# console application. Name the project **2.1 Logic**.
2. Click Create.

#### Code

```cs
string name = "Mr. Mortimer";
int age = 30;
double bankAccount = 150;
bool isATeacher = true;
bool isAMillionaire = false;

Console.WriteLine($"Is my name Mr. Mortimer? {name == "Mr. Mortimer"}");
Console.WriteLine($"Is my name Mr. Mertens? {name == "Mr. Mertens"}");
Console.WriteLine($"My name is not Mr. Merriman: {name != "Mr. Merriman"}");

Console.WriteLine($"Am I old enough to drive? {age >= 16}");
Console.WriteLine($"Do I have enough to buy a Dodge Challenger? {bankAccount > 31000}");

Console.WriteLine($"{name} is a teacher: {isATeacher == true}");
Console.WriteLine($"{name} is a millionaire: {isAMillionaire}");
Console.WriteLine($"So, {name} isn't a millionaire? {!isAMillionaire}");
```

#### Debug

```txt
Is my name Mr. Mortimer? True
Is my name Mr. Mertens? False
My name is not Mr. Merriman: True
Am I old enough to drive? True
Do I have enough to buy a Dodge Challenger? False
Mr. Mortimer is a teacher: True
Mr. Mortimer is a millionaire: False
So, Mr. Mortimer isn't a millionaire? True
```

---

### Tips, Tricks, and Reflection

- This demo is not of much use yet. Over the next few activities, you will see just how powerful logical expressions can be in decision making.
- You can quickly test a boolean expression using the REPL console or the C# Interactive window.
