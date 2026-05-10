# Module 35 Skills Assessment: Ready for React?

This exam is designed to test your knowledge of the fundamental JavaScript concepts covered in Module 35. Mastering these is crucial before jumping into React.

---

## Exam Information
- **Total Marks**: 50
- **Time Limit**: 60 Minutes
- **Difficulty**: Intermediate (React Readiness Level)
- **Passing Mark**: 35 (70%)

---

## Part 1: Theory Questions (10 Marks)
*Answer each question briefly (1 mark each).*

1.  What is the primary difference between `.map()` and `.forEach()`?
2.  Explain what the Spread Operator (`...`) does when used to copy an array.
3.  How do you use object destructuring to extract the property `name` from an object `student`?
4.  List at least 5 "falsy" values in JavaScript.
5.  What is the purpose of the Ternary Operator? Provide a small syntax example.
6.  Compare `localStorage` vs `sessionStorage`. What is the main difference in their data persistence?
7.  Which built-in JavaScript method is used to convert an object into a JSON string?
8.  What does the `.find()` method return if no element in the array matches the provided condition?
9.  How does the logical `&&` (AND) operator work as a shortcut in JavaScript?
10. Why are template strings (backticks) often preferred over standard quotes for string concatenation?

---

## Part 2: Practical Coding Tasks (40 Marks)
*Solve the following tasks (8 marks each). Write your code below each task.*

### Task 1: Destructuring & Template Strings
Given the following object:
```javascript
const user = {
    id: 5001,
    name: 'Mahedy',
    info: {
        address: 'Dhaka, Bangladesh',
        phone: '01700000000'
    },
    favorites: ['Coding', 'Gaming', 'Reading']
};
```
1. Use destructuring to extract `name`, the `address` (from inside info), and the **second** favorite item (`Gaming`).
2. Use a **Template String** to print: `"User Mahedy lives in Dhaka, Bangladesh and loves Gaming."`

### Task 2: Power of Array Methods
Given the following array of objects:
```javascript
const products = [
    { id: 1, name: 'Laptop', price: 1200, brand: 'Dell' },
    { id: 2, name: 'Phone', price: 800, brand: 'iPhone' },
    { id: 3, name: 'Tablet', price: 500, brand: 'Samsung' },
    { id: 4, name: 'Watch', price: 200, brand: 'Apple' }
];
```
1. Use `.map()` to create an array containing only the names of all products.
2. Use `.filter()` to get all products with a price greater than 500.
3. Use `.find()` to get the product object whose brand is `'Samsung'`.

### Task 3: Arrow Functions & Spread Operator
1. Write an arrow function `calculateVolume` that takes `length`, `width`, and `height` as parameters and returns the volume.
2. Given the array `const dimensions = [10, 5, 2];`, call your `calculateVolume` function by **spreading** the `dimensions` array into it.

### Task 4: Logical Shortcuts & Ternary
1. Use a **Ternary Operator** to check if a variable `score` is 80 or more. If yes, set `grade` to `'A'`, otherwise `'B'`.
2. Use the **Logical OR (`||`)** operator to set a variable `status` to a default value of `'Guest'` if a variable `username` is null or undefined. (Do this in one line).

### Task 5: JSON & LocalStorage
1. You have an object `const settings = { theme: 'dark', notifications: true };`. Write the code to save this object into `localStorage` with the key `'app_settings'`. (Hint: Don't forget JSON stringify).
2. Write the code to retrieve `'app_settings'` from `localStorage` and convert it back into a JavaScript object.

---

## Submission Instructions
1.  Create a new file (e.g., `my_answers.js` or `my_answers.md`).
2.  Write down your answers for both Part 1 and Part 2.
3.  Once finished, tell me: **"I have completed the exam. Please judge my answers."** and paste your code/answers here.

**Good luck! You've got this! 🚀**
