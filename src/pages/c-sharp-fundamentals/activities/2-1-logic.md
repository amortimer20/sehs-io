---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 2.1 Boolean Logic
---

[← Back](/c-sharp-fundamentals/)

## Activity 2.1 Boolean Logic

---

### Introduction

Computers aren’t just for arithmetic calculations; they can also make decisions based on certain conditions. This ability to make decisions allows programs to handle different outcomes. Let's explore a few everyday scenarios where a computer might need to make decisions:

- **Logging into an application**: The app needs to verify if you entered a valid username and password.
- **Viewing age-restricted games on Steam**: The app store checks if you meet the age requirement to view the game.
- **Playing a fighting game**: The game needs to determine if you’ve won or lost based on certain conditions.

In each of these examples, the computer is evaluating a question that can be answered with "yes" or "no", or more precisely, **true** or **false** . In programming, we use something called a boolean to represent these two values: true and false.

#### What is a Boolean?

In C#, the `bool` data type is used to store values that can be either `true` or `false`. This makes it perfect for logical expressions, which are questions or conditions that the computer can evaluate.

**Example**

```cs
bool isRaining = false;
bool hasUmbrella = true;
```

In this example, `isRaining` is set to `false` because it's not raining, while `hasUmbrella` is set to `true` because you have an umbrella.

#### Boolean Logic

The study of how logical expressions are formed and evaluated is called **boolean logic**. In programming, these logical expressions are constructed using operators and values, and they always result in either `true` or `false`. Let’s revisit our earlier scenarios to see how they can be expressed as boolean logic:

- **Logging into an application**: If I enter my username but an invalid password, will I see my feed? `true` or `false`?
- **Viewing age-restricted games on Steam**: If I enter my birthday, January 1, 1990, will I be able to view the game? `true` or `false`?
- **Playing a fighting game**: If my health goes below or equal to 0, do I lose the game? `true` or `false`?

Just as math has arithmetic operators (like +, -, *, /), C# has operators specifically for boolean logic. These operators allow you to create logical expressions that the computer can evaluate. There are several types of operators:

**Equality Operators**

<table class="table table-hover table-bordered table-sm table-responsive w-auto">
  <thead>
    <tr>
      <th>Equality <code class="language-cs">==</code></th><th>Result</th>
    </tr>
  </thead>
  <tbody class="table-striped">
    <tr>
      <td><code class="language-cs">100 == 100</code></td>
      <td><code class="language-cs">true</code></td>
    </tr>
    <tr>
      <td><code class="language-cs">100 == 99</code></td>
      <td><code class="language-cs">false</code></td>
    </tr>
    <tr>
      <td><code class="language-cs">"abc" == "abc"</code></td>
      <td><code class="language-cs">true</code></td>
    </tr>
    <tr>
      <td><code class="language-cs">"ABC" == "abc"</code></td>
      <td><code class="language-cs">false</code></td>
    </tr>
    <tr>
      <td><code class="language-cs">true == true</code></td>
      <td><code class="language-cs">true</code></td>
    </tr>
    <tr>
      <td><code class="language-cs">true == false</code></td>
      <td><code class="language-cs">false</code></td>
    </tr>
  </tbody>
</table>

<table class="table table-hover table-bordered table-sm table-responsive w-auto">
  <thead>
    <tr>
      <th>Inequality <code class="language-cs">!=</code></th><th>Result</th>
    </tr>
  </thead>
  <tbody class="table-striped">
    <tr>
      <td><code class="language-cs">100 != 100</code></td>
      <td><code class="language-cs">false</code></td>
    </tr>
    <tr>
      <td><code class="language-cs">100 != 99</code></td>
      <td><code class="language-cs">true</code></td>
    </tr>
    <tr>
      <td><code class="language-cs">"abc" != "abc"</code></td>
      <td><code class="language-cs">false</code></td>
    </tr>
    <tr>
      <td><code class="language-cs">"ABC" != "abc"</code></td>
      <td><code class="language-cs">true</code></td>
    </tr>
    <tr>
      <td><code class="language-cs">true != true</code></td>
      <td><code class="language-cs">false</code></td>
    </tr>
    <tr>
      <td><code class="language-cs">true != false</code></td>
      <td><code class="language-cs">true</code></td>
    </tr>
  </tbody>
</table>

**Comparison Operators**

<table class="table table-hover table-bordered table-sm table-responsive w-auto">
  <thead>
    <tr>
      <th>Greater/Less than <code class="language-cs">&gt; &lt;</code>
      </th>
      <th>Result</th>
    </tr>
  </thead>
  <tbody class="table-striped">
    <tr>
      <td><code class="language-cs">100 > 100</code></td>
      <td><code class="language-cs">false</code></td>
    </tr>
    <tr>
      <td><code class="language-cs">100 > 99</code></td>
      <td><code class="language-cs">true</code></td>
    </tr>
    <tr>
      <td><code class="language-cs">0 < 10</code></td>
      <td><code class="language-cs">true</code></td>
    </tr>
    <tr>
      <td><code class="language-cs">0 < -1</code></td>
      <td><code class="language-cs">false</code></td>
    </tr>
  </tbody>
</table>

<table class="table table-hover table-bordered table-sm table-responsive w-auto">
  <thead>
    <tr>
      <th>Greater/Less than or equal <code class="language-cs">>= <=</code>
      </th>
      <th>Result</th>
    </tr>
  </thead>
  <tbody class="table-striped">
    <tr>
      <td><code class="language-cs">100 >= 100</code></td>
      <td><code class="language-cs">true</code></td>
    </tr>
    <tr>
      <td><code class="language-cs">10 >= 99</code></td>
      <td><code class="language-cs">true</code></td>
    </tr>
    <tr>
      <td><code class="language-cs">0 <= 0</code></td>
      <td><code class="language-cs">true</code></td>
    </tr>
    <tr>
      <td><code class="language-cs">0 <= -1</code></td>
      <td><code class="language-cs">false</code></td>
    </tr>
  </tbody>
</table>

**Boolean Logical Operators**

There are two important operators in this category that are not listed: logical AND, and logical OR. We will cover these in subsequent lessons.

<table class="table table-hover table-bordered table-sm table-responsive w-auto">
  <thead>
    <tr>
      <th>Logical Negation (NOT) <code class="language-cs">!</code>
      </th>
      <th>Result</th>
    </tr>
  </thead>
  <tbody class="table-striped">
    <tr>
      <td><code class="language-cs">!true</code></td>
      <td><code class="language-cs">false</code></td>
    </tr>
    <tr>
      <td><code class="language-cs">!false</code></td>
      <td><code class="language-cs">true</code></td>
    </tr>
    <tr>
      <td><code class="language-cs">!(100 > 100)</code></td>
      <td><code class="language-cs">true</code></td>
    </tr>
  </tbody>
</table>

#### Examples of Boolean Expressions

Let’s look at some examples of boolean expressions in C#:

```cs
int age = 18;
bool isOldEnough = age >= 18;  // true
```

In this example, the expression `age >= 18` checks if the age is greater than or equal to 18. If the condition is true, `isOldEnough` is set to `true`; otherwise, it will be set to `false`.

```cs
bool isEqual = (1000 == 1000);  // true
```

Here, we are checking if 1000 is equal to 1000. Since this is obviously true, `isEqual` is assigned the value `true`.

#### Conclusion

Boolean logic is essential for enabling computers to make decisions. By using boolean values (true or false) and operators, we can write programs that evaluate conditions and respond accordingly. We'll dive deeper into boolean logic as we continue, exploring how it can be combined with control flow statements like if statements to create more complex decision-making structures.

#### Skills to Practice

- Constructing boolean expressions

---

### Instructions

#### Setup

1. Create a new C# console application. Name the project **2.1 Boolean Logic**.
2. Click Create.

#### Code

```cs
// Declare and initialize variables
string name = "Mr. Mortimer";
int age = 30;
double bankAccount = 150.00;
bool isATeacher = true;
bool isAMillionaire = false;

// Assign boolean expressions to variables
bool isMyNameMortimer = name == "Mr. Mortimer";
bool isOldEnoughToDrive = age >= 16;
bool canBuyDodgeChallenger = bankAccount > 31000;
bool isSeniorCitizen = age >= 65;

// Output name comparisons and use variables
Console.WriteLine("-Name Checks-");
Console.WriteLine($"Is my name Mr. Mortimer? {isMyNameMortimer}");  // true
Console.WriteLine($"Is my name Mr. Mertens? {name == "Mr. Mertens"}");  // false
Console.WriteLine($"My name is not Mr. Merriman: {name != "Mr. Merriman"}");  // true

// Output age-related logic and use assigned boolean variables
Console.WriteLine("\n-Age-Related Checks-");
Console.WriteLine($"Am I old enough to drive? {isOldEnoughToDrive}");  // true
bool isOldEnoughToRentCar = age >= 25;
Console.WriteLine($"Am I old enough to rent a car? {isOldEnoughToRentCar}");  // true
Console.WriteLine($"Am I eligible for a senior citizen discount? {isSeniorCitizen}");  // false

// Output bank account checks and use boolean expressions
Console.WriteLine("-Bank Account Checks-");
Console.WriteLine($"Do I have enough to buy a Dodge Challenger? {canBuyDodgeChallenger}");  // false
bool hasPositiveBalance = bankAccount > 0;
Console.WriteLine($"Do I have a positive bank balance? {hasPositiveBalance}");  // true

// Output boolean checks directly using variables
Console.WriteLine("\n-Boolean Checks-");
Console.WriteLine($"{name} is a teacher: {isATeacher}");  // true
Console.WriteLine($"{name} is a millionaire: {isAMillionaire}");  // false
bool isNotMillionaire = !isAMillionaire;
Console.WriteLine($"So, {name} isn't a millionaire? {isNotMillionaire}");  // true

// Bonus examples: logical AND (&&) and logical OR (||) assigned to bool variables
// Covered more in lesson 2.4
Console.WriteLine("\n-Logical Operator Examples-");
bool canDriveAndBuyCar = isOldEnoughToDrive && canBuyDodgeChallenger;
Console.WriteLine($"Am I old enough to drive AND have enough to buy a Dodge Challenger? {canDriveAndBuyCar}");  // false
bool canDriveOrBuyCar = isOldEnoughToDrive || canBuyDodgeChallenger;
Console.WriteLine($"Am I old enough to drive OR have enough to buy a Dodge Challenger? {canDriveOrBuyCar}");  // true
```

#### Debug

```txt
-Name Checks-
Is my name Mr. Mortimer? True
Is my name Mr. Mertens? False
My name is not Mr. Merriman: True

-Age-Related Checks-
Am I old enough to drive? True
Am I old enough to rent a car? True
Am I eligible for a senior citizen discount? False

-Bank Account Checks-
Do I have enough to buy a Dodge Challenger? False
Do I have a positive bank balance? True

-Boolean Checks-
Mr. Mortimer is a teacher: True
Mr. Mortimer is a millionaire: False
So, Mr. Mortimer isn't a millionaire? True

-Logical Operator Examples-
Am I old enough to drive AND have enough to buy a Dodge Challenger? False
Am I old enough to drive OR have enough to buy a Dodge Challenger? True
```

---

### Tips, Tricks, and Reflection

-This demo is just the beginning. Over the next few activities, you'll see how powerful Boolean expressions can be in decision-making.
- The categorization of operators may differ between programming languages. The key is understanding their usage, regardless of how they are classified.
- You can quickly test a Boolean expression using the C# Interactive window.