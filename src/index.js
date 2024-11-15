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



// Error Handling


// Test Postgres Connection
app.get("/", async (req, res) => {
    try {
        const result = await pool.query("SELECT current_database()");
        res.send(`The database name is : ${result.rows[0].current_database}`);
    } catch (error) {
        console.log(error);
        res.json(json({ error: "Internal Server Error" }));
    }
})


app.listen(PORT, () => {
    console.log(`🚀Server is running on port ${PORT}`)
});