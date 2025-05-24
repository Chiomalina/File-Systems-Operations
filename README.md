# 🧠 Task Management Automation Challenge

Master the art of task management automation with this simple yet powerful Node.js project! Your mission is to develop an application that gathers tasks from one file, extracts their content, and integrates them into another task list—automatically.

## 📋 Challenge Description

Imagine you have two files:

- `tasks.txt` — Contains a list of existing tasks.
- `new-task.txt` — Contains a single new task that needs to be appended to `tasks.txt`.

Your task is to:
1. Read the new task from `new-task.txt`
2. Append it to `tasks.txt`
3. Handle any potential errors during the process

## 🗂️ File Structure
task-manager/
│
├── app.js # Main application script
├── tasks.txt # List of existing tasks
└── new-task.txt # A single new task to add


## 🛠️ Setup Instructions

1. **Prepare Your Workspace**
   - Create a new project folder (e.g., `task-manager`)
   - Open the folder in your preferred code editor

2. **Create Task Files**
   - `tasks.txt` — Populate with the following sample tasks:
     ```
     Teach a goldfish 🐠 to play chess ♟️;
     Build a sandcastle 🏰 in your living room 🛋️;
     Create a song 🎶 using only sounds from nature 🌿.
     ```
   - `new-task.txt` — Insert the new task:
     ```
     Invent a new dance move and perform it in public. 💃🕺.
     ```


## 🛠️ Setup Instructions

1. **Prepare Your Workspace**
   - Create a new project folder (e.g., `task-manager`)
   - Open the folder in your preferred code editor

2. **Create Task Files**
   - `tasks.txt` — Populate with the following sample tasks:
     ```
     Teach a goldfish 🐠 to play chess ♟️;
     Build a sandcastle 🏰 in your living room 🛋️;
     Create a song 🎶 using only sounds from nature 🌿.
     ```
   - `new-task.txt` — Insert the new task:
     ```
     Invent a new dance move and perform it in public. 💃🕺.
     ```

## 🛠️ Setup Instructions

1. **Prepare Your Workspace**
   - Create a new project folder (e.g., `task-manager`)
   - Open the folder in your preferred code editor

2. **Create Task Files**
   - `tasks.txt` — Populate with the following sample tasks:
     ```
     Teach a goldfish 🐠 to play chess ♟️;
     Build a sandcastle 🏰 in your living room 🛋️;
     Create a song 🎶 using only sounds from nature 🌿.
     ```
   - `new-task.txt` — Insert the new task:
     ```
     Invent a new dance move and perform it in public. 💃🕺.
3. **Create `app.js`**
   - This script will read from `new-task.txt` and append its content to `tasks.txt`.

   ```js
   const fs = require("fs").promises;

   fs.readFile("new-task.txt", "utf-8")
     .then((content) => {
       return fs.appendFile("tasks.txt", content + "\n");
     })
     .catch((error) => {
       console.error("Error:", error);
     });



🧰 Tools Used
Node.js

fs.promises module for asynchronous file operations

💡 Learning Outcomes
Reading and writing files using Node.js

Handling asynchronous operations with .then() / .catch()

Error handling in JavaScript



