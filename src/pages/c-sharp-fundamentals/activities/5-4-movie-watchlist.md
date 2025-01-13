---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 5.4 Movie Watch List
---

[← Back](/c-sharp-fundamentals/)

## Activity 5.4 Movie Watch List

---

### Introduction

Object-oriented programming (OOP) is a powerful way to organize code by grouping related data and behavior into classes and objects. In this activity, you will create a simple "Movie Watch List" application. This project will reinforce your understanding of classes, objects, lists, and methods, providing a practical example of how to manage and manipulate data in a real-world scenario.

#### Introduction Summary

In this activity, you will:
- Create a Movie class to represent individual movies.
- Build a C# console application to manage a list of movies.
- Use lists to dynamically store and modify your movie collection.
- Practice using methods, loops, and conditionals to interact with the user and process data.

#### Skills to Practice

- Designing and implementing classes with fields, constructors, and methods.
- Working with lists to store and manage objects dynamically.
- Writing methods to perform specific actions, such as adding, displaying, and removing items from a collection.

### Instructions

#### Setup

1. Create a new C# console application. Name the project **5.4 Movie Watch List**.
2. Click Create.
3. In your project, create a new file titled Movie.cs

#### Code

**Movie.cs**
```cs
public class Movie
{
    public string Title;
    public int Year;
    public string Genre;

    public Movie(string title, int year, string genre)
    {
        Title = title;
        Year = year;
        Genre = genre;
    }

    public void GetDetails()
    {
        Console.WriteLine($"{Title} - {Year} - {Genre}");
    }
}
```

**Program.cs**
```cs
List<Movie> movies = [];

Console.WriteLine("--- Movie Watch List ---");
string choice = "";

while (choice != "4")
{
    Console.WriteLine("\n1) Add movie to watch list");
    Console.WriteLine("2) Display watch list");
    Console.WriteLine("3) Remove movie from watch list");
    Console.WriteLine("4) Exit");
    choice = Console.ReadLine();

    if (choice == "1")
    {
        AddMovie();
    }
    else if (choice == "2")
    {
        DisplayMovies();
    }
    else if (choice == "3")
    {
        RemoveMovie();
    }
    else if (choice == "4")
    {
        Console.WriteLine("Exiting application.");
    }
    else
    {
        Console.WriteLine("Invalid option.");
    }
}

void AddMovie()
{
    Console.WriteLine("Adding new movie to watch list");

    Console.Write("Title: ");
    string title = Console.ReadLine();

    Console.Write("Release Year: ");
    int year = Convert.ToInt32(Console.ReadLine());

    Console.Write("Genre: ");
    string genre = Console.ReadLine();

    Movie movie = new Movie(title, year, genre);
    movies.Add(movie);
}

void DisplayMovies()
{
    Console.WriteLine("- Watch List -");
    Console.WriteLine("Title - Year - Genre");
    Console.WriteLine("--------------------");

    // For each movie in list
    foreach (Movie movie in movies)
    {
        movie.GetDetails();
    }
}

void RemoveMovie()
{
    Console.WriteLine("- Removing movie from watch list -");
    Console.Write("Enter title: ");
    string title = Console.ReadLine();

    bool removed = false; // Change to true if a movie was successfully removed

    // Linear search
    for (int i = 0; i < movies.Count; i++)
    {
        // Remove movie if the title is found
        if (movies[i].Title == title)
        {
            movies.Remove(movies[i]);
            removed = true;
        }
    }

    if (removed)
    {
        Console.WriteLine($"{title} was removed from watch list.");
    }
    else
    {
        Console.WriteLine($"{title} was not found in watch list.");
    }
}
```

#### Debug

```txt
--- Movie Watch List ---

1) Add movie to watch list
2) Display watch list
3) Remove movie from watch list
4) Exit
1
Adding new movie to watch list
Title: Iron Man
Release Year: 2008
Genre: Action

1) Add movie to watch list
2) Display watch list
3) Remove movie from watch list
4) Exit
1
Adding new movie to watch list
Title: Big Daddy
Release Year: 1999
Genre: Comedy

1) Add movie to watch list
2) Display watch list
3) Remove movie from watch list
4) Exit
2
- Watch List -
Title - Year - Genre
--------------------
Iron Man - 2008 - Action
Big Daddy - 1999 - Comedy

1) Add movie to watch list
2) Display watch list
3) Remove movie from watch list
4) Exit
3
- Removing movie from watch list -
Enter title: Iron Man
Iron Man was removed from watch list.

1) Add movie to watch list
2) Display watch list
3) Remove movie from watch list
4) Exit
4
Exiting application.
```

---

### Tips, Tricks, and Reflection

- Plan before coding: Take a moment to think about how the Movie class and the Program.cs file will interact. Understanding the overall flow will help you write cleaner, more organized code.
- Test edge cases: Consider what might happen if the user enters invalid data, such as a non-existent movie title when removing an item from the list. Update your code to handle these situations gracefully.