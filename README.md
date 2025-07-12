# 🧠 AI Image Generator

This is a full-stack MERN (MongoDB, Express, React, Node.js) application that uses **Stability AI** to generate images from prompts and allows users to **post and share** those images via Cloudinary.

## ✨ Features

- 🧾 Generate AI images from prompts using Stability AI API
- 👤 Submit your name and prompt
- 📸 Upload & store generated images using Cloudinary
- 🖼️ Browse all posts from MongoDB
- 🌐 Responsive and clean frontend with React & styled-components
- 🔐 Environment variables secured with `.env`

---

## 🚀 Technologies Used

**Frontend:**
- React
- Styled Components
- React Router DOM
- Axios

**Backend:**
- Node.js
- Express.js
- MongoDB + Mongoose
- Cloudinary (Image hosting)
- Stability AI (Image generation)
- dotenv for environment variables

---

## 📦 Folder Structure

image_generator/
├── client/ # React frontend
├── server/ # Express backend
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── index.js
├── .env
└── README.md


---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Anand05-Dev/image_generator.git
cd image_generator
--- 
#### 2. Setup Server
cd server
npm install

Create .env file in /server:

MONGODB_URL=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
STABILITY_API_KEY=your_stability_api_key
Start the server:

npm run dev
---
3. Setup Client
cd ../client
npm install
npm start

----
🌍 API Endpoints

Method	Endpoint	Description
POST	/api/generateImage/	Generate image from prompt
GET	/api/post/	Get all posts
POST	/api/post/	Create new post

🔐 Environment Safety

.env file is listed in .gitignore to avoid exposing secrets.

📄 License

This project is licensed under the MIT License.

👨‍💻 Author

Anand Maharia
📎 GitHub Profile

---
