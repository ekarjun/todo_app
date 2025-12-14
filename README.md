# 📝 To-Do App (Full Stack)

A simple yet production-ready **To-Do List application** built to learn real-world app development using **Python (FastAPI)** for the backend and **HTML/CSS/JavaScript** for the frontend.

This project demonstrates:

* Clean backend architecture
* REST API design
* Frontend–backend integration
* Proper CORS handling for production
* A foundation that can be deployed or extended into a mobile app

---

## 🚀 Features

* Create, read, update, and delete tasks (CRUD)
* Mark tasks as completed
* Persistent storage using SQLite
* RESTful API with FastAPI
* Browser-based frontend using Vanilla JS
* CORS configured correctly for development and production

---

## 🏗️ Project Structure

```
todo_app/
│
├── todo_backend/
│   ├── main.py          # FastAPI entry point
│   ├── database.py      # Database connection & session
│   ├── models.py        # SQLAlchemy models
│   ├── schemas.py       # Pydantic schemas
│   ├── crud.py          # Database operations
│   └── requirements.txt
│
├── todo_frontend/
│   ├── index.html       # UI layout
│   ├── styles.css       # Styling
│   └── app.js           # Frontend logic
│
└── README.md
```

---

## 🧰 Tech Stack

### Backend

* Python 3.8+
* FastAPI
* SQLAlchemy
* SQLite
* Uvicorn

### Frontend

* HTML5
* CSS3
* Vanilla JavaScript (Fetch API)

---

## ⚙️ Backend Setup

### 1️⃣ Create Virtual Environment

```bash
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
```

### 2️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

### 3️⃣ Run Backend Server

```bash
uvicorn main:app --reload
```

Backend will be available at:

```
http://127.0.0.1:8000
```

Swagger API Docs:

```
http://127.0.0.1:8000/docs
```

---

## 🎨 Frontend Setup

### Option 1: Open Directly

Open `index.html` in your browser.

### Option 2: Serve via Local Server (Recommended)

```bash
cd todo_frontend
python -m http.server 5500
```

Then open:

```
http://127.0.0.1:5500
```

---

## 🔐 CORS Configuration

CORS is configured in the backend to:

* Allow local development origins
* Restrict access in production

Example production-safe configuration:

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://yourdomain.com"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["Authorization", "Content-Type"],
)
```

---

## 📡 API Endpoints

| Method | Endpoint    | Description       |
| ------ | ----------- | ----------------- |
| POST   | /tasks      | Create a new task |
| GET    | /tasks      | List all tasks    |
| PUT    | /tasks/{id} | Update task       |
| DELETE | /tasks/{id} | Delete task       |

---

## 🧠 Learning Outcomes

This project helps you understand:

* REST API development with FastAPI
* SQLAlchemy ORM basics
* Separation of concerns (models, schemas, CRUD)
* Frontend API consumption
* CORS and browser security
* Preparing an app for production

---

## 🚀 Future Improvements

* User authentication (JWT)
* Task filtering (All / Active / Completed)
* Task editing UI
* Due dates and reminders
* Deployment (Render / Fly.io / Vercel)
* Convert to mobile app using WebView or Kivy

---

## 📄 License

This project is for learning and personal use. Feel free to modify and extend it.

---

## 🙌 Acknowledgements

Built as a hands-on learning project to understand **full-stack app development with Python**.

Happy coding! 🚀
