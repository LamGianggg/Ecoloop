const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json()); // 👈 BẮT BUỘC

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'ecoloop'
});

app.post('/save', (req, res) => {
  console.log(">>> API CALLED");
  console.log("BODY:", req.body);

  const { item, category } = req.body;

  const sql = `
    INSERT INTO waste_logs (item_name, category, count)
    VALUES (?, ?, 1)
    ON DUPLICATE KEY UPDATE count = count + 1
  `;

  db.query(sql, [item, category], (err, result) => {
    if (err) {
      console.error("DB ERROR:", err);
      return res.status(500).send("DB error");
    }

    console.log(">>> SAVED");
    res.send("OK");
  });
});

app.listen(3000, () => console.log("Server running"));