# B12-A05-Emergency-Hotline
# JavaScript DOM & Events – Q&A

## 1. What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector / querySelectorAll`?

- **getElementById**  
  - Selects a single element by its unique `id`.  
  - Always returns **one element** (or `null` if not found).  
  - Example:  
    ```js
    const el = document.getElementById("header");
    ```

- **getElementsByClassName**  
  - Selects **all elements** with a specific class name.  
  - Returns an **HTMLCollection** (live list, auto-updates if DOM changes).  
  - Example:  
    ```js
    const items = document.getElementsByClassName("card");
    ```

- **querySelector**  
  - Selects the **first element** that matches a CSS selector.  
  - Example:  
    ```js
    const el = document.querySelector(".card p");
    ```

- **querySelectorAll**  
  - Selects **all elements** that match a CSS selector.  
  - Returns a **NodeList** (static, does not auto-update).  
  - Example:  
    ```js
    const els = document.querySelectorAll(".card p");
    ```

---

## 2. How do you create and insert a new element into the DOM?

Steps:
1. **Create the element** using `document.createElement()`.
2. **Set attributes / content** like `textContent`, `innerHTML`, `classList`, etc.
3. **Insert it** using `appendChild()`, `append()`, `prepend()`, or `insertBefore()`.

Example:
```js
const newDiv = document.createElement("div");
newDiv.textContent = "Hello World!";
newDiv.classList.add("greeting");

// Insert into body
document.body.appendChild(newDiv);
```
## 3. What is Event Bubbling and how does it work?

Event bubbling is when an event starts from the target element and then moves upward through its parent elements until it reaches the document.  
For example, clicking a `<button>` inside a `<div>` will trigger the `button` click event first, then the `div`, then `body`, and so on.

---

## 4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation is a technique where you attach a single event listener to a parent element instead of multiple child elements. The event bubbles up from the child, and the parent can handle it.  

**Why it’s useful:**
- Saves memory by using fewer listeners.  
- Works for dynamically added child elements.  
- Keeps code cleaner and easier to maintain.

---

## 5. What is the difference between `preventDefault()` and `stopPropagation()` methods?

- **preventDefault()** → Stops the browser’s default action (e.g., stop a link from navigating, stop a form from submitting).  
- **stopPropagation()** → Stops the event from bubbling up or capturing down the DOM tree.  

👉 In short:  
- `preventDefault()` = block default browser behavior.  
- `stopPropagation()` = block event flow in the DOM.

const newDiv = document.createElement("div");
newDiv.textContent = "Hello World!";
newDiv.classList.add("greeting");

// Insert into body
document.body.appendChild(newDiv);
