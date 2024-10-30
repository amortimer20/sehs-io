---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 2.8 Rock, Paper, Scissors Game
---

[← Back](/c-sharp-fundamentals/)

## Activity 2.8 Rock, Paper, Scissors Game

---

### Introduction

Rock, Paper, Scissors is more than just a childhood game—it's a timeless classic that’s perfect for friendly competition. Here’s a quick overview of the rules:

Choose your move: Rock, Paper, or Scissors

- Rock crushes Scissors
- Paper covers Rock
- Scissors cuts Paper

In this activity, you'll develop a digital version of Rock, Paper, Scissors. Not only will it sharpen your coding skills, but it will also give you a deeper understanding of how to implement logic and control flow in your programs.

#### Skills to Practice

- Writing while loops
- Nesting code blocks

---

### Instructions

#### Setup

1. Create a new C# console application. Name the project **2.8 Rock, Paper, Scissors**.
2. Click Create.

#### Code

```cs
int wins = 0;
int losses = 0;
int round = 1;
bool playing = true;
Random random = new();
Console.WriteLine("--- ROCK, PAPER, SCISSORS ---");

/* This is a multi-line comment.
   1. Set the header: round number, wins, losses
   2. Prompt user for player hand
   3. Generate a random computer hand
   4. Check who won
       i. If same hand - tie
      ii. If player chooses rock
         a. Computer paper - lose
         b. Computer scissors - win
     iii. If player chooses paper
         a. Computer scissors - lose
         b. Computer rock - win
      iv. If player chooses scissors
         a. Computer rock - lose
         b. Computer paper - win
   5. Prompt user to play again
*/

while (playing)
{
    Console.WriteLine($"\nROUND {round}!");
    Console.WriteLine($"W: {wins} - L: {losses}");
    Console.WriteLine("Rock, Paper, Scissors?");
    Console.Write("-> ");
    string player = Console.ReadLine().ToLower();
    
    int randomNumber = random.Next(0, 3);
    string computer;

    if (randomNumber == 0)
    {
        computer = "rock";
    }
    else if (randomNumber == 1)
    {
        computer = "paper";
    }
    else
    {
        computer = "scissors";
    }

    Console.WriteLine($"Computer chooses {computer}!");

    if (player == computer)
    {
        Console.WriteLine("Tie!");
    }
    else if (player == "rock" && computer == "scissors")
    {
        Console.WriteLine("You win! Rock crushes scissors!");
        wins++;
    }
    else if (player == "rock" && computer == "paper")
    {
        Console.WriteLine("You lose! Paper covers rock!");
        losses++;
    }
    else if (player == "paper" && computer == "rock")
    {
        Console.WriteLine("You win! Paper covers rock!");
        wins++;
    }
    else if (player == "paper" && computer == "scissors")
    {
        Console.WriteLine("You lose! Scissors cuts paper!");
        losses++;
    }
    else if (player == "scissors" && computer == "paper")
    {
        Console.WriteLine("You win! Scissors cuts paper!");
        wins++;
    }
    else if (player == "scissors" && computer == "rock")
    {
        Console.WriteLine("You lose! Rock crushes scissors!");
        losses++;
    }
    else
    {
        Console.WriteLine("Invalid input. Please choose Rock, Paper, or Scissors.");
    }

    Console.Write("Play again (yes/no)? ");
    string playAgain = Console.ReadLine().ToLower();
    if (playAgain == "no")
    {
        playing = false;
    }
    else
    {
        round++;
    }
}
```

#### Debug

```txt
--- ROCK, PAPER, SCISSORS ---

ROUND 1!
W: 0 - L: 0
Rock, Paper, Scissors?
-> rock
Computer chooses rock!
Tie!
Play again (yes/no)? yes

ROUND 2!
W: 0 - L: 0
Rock, Paper, Scissors?
-> paper
Computer chooses scissors!
You lose! Scissors cuts paper!
Play again (yes/no)? yes

ROUND 3!
W: 0 - L: 1
Rock, Paper, Scissors?
-> scissors
Computer chooses rock!
You lose! Rock crushes scissors!
Play again (yes/no)? no
```

---

### Tips, Tricks, and Reflection

- You can also try rewrite the code to use nested if statements within each player choice to avoid using logical and `&&`. But more nesting `==` more headaches.
- Try making a two player version of rock, paper, scissors. When player one's turn is done, you can call the method `Console.Clear()` to clear the screen, so player two peek at the previous choice:

```cs
Console.Clear();
```

- For a more advanced version, consider upgrading the game to include Rock, Paper, Scissors, Lizard, Spock!
- As your applications become more complex, it's crucial to outline the requirements beforehand. The multi-line comment in the activity code is a simple yet effective guide to keep track of what needs to be implemented in the program.
