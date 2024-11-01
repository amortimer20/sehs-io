---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 3.8 Memory Game!
---

[← Back](/c-sharp-fundamentals/)

## Activity 3.8 Memory Game!

---

### Introduction

Welcome to this end-of-Part 3 case study: the Memory Game project. Each part of this program utilizes concepts that you've picked up throughout this course. It involves implementing a classic memory card game where players match pairs of cards.

**Important Note:** This is not a simple program, and it is important to take your time and try to comprehend each individual section. Don't rush—understand the logic behind each step and how they connect to form the complete game. Remember, it's okay not to memorize every algorithm by heart; what's crucial is knowing they exist and being able to refer to and apply them when needed.

**General Steps**

1. Initialize game data.
2. Shuffle the deck.
3. Repeat the core game loop until you win:
    - Display the current state of the deck.
    - Player inputs two guesses.
    - Reveal guessed cards and display the current state of the deck.
    - Check for a match - Hide guessed cards if they don't match.
    - Check for a win.

#### Skills to Practice

- Implementing game logic in a structured manner
- Using arrays and boolean arrays to manage game data
- Applying shuffling algorithms to randomize game elements
- Iterating through collections using for and foreach loops
- Debugging and testing

---

### Instructions

#### Setup

1. Create a new C# console application. Name the project **3.8 Memory Game**.
2. Click Create.

#### Code

```cs
// Initialize game data
string[] cards = [ "A", "A", "B", "B", "C", "C", "D", "D", "E", "E" ];
bool[] revealedCards = new bool[cards.Length];
bool gameWon = false;

// Shuffle deck
Random rng = new Random();
for (int i = cards.Length - 1; i > 1; i--)
{
    int j = rng.Next(i);
    string temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
}

Console.WriteLine("--- Memory Game! ---");

while (!gameWon)
{
    // Display current state of the deck
    Console.Clear();
    Console.WriteLine("Memory Game Board:");
    for (int i = 0; i < cards.Length; i++)
    {
        if (revealedCards[i])
        {
            Console.Write($"{cards[i]} ");
        }
        else
        {
            Console.Write("_ ");
        }
    }

    // Player inputs two guesses
    Console.Write("\nEnter the first card position (0-9): ");
    int guess1 = Convert.ToInt32(Console.ReadLine());
    Console.Write("Enter the second card position (0-9): ");
    int guess2 = Convert.ToInt32(Console.ReadLine());

    // Reveal guessed cards and display the current state of the deck
    revealedCards[guess1] = true;
    revealedCards[guess2] = true;

    Console.Clear();
    Console.WriteLine("Memory Game Board:");
    for (int i = 0; i < cards.Length; i++)
    {
        if (revealedCards[i] || i == guess1 || i == guess2)
        {
            Console.Write($"{cards[i]} ");
        }
        else
        {
            Console.Write("_ ");
        }
    }
    Console.WriteLine();

    // Check for a match - Hide guessed cards if they don't match
    if (cards[guess1] != cards[guess2])
    {
        Console.WriteLine("No match! Try again.");
        Console.ReadLine();
        // Hide incorrectly guessed cards
        revealedCards[guess1] = false;
        revealedCards[guess2] = false;
    }
    else
    {
        Console.WriteLine("Match found!");
        Console.ReadLine();
    }

    // Check for a win
    gameWon = true;
    foreach (bool revealedCard in revealedCards)
    {
        if (!revealedCard)
        {
            gameWon = false;
            break;
        }
    }
}

Console.WriteLine($"Congratulations! You won the game!");
```

#### Debug

```txt
Memory Game Board:
_ _ _ _ _ _ _ _ _ _
Enter the first card position (0-9): 2 [Enter]
Enter the second card position (0-9): 8 [Enter]

Memory Game Board:
_ _ A _ _ _ _ _ E _
No match! Try again.
[Enter]

Memory Game Board:
_ _ _ _ _ _ _ _ _ _
Enter the first card position (0-9): 2 [Enter]
Enter the second card position (0-9): 6 [Enter]

Memory Game Board:
_ _ A _ _ _ A _ _ _
Match found!
[Enter]

Memory Game Board:
_ _ A _ _ _ A _ _ _
Enter the first card position (0-9):

Remaining output ommitted...
```

### Tips, Tricks, and Reflection

- **Bug: Choosing Matched Cards:** There is a bug where the player can choose indexes of cards that have already been matched, which may result in an already matched card being flipped back down. Add code to validate the player input by ensuring they only choose indices of cards that haven’t been matched yet.

- **Bonus: Track Tries:** - Add a feature that keeps track of the player’s tries and informs them of the total number of tries taken once they win. Hint: Refer back to your number guessing game.

- **Bonus: Colors:** - Add colored text to make the game more visually appealing. Use one color for correctly matched cards and a different color when cards are incorrectly matched.