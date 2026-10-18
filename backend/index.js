import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth.routes.js';
import connectDB from './db.js';

const app = express();

app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'https://noteappfrontend-ten.vercel.app/home',
    ],
  })
);

app.use(express.json());
app.use('/api/auth', authRouter);

await connectDB();

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});