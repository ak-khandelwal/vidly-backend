# 📽️ Vidly - Video Sharing Platform Backend

Vidly is a full-featured video sharing backend API, inspired by platforms like YouTube. Built using **Express.js**, this server handles everything from video upload to storage and metadata management. It’s designed to work seamlessly with a frontend built using **React + Vite**.

---

## 🚀 Tech Stack

* **Node.js** + **Express.js**
* **Multer** - for handling multipart file uploads
* **Cloudinary** - for cloud-based video/image storage
* **MongoDB** (via Mongoose) - as the primary database
* **Vite** - for the frontend (React based, hosted separately)
* **CORS**, **dotenv**, and more utility middlewares

---

## 📁 Features

* ✅ User authentication (login/register)
* 📤 Upload videos with thumbnail support
* ☁️ Uploads are stored on **Cloudinary**
* 🔎 Fetch videos by ID, category, or uploader
* 🔄 Like, dislike, and view count APIs
* 📝 Commenting and reply functionality
* 🧾 Pagination and filtering support
* 🔐 Secured endpoints with JWT middleware

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add the following:

```env
PORT=8000
DEVELOPMENT=true
MONGO_URI = 
ACCESS_TOKEN_SECRET = 
ACCESS_TOKEN_EXPIRY = 1d
REFRESH_TOKEN_SECRET=
REFRESH_TOKEN_EXPIRY=10d
CLOUDINARY_SECRET_KEY=
CLOUDINARY_API_KEY=
CLOUDINARY_CLOUD_NAME=
FRONTEND_URL=front_end_url_with_http_or_https
#local
COOKIE_SAMESITE=Lax
COOKIE_SECURE=false
COOKIE_HTTPONLY=true
# prod
# COOKIE_SAMESITE=None
# COOKIE_SECURE=true
# COOKIE_HTTPONLY=true
```

---

## 🛠️ Setup & Run

1. Clone the repo:

```bash
git clone https://github.com/ak-khandelwal/vidly-backend.git
cd vidly-backend
```

2. Install dependencies:

```bash
npm install
```

3. Add your `.env` file

4. Run in development:

```bash
npm run dev
```

---

## 🌐 API Endpoints (Sample)

* `POST /api/v1/auth/register` – User Registration
* `POST /api/v1/auth/login` – User Login
* `POST /api/v1/videos/upload` – Upload a new video
* `GET /api/v1/videos` – Get all videos (with pagination)
* `GET /api/v1/videos/:id` – Get single video by ID

---

## 📦 Deployment

This backend can be easily deployed using services like:

* **Render.com**
* **Railway**
* **Heroku** (with custom build packs)

Use services like **Netlify** or **Vercel** for the React frontend.

---

## 🧠 License

MIT © 2025 Aryan Khandelwal

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 🙌 Acknowledgements

* Cloudinary for media management
* MongoDB for free tier hosting
* Inspiration: YouTube
