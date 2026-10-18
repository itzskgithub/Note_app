
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth.routes.js';
import connectDB from './db.js';

const app = express();



app.use(
  cors({
    origin: (origin, callback) => {
      if (
        !origin ||
        origin === 'http://localhost:5173' ||
        /^https:\/\/noteappfrontend(-[a-z0-9]+)?-itzskgithubs-projects\.vercel\.app$/.test(origin) ||
        origin === 'https://noteappfrontend-ten.vercel.app'
      ) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);



app.use(express.json());
app.use('/api/auth', authRouter);

await connectDB();

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
