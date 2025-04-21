<div align="center" id="top">
  <img src="./.github/ai-canteen.gif" alt="AI-Powered Smart Canteen" />

  &#xa0;

  <!-- <a href="https://aicanteen.netlify.app">Demo</a> -->
</div>

<h1 align="center">🍽️ AI-Powered Smart Canteen Backend</h1>

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0;
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Tech Stack</a> &#xa0; | &#xa0;
  <a href="#books-dsa--oops">DSA & OOPS</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Getting Started</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/AadiHaldar" target="_blank">Author</a>
</p>

<br>

## :dart: About ##

This is a full-stack backend system for a smart AI-driven canteen app, where users can:
- Get AI-powered food recommendations 🧠🍱
- Set and manage their monthly food budget 💸
- Order meals through a seamless digital flow 🚶‍♂️
- Scan QR codes for quick payment 📱

Admins can manage food items, monitor orders, and update meal details. Users get a personalized experience through diet-aware suggestions powered by machine learning.

The backend uses **Node.js** for business logic and **Flask** for AI food classification. It also flaunts **DSA and OOPs concepts** to win hearts (and marks) in your final evals 🚀

---

## :sparkles: Features ##

### Admin Side:
:heavy_check_mark: Add / Edit / Delete menu items  
:heavy_check_mark: Set serving sizes and calorie info  
:heavy_check_mark: Generate QR codes for payments  
:heavy_check_mark: Track orders and update status  
:heavy_check_mark: View user orders and feedback

### User Side:
:heavy_check_mark: View menu with prices & dietary info  
:heavy_check_mark: Get AI-based food recommendations  
:heavy_check_mark: Set monthly food budget  
:heavy_check_mark: Order and pay via QR & Transaction ID  
:heavy_check_mark: View order history  
:heavy_check_mark: Give feedback for sentiment analysis

---

## :rocket: Tech Stack ##

- 🟩 [Node.js](https://nodejs.org/)
- 🐍 [Python Flask](https://flask.palletsprojects.com/) (AI Layer)
- 🔐 [JWT Auth](https://jwt.io/)
- 🧠 [Custom AI Model](https://github.com/AadiHaldar/ai-flask-recommender)
- 🛒 [MongoDB / JSON DB (Mock)]
- 📦 [Express.js]
- ↺ [Axios] (for API communication)

---

## :books: DSA & OOPS ##

| Concept          | Where It's Used           | Why It Slaps                 |
|------------------|----------------------------|------------------------------|
| **Stack**        | Undo cart actions          | CTRL+Z in real life          |
| **Queue**        | Serving orders             | FIFO like cafeteria lines    |
| **Fenwick Tree** | Budget tracking            | Real-time total spent        |
| **Classes**      | Cart, Order, Budget        | Modular & reusable af        |
| **Arrays**       | Cart / Queue / Menu items  | Simple but essential         |
| **Encapsulation**| Protect internal data      | Because data privacy matters |

---

## :white_check_mark: Requirements ##

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/)
- [Python 3.x](https://www.python.org/)
- [Flask](https://flask.palletsprojects.com/en/2.2.x/installation/)

---

## :checkered_flag: Getting Started ##

```bash
# Clone the project
$ git clone https://github.com/AadiHaldar/ai-canteen-backend

# Go to project folder
$ cd ai-canteen-backend

# Install backend dependencies
$ npm install

# Run the Node server
$ npm start

# Flask AI runs separately:
$ cd flask-recommender && python app.py
```

---

## :triangular_flag_on_post: System Flow Chart

```text
USER SIDE:
[User] -> [Login/Register] -> [View Menu] -> [AI Recommender (Flask)] -> [Cart] -> [QR Pay] -> [Order Placed] -> [Order History]

ADMIN SIDE:
[Admin] -> [Login] -> [Manage Menu] -> [QR Generator] -> [Track Orders] -> [Feedback Monitor]
```

---

## :memo: License ##

MIT License - see [LICENSE](LICENSE.md)

Made with ❤️ by <a href="https://github.com/AadiHaldar" target="_blank">Aadi Haldar</a>.

<a href="#top">Back to top</a>

