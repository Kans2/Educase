# PopX Account App

A simple React application for user account management with signup, login, and profile functionality.  
The app uses **Redux Toolkit** for state management and supports updating profile information including a profile picture upload.

---

## 🚀 Features
- User Signup (stores user data in Redux)
- User Login (validates credentials against Redux state)
- Profile Page (displays user details from Redux)
- Profile Picture Upload (preview & update instantly)
- Mobile-first UI (375px container layout)

---

## 🛠️ Tech Stack
- React
- Redux Toolkit
- React Router DOM
- React Icons
- CSS (for styling)

---

## 📂 Project Structure
src/
├── assets/ # Images & static files
├── components/ # Reusable components (Profile, Signup, Login, Landing, etc.)
├── slices/ # Redux slices (userSlice.js)
├── store/ # Redux store (store.js)
├── App.js # Main App component with routes
├── index.js # Entry point
└── styles/ # CSS files

yaml
Copy code

---

## ⚡ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/popx-account-app.git
cd popx-account-app
2. Install dependencies
bash
Copy code
npm install
3. Start the development server
bash
Copy code
npm start
App will run at: http://localhost:3000

📸 Screens
Landing Page – Choose to Signup or Login

Signup Page – Create account with name, email, password, etc.

Login Page – Login using registered credentials

Profile Page – View and update user info + upload profile picture
