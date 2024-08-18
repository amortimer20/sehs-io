---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: "Raspberry Pi Pico Fundamentals 1.1 Hello Pico!"
---

[← Back](/pi-pico-fundamentals/)

## Activity 1.1 Hello Pico!

---

### Instructions

#### Setup

1. In your projects folder, create a new python file named _1-1-onboard-led.py_.

#### Circuit

**Circuit Diagram**

No circuit diagram associated with this activity.

**Circuit Build**

<img src="/courses/pi-pico-fundamentals/onboard-led-gp25-build.png" class="mw-100 my-3"/>

#### Code

```py
from machine import Pin
from utime import sleep

led = Pin(25, Pin.OUT)

while True:
    led.value(1)
    sleep(1)
    print(led.value())
    led.value(0)
    sleep(1)
    print(led.value())
```

#### Test

<video src="/courses/pi-pico-fundamentals/onboard-led-gp25.mp4" controls style="width: 100%; max-width: 640px;"></video>
