# React To-Do List App

A simple and responsive React-based To-Do List application that allows users to:

- ✅ Add tasks
- ❌ Remove tasks
- ✔ Mark tasks as completed
- 🔍 Filter and sort tasks (optional)
- 💾 Save tasks in localStorage for persistence

## 🚀 Features

- Input validation (no empty tasks allowed)
- Dynamic task rendering
- Mark task as complete/incomplete
- Delete tasks
- Optional: Sort tasks by status or name
- Optional: Filter completed/pending tasks
- LocalStorage integration to save tasks

## 🧪 Testing Instructions

1. *Add Task*: Type a task and click "Add". It should appear in the list.
2. *Delete Task*: Click "Delete" button next to any task.
3. *Mark Complete*: Click "Complete"/checkbox to mark it.
4. *Persistence*: Refresh the page – tasks should remain (if using localStorage).
5. *Validation*: Try adding an empty task – it should not be added.

---

## 📦 Setup Instructions (For Reviewers)

```bash
git clone https://github.com/piyushchoudhary054/todo-list.git
cd todo-list-app
npm install
npm run dev
