import express from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// // DB connection
// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// db.connect((err) => {
//   if (err) {
//     console.error("DB connection failed:", err);
//     return;
//   }
//   console.log("Connected to MySQL");
// });

// // Routes
// app.get("/users", (req, res) => {
//   db.query("SELECT * FROM users", (err, results) => {
//     if (err) throw err;
//     res.json(results);
//   });
// });

// app.post("/users", (req, res) => {
//   const { name, email } = req.body;
//   db.query(
//     "INSERT INTO users (name, email) VALUES (?, ?)",
//     [name, email],
//     (err, result) => {
//       if (err) throw err;
//       res.json({ message: "User added", userId: result.insertId });
//     }
//   );
// });

app.set("/lo")
// Start server
app.listen(process.env.PORT, () => {
  console.log(`Backend running on http://localhost:${process.env.PORT}`);
});
