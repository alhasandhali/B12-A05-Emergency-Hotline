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
