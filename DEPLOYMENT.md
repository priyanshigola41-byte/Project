# Deployment Guide - Job Portal MERN Application

This guide will help you deploy the Job Portal application using free hosting services:
- **Backend**: Render (Node.js)
- **Frontend**: Vercel (React/Vite)
- **Database**: MongoDB Atlas (already configured)

## Prerequisites

- GitHub account
- Render account (free)
- Vercel account (free)
- MongoDB Atlas account (already configured)

## Backend Deployment (Render)

### 1. Prepare Backend for Production

The backend is already configured with:
- MongoDB Atlas connection
- Cloudinary for file uploads
- Environment variables

### 2. Deploy to Render

1. **Push your code to GitHub** (if not already done)
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/job-portal.git
   git push -u origin main
   ```

2. **Create a new Web Service on Render**
   - Go to [dashboard.render.com](https://dashboard.render.com)
   - Click "New" → "Web Service"
   - Connect your GitHub repository
   - Select the `Job-Board-MERN-main/backend` folder
   - Configure build settings:
     ```
     Build Command: npm install
     Start Command: npm start
     ```

3. **Add Environment Variables** in Render dashboard:
   ```
   PORT=5001
   MONGO_URI=mongodb+srv://priyanshigola41_db_user:rkQEmwuaOMVXPkZl@cluster0.11regoo.mongodb.net/?appName=Cluster0
   FRONTEND_URL=https://your-frontend-url.vercel.app
   JWT_SECRET_KEY=mysecretkey123456
   JWT_EXPIRE=7d
   COOKIE_EXPIRE=7
   CLOUDINARY_CLIENT_NAME=u6c1vz8b
   CLOUDINARY_CLIENT_API=295234923361199
   CLOUDINARY_CLIENT_SECRET=iyWHTwfhsP2IwJFFD8EXXTv_FFM
   ```

4. **Deploy** - Click "Create Web Service"
   - Render will provide a URL like: `https://your-backend.onrender.com`

## Frontend Deployment (Vercel)

### 1. Prepare Frontend for Production

The frontend has been configured with:
- Environment variable support (`.env` file)
- Axios instance for API calls
- Vite build configuration

### 2. Deploy to Vercel

1. **Update Frontend Environment Variable**
   - Edit `frontend/.env`:
     ```
     VITE_API_URL=https://your-backend.onrender.com
     ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Select the `frontend` folder as root directory
   - Configure build settings:
     ```
     Framework Preset: Vite
     Build Command: npm run build
     Output Directory: dist
     ```

3. **Add Environment Variable** in Vercel dashboard:
   ```
   VITE_API_URL=https://your-backend.onrender.com
   ```

4. **Deploy** - Click "Deploy"
   - Vercel will provide a URL like: `https://your-frontend.vercel.app`

## Post-Deployment Configuration

### Update Backend CORS Configuration

After getting your Vercel URL, update the backend CORS settings:

1. Go to your Render dashboard
2. Update the `FRONTEND_URL` environment variable:
   ```
   FRONTEND_URL=https://your-frontend.vercel.app
   ```
3. Redeploy the backend (Render will auto-deploy on environment variable changes)

### Update Frontend API URL

1. Go to your Vercel dashboard
2. Update the `VITE_API_URL` environment variable:
   ```
   VITE_API_URL=https://your-backend.onrender.com
   ```
3. Redeploy the frontend

## Testing the Deployment

1. **Test Backend API**
   - Visit `https://your-backend.onrender.com/api/v1/user/getuser`
   - Should return a 401 or user data (expected behavior)

2. **Test Frontend**
   - Visit `https://your-frontend.vercel.app`
   - Try registering and logging in
   - Test job posting and application features

## Troubleshooting

### Common Issues

1. **CORS Errors**
   - Ensure `FRONTEND_URL` in backend matches your Vercel URL exactly
   - Check that the backend CORS middleware is configured correctly

2. **Database Connection Issues**
   - Verify MongoDB Atlas connection string is correct
   - Ensure IP whitelist in MongoDB Atlas allows all IPs (0.0.0.0/0)

3. **Environment Variables Not Loading**
   - Ensure variable names match exactly (case-sensitive)
   - Restart the service after updating environment variables

4. **Build Failures**
   - Check Render/Vercel build logs
   - Ensure all dependencies are in `package.json`
   - Verify Node.js version compatibility

## Local Development

To run the project locally after deployment:

### Backend
```bash
cd backend
npm install
cp config.env .env
npm run dev
```

### Frontend
```bash
cd frontend
npm install
cp .env.example .env
# Update VITE_API_URL to http://localhost:5001
npm run dev
```

## Cost Summary

- **Render**: Free tier (limited to 750 hours/month)
- **Vercel**: Free tier (unlimited deployments)
- **MongoDB Atlas**: Free tier (512 MB storage)
- **Cloudinary**: Free tier (limited bandwidth)

Total monthly cost: **$0**

## Additional Resources

- [Render Documentation](https://render.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com)
