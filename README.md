<div align="center">

  <h1>🧮 Modern Calculator</h1>
  
  <p>
    A sleek, fully functional calculator web app designed with a <strong>modern dark aesthetic</strong>. 
    It handles basic arithmetic with precision, features a real-time operation display, and includes essential functions like percentage and backspace.
  </p>

  <p>
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  </p>

  <h3>
    <a href="https://andrewtechtips.github.io/project-calculator/">🟣 LIVE DEMO</a>
  </h3>
</div>

<br />

---

## ✨ Key Features

Beyond simple addition, this calculator is built for a smooth user experience:

* **🎨 Stylish Dark UI:** A pleasant color palette featuring deep grays with purple and green accents, designed to reduce eye strain.
* **🔄 Live Operation Display:** Shows the previous number and current operator (e.g., `12 + 5`) so you never lose track of your calculation.
* **🛡️ Smart Error Handling:** Gracefully handles division by zero and limits input length to prevent layout breakage.
* **🔢 Scientific Notation:** Automatically formats result strings that exceed 10 characters using exponential notation (e.g., `1.234e+5`).
* **🔙 Advanced Editing:** Includes a **DEL** (backspace) button to correct mistakes digit-by-digit and a **+/-** toggle for negative numbers.
* **✨ Decimal Precision:** Implements logic to prevent multiple decimal points and rounds long fractions for cleaner results.

---

## 🛠️ How it Works

The application uses **Vanilla JavaScript** to handle logic and state management:

1.  **State Variables:** Keeps track of `currentNum`, `previousNum`, and the selected `operator` string.
2.  **Event Delegation:** Efficiently listens for clicks on number and operator buttons.
3.  **Math Logic:** The `operate()` function parses strings into floats, performs the calculation, and updates the DOM.
4.  **Responsive Layout:** Uses CSS Flexbox and `calc()` to ensure buttons resize perfectly within the container.

---

## 🚀 Getting Started

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/AndrewTechTips/project-calculator.git]
    ```

2.  **Open the project:**
    Navigate to the folder and open `index.html` in your browser.

---

## 📬 Contact

* **LinkedIn:** www.linkedin.com/in/andrei-condrea-b32148346
* **Email:** condrea.andrey777@gmail.com

<p align="center">
    <i>If you find this project helpful, please consider giving it a ⭐!</i>
</p>