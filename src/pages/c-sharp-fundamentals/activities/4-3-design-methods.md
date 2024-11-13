---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: C# Fundamentals 4.3 Designing a Modular Application with Methods
---

[← Back](/c-sharp-fundamentals/)

## Activity 4.3 Designing a Modular Application with Methods

---

### Introduction

In this activity, you’ll apply what you've learned about methods and parameters to design a modular To-Do List application. When building software, designing with methods is key to creating organized, scalable, and easy-to-understand code. This approach allows you to divide complex tasks into smaller, manageable parts, each handled by a specific method. In this way, each method becomes a building block of the application.

One essential technique in program design is stepwise refinement. **Stepwise refinement** is a process of breaking down a complex task into smaller, logical steps. For example, in this To-Do List application, we can start with the primary goal: managing a list of tasks. By using stepwise refinement, we break down this task into several sub-tasks, each of which can be handled by its own method.

#### Steps in Stepwise Refinement

1. **Identify the Main Functionality**: Think about what your program needs to do at a high level. For a To-Do List app, the main functions are likely to be adding tasks, viewing tasks, and marking tasks as complete.
2. **Break Down Each Main Function into Steps**: Once you've identified the main tasks, break each one down into smaller steps. For instance:
    - **Adding a Task** might include prompting the user for a task description and saving this information to a list.
    - **Viewing Tasks** could involve looping through all tasks to display them with their completion status.
    - *Marking a Task as Complete* may involve letting the user select a task to mark and updating its status.
3. **Assign Each Step to a Method**: Next, you assign each step to a specific method. This practice keeps your code organized, as each method only does one specific thing. For example, `AddTask` will handle the process of collecting and storing new task data, `ViewTasks` will handle displaying tasks, and `MarkTaskComplete` will allow tasks to be marked as complete.
4. **Refine and Integrate**: Once you’ve created methods for each main step, refine your methods to handle edge cases (e.g., what happens if there are no tasks to view?). Finally, integrate them into a main program loop that lets the user interact with your application in a logical flow.

Using stepwise refinement, you can simplify even a larger task into small, manageable parts. This approach will help you build the To-Do List app and will serve as a valuable strategy for tackling more complex projects in the future.

#### Skills to Practice

- Breaking down an application into core tasks and then further refining each task into steps for individual methods.
- Organizing code so each method performs a single, clear function.

---

### Instructions

#### Setup

1. Create a new C# console application. Name the project **4.3 Program Design**.
2. Click Create.

#### Code

```cs
List<string> taskList = new List<string>();
List<bool> taskCompletionStatus = new List<bool>();

string choice = "";

while (choice != "4")
{
    Console.WriteLine("--- To-Do List Application ---");
    Console.WriteLine("1. Add Task");
    Console.WriteLine("2. View Tasks");
    Console.WriteLine("3. Mark Task as Complete");
    Console.WriteLine("4. Exit");
    Console.Write("Choose an option: ");
    choice = Console.ReadLine();

    if (choice == "1")
    {
        AddTask(taskList, taskCompletionStatus);
    }
    else if (choice == "2")
    {
        ViewTasks(taskList, taskCompletionStatus);
    }
    else if (choice == "3")
    {
        MarkTaskComplete(taskList, taskCompletionStatus);
    }
    else if (choice == "4")
    {
        Console.WriteLine("Exiting application.");
    }
    else
    {
        Console.WriteLine("Invalid choice, please try again.");
    }
}

// Method to add a new task
void AddTask(List<string> tasks, List<bool> completionStatus)
{
    Console.Write("Enter the task description: ");
    string task = Console.ReadLine();
    tasks.Add(task);
    completionStatus.Add(false);
    Console.WriteLine("Task added successfully.");
}

// Method to view all tasks
void ViewTasks(List<string> tasks, List<bool> completionStatus)
{
    if (tasks.Count == 0)
    {
        Console.WriteLine("No tasks to show.");
    }
    else
    {
        Console.WriteLine("\nTasks:");
        for (int i = 0; i < tasks.Count; i++)
        {
            string status = completionStatus[i] ? "Completed" : "Incomplete";
            Console.WriteLine($"{i + 1}. {tasks[i]} - {status}");
        }
    }
}

// Method to mark a task as complete
void MarkTaskComplete(List<string> tasks, List<bool> completionStatus)
{
    ViewTasks(tasks, completionStatus);
    Console.Write("Enter the task number to mark as complete: ");
    int taskNumber = Convert.ToInt32(Console.ReadLine());

    if (taskNumber > 0 && taskNumber <= tasks.Count)
    {
        completionStatus[taskNumber - 1] = true;
        Console.WriteLine("Task marked as complete.");
    }
    else
    {
        Console.WriteLine("Invalid task number.");
    }
}
```

#### Debug

```txt
--- To-Do List Application ---
1. Add Task
2. View Tasks
3. Mark Task as Complete
4. Exit
Choose an option: 1
Enter the task description: Clean kitchen
Task added successfully.
--- To-Do List Application ---
1. Add Task
2. View Tasks
3. Mark Task as Complete
4. Exit
Choose an option: 1
Enter the task description: Grade homework
Task added successfully.
--- To-Do List Application ---
1. Add Task
2. View Tasks
3. Mark Task as Complete
4. Exit
Choose an option: 2

Tasks:
1. Clean kitchen - Incomplete
2. Grade homework - Incomplete
--- To-Do List Application ---
1. Add Task
2. View Tasks
3. Mark Task as Complete
4. Exit
Choose an option: 3

Tasks:
1. Clean kitchen - Incomplete
2. Grade homework - Incomplete
Enter the task number to mark as complete: 1
Task marked as complete.
--- To-Do List Application ---
1. Add Task
2. View Tasks
3. Mark Task as Complete
4. Exit
Choose an option: 2

Tasks:
1. Clean kitchen - Completed
2. Grade homework - Incomplete
--- To-Do List Application ---
1. Add Task
2. View Tasks
3. Mark Task as Complete
4. Exit
Choose an option: 4
Exiting application.
```

---

### Tips, Tricks, and Reflection

- How did dividing the tasks of the To-Do List app into smaller methods help you organize your code?
- Did you find it easier to test and debug individual methods, or did you prefer keeping everything in one method? Why?
- How do you see the role of methods and functions in larger programs? Do you think organizing code into methods will be useful for future projects?