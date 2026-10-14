# Student Task Manager 🎓

A modern, responsive React application built for students to organize coursework, track study goals, and manage academic assignments. Built for **Ostad Batch 10 - Module 25 Assignment**.

---

## 🚀 Live Demo & Features

### Core Required Features
1. **Display Tasks**: Displays tasks cleanly with titles, categories, priorities, and status badges (`Completed` vs `Pending`).
2. **Add New Task**: Interactive task input with an **"Add Task"** button, plus optional priority & category selection.
3. **Complete a Task**: Interactive checkbox button to toggle a task between completed and pending, featuring dynamic strike-through styling.
4. **Delete a Task**: Allows removal of any task with a confirmation dialog.
5. **Conditional Rendering**: Displays **"No tasks available"** with a friendly empty state illustration when the list is empty.
6. **Task Statistics**: Real-time counter displaying **Total Tasks** and **Completed Tasks**.
7. **Form Validation**: Strict validation preventing submission of empty or whitespace-only tasks, with descriptive error messages.

---

### ⭐ Bonus Tasks Implemented (100% Complete)
- **Task Filters**: Filter tasks dynamically by **All**, **Completed**, and **Pending** with item count badges on each tab.
- **Confirmation Message Before Deletion**: Interactive modal dialog prompting *"Are you sure you want to delete this task?"* before removing tasks.
- **Friendly Fallback UI (Error Boundary)**: Custom React `ErrorBoundary` component displaying a friendly fallback UI with a *"Try Again"* button if task rendering ever fails (includes a *"Test Fallback UI"* button in the toolbar for instant grading verification).
- **Reusable Card Component**: Created `Card.jsx` that utilizes the React `children` prop and is used across stats, forms, and empty states.
- **Remaining Tasks Counter**: Real-time counter tracking remaining pending tasks, alongside a completion percentage progress bar.
- **Dark/Light Mode**: Full theme toggle with persistent preferences.
- **Local Storage Persistence**: Preserves tasks across page reloads with a one-click *"Reset Samples"* button.

---

## 🛠️ Tech Stack

- **React 19**
- **Vite**
- **Vanilla CSS** (Custom Design System with tokens, responsive layouts, glassmorphism, and smooth micro-animations)
- **Lucide React** (Clean icons)

---

## 📁 Project Structure

```
├── public/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Card.jsx              # Reusable Card component using children prop
│   │   │   └── ErrorBoundary.jsx     # Friendly Fallback UI for rendering errors
│   │   ├── DeleteConfirmModal.jsx    # Delete confirmation dialog modal
│   │   ├── Header.jsx                # Header with Dark/Light theme toggle
│   │   ├── TaskFilter.jsx            # All, Completed, Pending filter tabs
│   │   ├── TaskForm.jsx              # Add task form with empty validation
│   │   ├── TaskItem.jsx              # Individual task with checkbox, badges, delete
│   │   ├── TaskList.jsx              # Task list & "No tasks available" empty state
│   │   └── TaskStats.jsx             # Total, Completed, and Remaining task stats
│   ├── App.css                       # Utility styles
│   ├── App.jsx                       # Main application state and composition
│   ├── index.css                     # Design system tokens and styling
│   └── main.jsx                      # React root entry point
├── index.html                        # HTML entry point with Plus Jakarta Sans font
├── package.json
└── README.md
```

---

## 💻 Getting Started Locally

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd student-task-manager
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```
