---
divStyles: "container mt-4"
layout: "../../../../layouts/Layout.astro"
title: "Unity 2D Fundamentals - Player Controller Recipes"
---

[← Back](/courses/unity-2d-fundamentals/)

## Player Controller Recipe
### Flip Sprite Left or Right when Moving
---

<div class="container">
    <div class="row">
        <div class="col-sm-12 col-md-6">
            <video src="/courses/unity-2d-fundamentals/flip-sprite-recipe.mp4" width="100%" autoplay loop controls></video>
        </div>
    </div>
</div>



```csharp
// Instance variables
Rigidbody2D rigidbody;
SpriteRenderer spriteRenderer;

// Start method
rigidbody = GetComponent<Rigidbody2D>();
spriteRenderer = GetComponent<SpriteRenderer>();

// Update method
if (rigidbody.velocity.x < 0)
{
    spriteRenderer.flipX = true;
}
else if (rigidbody.velocity.x > 0)
{
    spriteRenderer.flipX = false;
}
```
