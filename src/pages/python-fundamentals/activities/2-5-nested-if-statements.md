---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: Python Fundamentals 2.5 Nested If Statements
---

[← Back](/python-fundamentals/)

## Activity 2.5 Nested If Statements

### Introduction

There are many instances where you need to further make decisions after executing an if statement. We can put an if statement inside of another if statement. This is called _nesting_.

```python
some_condition = True
some_other_condition = True

if some_condition:
  if some_other_condition:
    # code
  else:
    # code
```

It's so important to keep your code nicely formatted. Here is a review of the tips from before:

- Always indent one tab (2-4 spaces) for every code block. If you have a nested if statement, then the code in the nested code block should indented again.
- If elif, and else statements that belong together should not have space inbetween them. Butt them right up against eachother so you can see that they're grouped.
- Space your code based on sections. If you have seperate if statements, space them out with a blank line.

This program is called a choose your own adventure game. It's going to be the biggest program you make so far. Take your time, and test your code frequently. Don't try to write the whole program and then test it at the end, or else it could spell disaster when you try to debug. Write one section at a time, and then test it.

#### Skills to Practice

- Nesting if statements
- Testing nested branching statements

### Instructions

#### Setup

1. Create a new repl.
   1. Select _Python_ for the language.
   2. Name the Repl "_2.5 Nested if statements_".
2. Click Create repl.

## Code

```python
# Trigger an ending by setting one of the ending variables to True
wolfpack_ending = False
dragon_ending = False
gold = 0
twinkies = 0

print("Your car crashes into a tree during a thunderstorm in the woods.")
print("As the storm intensifies, you run into a nearby cave to seek shelter.")
print("Upon entering the cave, you see two diverging paths...\n")

# Append .lower() to any string, string variable, or function that returns a string.
# By making the value lowercase, it ensures the if statment executes whether they type "Left" or "left".
choice = input("Which path do you take? (left or right) -> ").lower()

print("\nRight before you leave, you see a delicious, unopened Hostess Twinkie.")
print("Do you eat the Twinkie for sustenance, or will you save it for later?")

snack_choice = input("(take or eat) -> ").lower()

if snack_choice == "take":
  twinkies = twinkies + 1
  print("You never know when a Twinkie will come in handy...\n")
elif snack_choice == "eat":
  print("It's going to be a long night, so you decide to eat it.\n")
else:
  print("You leave the twinkie alone.\n")

# Left -> Wolfpack
# Right -> Dragon
if choice == "left":
  print("You decide to take the left path.")
  print("You stumble into a pack of wolves lying together.")
  print("The pack leader slowly approaches...\n")

  choice = input("Do you pet the pack leader? (yes or no) -> ").lower()

  if choice == "yes" and twinkies >= 1:
    print("As you approach, the wolves smell a delicious snack cake..")
    print("In a fit of hungry rage, they rip you to shreds!\n")
  elif choice == "yes":
    print("The pack leader respects and accepts you.")
    print("You are given a gold satchel by the pack leader.")
    print("You also cuddle with the wolf pack until the storm subsides...\n")
    gold = 5
    wolfpack_ending = True
  else:
    print("The pack leader senses your fear.")
    print("The entire pack crowds around you and devours you...\n")

# End left path
elif choice == "right":
  print("You decide to take the right path.")
  print("\nLater down the trail, you stumble upon an overweight,")
  print("repulsive looking talking dragon named Mort the Pudgy.")
  print("The dragon speaks: 'Did you bring me snack cakes??'")

  choice = input("Do you have a treat to give this foul creature? (yes, no) -> ")

  if choice == "yes" and twinkies >= 1:
    print("Me love Twinkie!!! Here take gold!")
    print("The dragon grants you the gold he was guarding.\n")
    gold_amount = int(input("How much gold do you take? -> "))

    if gold_amount > 0 and gold_amount <= 100:
      print("Mortimer the Pudgy grants you his gold...\n")
      gold = gold_amount
    elif gold_amount > 100:
      print("'Greedy! No gold for you!'\n")
    else: # Zero or negative amount
      print("Mortimer the pudgy respects your piety.")
      print("You are granted all of the gold!\n")
      gold = 100000

    dragon_ending = True
  else:
    print("'Fool!!!'")
    print("The dragon devours you whole.")
    print("He desired a delicious Hostess treat, settling for you instead...\n")
# End right path
else:
    print("You decide not to enter. You receive a thundershock and lie in the storm...\n")


# Ending
print("ENDING:\n")

if wolfpack_ending: # Same as wolfpack_ending == True
  print("By cuddling with the wolfpack, you weather out the storm.")
  print("Upon leaving the cave, they follow you, seeing you as the new pack leader.")
  print("You survived!!!")
elif dragon_ending: # Same as dragon_ending == True
  print("By tempting Mortimer the Pudgy with a delicious Hostess snack cake, you avoid his wrath.")
  print("He flies you back home after the storm, but not after raiding the nearest Hostess factory.")
  print("You survived!!!")
else:
  print("Game over!!!")

if gold > 0:
  print(f"\nYou not only survived, but you found {gold} gold! Good work!")
```

#### Debug

```txt
Your car crahes into a tree during a thunderstorm in the woods.
As the storm intensifies, you run into a nearby cave to seek shelter.
Upon entering the cave, you see to diverging paths...

Which path do you take? (left or right) -> right
You decide to take the right path.
While walking the path, you find a box of Twinkie, a delicious treat...

Do you eat them or save them for later? (eat, take) -> take
You never know when you'll need some Twinkie, so you take them with you.

Later down the trail, you stumble upon an overweight talking dragon named Mortimer the Pudgy.
The dragon speaks: 'You bring me treats??'
Do you give Mortimer the pudgy your Twinkie? (yes, no) -> yes
Me love Twinkie!!! Here take gold!
The dragon grants you the gold he was guarding.

How much gold do you take? -> 100
Mortimer the Pudgy grants you his gold...

ENDING:

By tempting Mortimer the Pudgy with a delicious Hostess snack cake, you avoid his wrath.
He flies you back home after the storm, but not after raiding the nearest Hostess factory.
You survived!!!

You not only survived, but you found 100 gold! Good work!
```

### Tips, Tricks, and Reflection

- I cannot stress the importance of testing your application regularly. When you start nesting if statements, your app will potentially have many different paths of execution. It's important to make sure everything runs as you develop your application.
