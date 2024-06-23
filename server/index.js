import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoute.js';
import authRoutes from './routes/authRoute.js';
import postRoutes from './routes/postRoute.js';
import commentRoutes from './routes/commentRoute.js';
import cookieParser from 'cookie-parser';


const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Connect to Database
connectDB();

// Routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);



app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});


// Starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
