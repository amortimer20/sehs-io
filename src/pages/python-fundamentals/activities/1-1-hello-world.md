---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: Python Fundamentals 1.1 Hello World
---

[← Back](/python-fundamentals/)

## Activity 1.1 Hello World!

### Introduction

Every programming course begins with a simple program known as _Hello World_. The programming construct you will learn in this lesson is known as **output**. Output is information that is given to the user. In order to output information to the use, we need to use something called `print()`.

`print()` is known as a _function_. Functions perform some action in programming. In this case, `print()` outputs a message to the user via the console. The console is a simple terminal for running text based computer applications. Most of the introductory applications in these programming activities will be console based.

We will also learn how to write comments in Python. Comments serve two purposes, to document, or take notes, in your code, and to disable parts of your program for testing. We will be writing simple programs for the time being, but they will eventually grow in size and complexity. It's important to document parts of your code for yourself and your team, so your code can be easily understood and maintainable. Comments begin with the **#** symbol.

#### Skills to Practice

- Writing and executing code
- Output messages with the `print()` function
- Debugging potential errors in your code.

---

### Instructions

#### Setup

1. Create a new Python application. Name the project **1.1 Output**.
2. Click Create.

#### Code

Your new workspace will contain an empty file named _index.py_. Starting on line 1, write the following code below. No copy and pasting! You will never be good at coding if you don’t write your own code.

```python
print("Hello, world!")
print("This class is taught by Mr. Mortimer.")
print("Please visit my blog: https://www.what-oh-heck-no-hold-up-huh-oh-okay.com")
print() # Display a blank line

print("What is the answer to life, the universe, and everything?")
print("42. The answer is 42.")
print()

print("Sally sells seashells by the seashore.")
print("Sally's doing five years for running a seashell pyramid scheme.")
print()

print("If you start to feel overwhelmed, just remember:")
print("Mortimers don't quit, we get fired!")
print()
print()

print("Sincerely,")
print("Mr. Mortimer")

# These lines are disabled.
# Remove the comment symbols below (#) and run the program one more time.

# print()
# print("PS You're fired!")
```

#### Debug

To execute your new program, click the run button at the top of your workspace. If everything was written correctly, you will see the various message output to the console. If not, you need to try and see where you made a mistake in your code. The process of testing your program is called _debugging_.

Compare your console output with the example below to see if they match.

```txt
Hello, world!
This class is taught by Mr. Mortimer.
Please visit my blog: https://www.what-oh-heck-no-hold-up-huh-oh-okay.com

What is the answer to life, the universe, and everything?
42. The answer is 42.

Sally sells seashells by the seashore.
Sally's doing five years for running a seashell pyramid scheme.

If you start to feel overwhelmed, just remember:
Mortimers don't quit, we get fired!


Sincerely,
Mr. Mortimer

PS You're fired!
```

---

### Tips, Tricks, and Reflection

- What happens when you write `print()` without a message in the parenthesis?
