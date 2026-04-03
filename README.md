# 🧠 AI Agent Run Dashboard

This project simulates an **AI agent workflow** that processes a user query by executing a series of sequential and parallel tasks with real-time updates.

The goal is to visualize how an AI system thinks, executes, handles failures, and produces a final output.

---

## 🚀 Live Demo

🔗 https://agent-run-panel.netlify.app/

---

## ✨ Features

- ⏱️ Simulated real-time task execution using timed events
- 🔄 Sequential and parallel task handling
- ⚠️ Failure, retry, and cancellation states
- 📊 Clear task progress with logs
- 🧾 Final synthesized output displayed separately
- 🎨 Clean UI built with Tailwind CSS

---

## 🧩 How It Works

1. A run starts with a user query  
2. Initial task executes (sequential)  
3. Multiple tasks run in parallel  
4. One task demonstrates failure → retry → cancellation  
5. Successful tasks complete  
6. Final report is generated and displayed  

---

## 🧠 Design Highlights

- Used simple event simulation (`setTimeout`) to mimic streaming behavior  
- Grouped parallel tasks visually for clarity  
- Focused on readability and structured UI  
- Designed from an **analyst perspective** (clarity over complexity)

---

## 📁 Project Structure
```bash
src/
├── components/
│ ├── RunHeader.jsx
│ ├── TaskCard.jsx
│ └── FinalOutput.jsx
├── App.jsx
└── index.css
```
---

## ⚙️ How to Run Locally

Follow these steps to run the project on your machine:

1. Clone the repository

```bash
git clone <your-repo-link>
cd agent-run-panel

2. Install dependencies
npm install

3. Start the development server
npm run dev

4. Open in browser
http://localhost:5173
```

---
## 🛠️ Tech Stack
- React (Vite)
- Tailwind CSS
- JavaScript (ES6)
---

##📌 Notes
This project uses mock data and simulated timing
No backend or API integration is used
Focus is on UI behavior and task flow visualization
---

🙌 Author
Krish Pawar