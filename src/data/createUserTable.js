import pool from "../config/db.js";

const createUserTable = async () => {
    await pool.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE
        )
    `);
    try {
        console.log("✅ User table created successfully");
    } catch (error) {
        console.error("🚫 Error creating user table:", error);
    }
};

export default createUserTable;