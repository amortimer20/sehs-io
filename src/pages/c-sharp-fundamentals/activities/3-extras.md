---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals Part 3 Extras
---

## C# Fundamentals Part 3 Extras

---

### Introduction

**Part 3 Extras** includes various useful programming content that didn't quite fit into a specific lesson. While you might not encounter some of these techniques in upcoming lessons, feel free to incorporate them into your future programs.

### Dictionaries

Dictionaries in C# are a type of collection that stores key-value pairs, where each unique key is associated with a value. This makes dictionaries highly efficient for looking up values based on their keys.

**Creating a Dictionary**

To create a dictionary, you need to specify the types for both the keys and the values. Here’s an example that uses strings for both keys and values:

```cs
Dictionary<string, string> capitals = new Dictionary<string, string>();
```

**Adding Elements**

You can add elements to a dictionary using the Add() method. Each element consists of a key and a value:

```cs
capitals.Add("France", "Paris");
capitals.Add("Spain", "Madrid");
capitals.Add("Japan", "Tokyo");

```

Alternatively, you can use the indexer syntax:

```cs
capitals["Germany"] = "Berlin";
capitals["Italy"] = "Rome";
```

**Accessing Elements**

To access a value, use the key inside square brackets. This will return the value associated with the key:

```cs
string capitalOfFrance = capitals["France"];
Console.WriteLine(capitalOfFrance); // Output: Paris
```