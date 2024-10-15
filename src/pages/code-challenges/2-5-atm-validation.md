---
divStyles: "container mt-4"
layout: "../../layouts/Layout.astro"
title: Code Challenge 2.5 - ATM Validation
---

[← Back](/code-challenges/)

## Code Challenge 2.5 - ATM Validation

---

### Introduction

An ATM is a machine that allows banking customers to easily access their bank accounts. It performs three basic tasks:

- Inquiry - See your account balance
- Deposit - Put money in your account
- Withdraw - Take money out of your account

Performing validation means to verify that the input from the user is in the correct form. For example, when depositing money, a user cannot deposit a dollar amount less than or equal to 0. Also, when withdrawing money, a user cannot withdraw a dollar amount greater than their bank balance.

The ATM Lite program in the Programming Fundamentals courses does not validate data. This would be unaccetable in a production environment.

#### Skills to Practice

- Repeating statements using loops
- Making decisions with if statements
- Nesting if statements
- Validating user input

### Challenge Tasks

1. Create a console project named **Challenge 2-5**.
2. Create a banking ATM program that has the following features:

- Shows a main menu with the following options:
   - Inquire balance
   - Deposit
   - Withdraw
   - Exit
- The user should be able to inquire their balance, make a deposit, or make a withdrawal.
   - After the user performs a task, ask if they want to perform another transaction. If they say no, exit the program.
- Validate the user's input:
   - If the user tries to deposit an amount less than $1, inform them that their deposit must be at least $1.
   - If the user tries to withdraw more money than is in their account, inform them that they have an insufficient balance.
   - If the user selects an invalid menu option, ask them to try again.
4. Set up your balance variable ahead of time. Initialize a variable similar to one of the examples below:

**Python**
```python
balance = 500
```

**C#**
```cs
double balance = 500;
```

#### Sample Output

<div class="row">
    <div class="col-sm-12 col-xl-10 offset-xl-1">
        <video src="/courses/code-challenges/code-challenge-2-5-sample.mp4" autoplay loop width="100%"></video>
    </div>
</div>
