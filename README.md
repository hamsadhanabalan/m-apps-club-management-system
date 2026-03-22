# m-apps-club-management-system

Overview

The MAPPS Club Management System is a full-stack web application designed to streamline the management of student activities including courses, events, quizzes, and certifications.

It provides a role-based dashboard system for:

🎓 Students
👨‍💼 Admins
👑 Super Admin

The platform enhances student engagement, tracks progress, and digitizes club operations efficiently.
STUDENT


<img width="919" height="434" alt="image" src="https://github.com/user-attachments/assets/dac9a541-5792-4d0f-975b-61935a18b4e8" />
ADMIN


<img width="934" height="430" alt="image" src="https://github.com/user-attachments/assets/258bfa8b-cbbd-4a92-a564-b553f846fcd9" />
SUPER ADMIN


<img width="1897" height="811" alt="image" src="https://github.com/user-attachments/assets/f6ed38f9-1b57-4e83-9f11-86b65e1aab29" />


📦 Dependencies Required
🔧 Core Dependencies

Install these using:

npm install next react react-dom
🎨 UI & Styling
npm install tailwindcss postcss autoprefixer
npm install framer-motion
npm install lucide-react
🗄️ Database (MongoDB)
npm install mongoose
🔐 Authentication
npm install next-auth
npm install bcryptjs
🌐 API & Utilities
npm install axios

(optional but useful for API calls instead of fetch)

⚙️ Dev Dependencies (IMPORTANT)
npm install -D typescript @types/node @types/react @types/react-dom

If using Tailwind setup:

npx tailwindcss init -p
📁 Environment Variables

Create a .env.local file:

MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
▶️ Run the Project
npm run dev

