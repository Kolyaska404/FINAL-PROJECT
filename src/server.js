import express from "express";
import mysql from 'mysql'
import bodyParser from "body-parser";
import cors from 'cors'

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 4200;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'Kolledge',
    password: 'Kolya77732',
    database: 'mydb'
});

db.connect((err) => {
    if (err) {
        throw err
    }
    console.log('MySQL Connected...')
})

app.post('/submit', (req, res) => {
    const formData = req.body;
    const sql = 'INSERT INTO forms SET ?';
    
    db.query(sql, formData, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message});
        }
        res.status(201).json({ id: result.insertId, message: 'Form submitted successfully' });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})