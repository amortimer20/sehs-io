---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: "Raspberry Pi Pico Fundamentals 1.2 External LED 1"
---

[← Back](/pi-pico-fundamentals/)

## Activity 1.2 External LED 1

---

### Instructions

#### Setup

1. In your projects folder, create a new python file named _1-2-external-led-1.py_.

#### Circuit

**Circuit Diagram**

No circuit diagram associated with this activity.

**Circuit Build**

<img src="/courses/pi-pico-fundamentals/external-led-1-build.png" class="mw-100 my-3"/>

#### Code

```py
from machine import Pin
from utime import sleep

led = Pin(2, Pin.OUT)

while True:
    led.value(1)
    sleep(1)
    led.value(0)
    sleep(1)
```

#### Debug

INSERT
