import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;


// Middlewares
app.use(express.json());
app.use(cors());

// Routes
import userRoutes from "./routes/userRoutes.js";
app.use("/api/v1", userRoutes);


// Error Handling
import errorHandling from './middlewares/errorHandler.js';
app.use(errorHandling);

// Create table before starting the server
import createUserTable from './data/createUserTable.js';
createUserTable();

// Test Postgres Connection
app.get("/", async (req, res) => {
    console.log("Start");
    const result = await pool.query("SELECT current_database()");
    console.log("result", result.rows);
    res.send(`The database name is : ${result.rows[0].current_database}`);
});


app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`)
});