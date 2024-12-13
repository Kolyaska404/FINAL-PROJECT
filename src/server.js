const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

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
    const {
        service,
        kind,
        goal,
        pages,
        functional,
        budget,
        material,
        url,
        yes_no,
        username,
        marketName,
        phone
    
    } = req.body
    const sql = `INSERT INTO submissions (service, type, goal, pages, functionality, budget, material, url, name, store_name, phone) VALUES (?,?,?,?,?,?,?,?,?,?,?)`
    const values = [service, kind, goal, pages, functional, budget, material, url, yes_no, username, marketName, phone]
    
    db.query(sql, values, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message});
        }
        res.status(200).json({ message: 'Submission successfull!'});
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})