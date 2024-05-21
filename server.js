import express from 'express';
import dotenv from 'dotenv';
import authRoutes from "./src/routes/authRoutes.js"
import userRoutes from "./src/routes/userRoutes.js"
import connection from './src/config/mongo.js';
import cors from "cors"
import getUserRouter from './src/routes/getUsers.js';
import resourceRouter from './src/routes/resourceRoutes.js';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connection()

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use("/users", getUserRouter);
app.use('/resources', resourceRouter);
app.use('/tasks', resourceRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
