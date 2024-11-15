import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.DBPORT,
});

pool.on("connect", () => {
    console.log("⚙️ Connection pool established with Database")
});

export default pool;