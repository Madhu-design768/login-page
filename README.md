 # Login Page UI

A simple and professional login page built using **React** and **CSS**. This project is frontend only and is designed with a clean, responsive layout.

## Features

- Professional login page design
- Email and password input fields
- Show/Hide password option
- Remember Me checkbox
- Forgot Password link
- Responsive design for desktop and mobile
- Clean UI using custom CSS
- Built with React functional components and Hooks

## Technologies Used

- React.js
- CSS3
- JavaScript (ES6)
- Lucide React Icons

## Project Structure

```
src/
│── components/
│   ├── Login.jsx
│   └── Login.css
│
├── App.jsx
├── main.jsx
└── index.css
```

## Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Move to the project folder

```bash
cd login-page
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

5. Open your browser and visit

```
http://localhost:5173
```

## How It Works

- User enters email and password.
- Password can be shown or hidden using the eye icon.
- User can select the **Remember Me** checkbox.
- Clicking **Sign In** submits the form.
- Currently, the login data is printed in the browser console using `console.log()`.
- No backend authentication is included.

## Future Improvements

- Connect with backend authentication
- Form validation
- Forgot Password functionality
- User registration page
- API integration
- JWT Authentication
- Dark mode support
