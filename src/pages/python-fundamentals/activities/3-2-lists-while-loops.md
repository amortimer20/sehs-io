---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: Python Fundamentals 3.2 Lists and While Loops
---

[← Back](/python-fundamentals/)

## Activity 3.2 Lists and While Loops

### Introduction

We can use loops to iterate through elements of an list. The key is to access each item, one at a time. We do this by tracking what index we are currently at using a number variable. A common convention is to use a variable named _i_ to track the index.

**Example**

```python
games = ["Skyrim", "Overwatch", "Fortnite"]
index = 0
print(games[index]) # Same as games[0]
index += 1
print(games[index]) # Same as games[1]
```

### `len()`

It's helpful to know how many elements exist in an list, so we know how many times we need to iterate. Python has a built-in function called `len()`, which returns the number elements in the list.

```js
toys = ["train", "car", "slingshot"];

print(len(toys)); // Outputs 3
```

#### Skills to Practice

- Creating lists
- Setting values in an list
- Accessing values in an list using integer variables

### Instructions

#### Setup

1. Create a new repl.
   1. Select _Python_ for the language.
   2. Name the Repl "_3.2 Lists and Loops_".
2. Click Create repl.

#### Code

```python
print("--- Sodas App ---")

soda_list = []
soda_number = 1

# Let user add 5 sodas to the list
while soda_number <= 5:
    soda_list.append(input("Add a soda to your list: "))
    soda_number += 1

i = 0 # Use i to access the list indexes dynamically

# Show sodas in a list
print("\nHere are your sodas:")

# len(soda_list) returns the number of elements in the list
while i < len(soda_list):
    print(f"- {soda_list[i]}")
    i += 1


print("\n")


print("--- Todo App ---")
todo_list = []
adding_todos = True

while adding_todos:
    print("-Menu-")
    print("1) Add a todo item")
    print("2) Finish")

    choice = input("-> ")

    if choice == "1" or choice == "add":
        todo_list.append(input("Enter todo item: "))
    elif choice == "2" or choice == "finish":
        adding_todos = False
    else:
        print("Invalid option...")


print("\nTodo list: ")
i = 0 # Reset to 0 since it was used in the first app

while i < len(todo_list):
    print(f"- {todo_list[i]}")
    i += 1
```

#### Debug

```txt
Enter a soda: Pepsi
Enter a soda: Coke
Enter a soda: Dr. Pepper
Enter a soda: Sprite
Enter a soda: Slice

Here are your drinks:
* Pepsi
* Coke
* Dr. Pepper
* Sprite
* Slice

Press enter to continue.

--- Todo List ---
-Menu-
1) Add a task
2) Finish
-> 1
Enter task: Grade homework
-Menu-
1) Add a task
2) Finish
-> 1
Enter task: Answer emails
-Menu-
1) Add a task
2) Finish
-> 2

Printing List
* Grade homework
* Answer emails
```

### Tips, Tricks, and Reflection

- When you finish, try refactoring, or improving the soda app so it's not hard-coded to five sodas. i.e. Let the user input as many sodas as they want, just like how to todo app lets the user type in as many todo items as they need.
