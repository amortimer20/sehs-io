---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: "C# Fundamentals Part 2 Summary"
---

[← Back](/c-sharp-fundamentals/)

## C# Fundamentals Part 2 Summary

---

### Boolean Logic

- A Boolean data type represents the the values `true` and `false`.
- Like arithmetic, Boolean expressions have a number of operators for performing comparisons and logic operations.
    - `==`  Equality
    - `!=`  Inequality
    - `>`   Greater than
    - `<`   Less than
    - `>=`  Greater than or equal to
    - `<=`  Less than or equal to
    - `&&`  Logical AND
    - `||`  Logical OR
    - `!`   Logical Negation (Not)

### Selection Statements

- Selection statements allow a program to make decisions and execute different sections of code based on conditions.
    - The `if` statement will execute a block of code if the specified condition is true.
    - The `else if` can follow an if statement. It can provide an additional condition to check if the if statement condition is false. You can have multiple `else if` statements chained together.
    - The `else` statement executes a block of code if none of the proceeding `if` or `else if` conditions are true. The `else` statement does not require a condition to be specified.

### Iteration Statements

- Iteration statements repeatedly execute a block of code as long as a specified condition is true. Iteration can also be referred to as _looping_.

- The `while` loop will repeatedly execute a block of code as long as the specified condition remains true. While loops are typically used when the number of iterations are not predetermined.
- The `for` loop executes a block of code a set number of times based on three statements: the initialization, condition, and the final expression, which is some increment/decrement operation.
- A loop _terminates_ when it has finished executing its iterations.
- A code block associated with a loop is referred to as the _loop body_.
- A sentinel value is a special value used to terminate a loop.

### Nesting

- Nesting to placing one control structure, such as an if statement or loop, inside another, allowing for complex decision-making and repeated actions within repeated actions or conditions.