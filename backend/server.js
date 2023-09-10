import { Express } from "express";
import cors from 'cors';
import workout from './api/workoutRoute.js';
const app=express()
app.use(cors())
app.use(express.json())