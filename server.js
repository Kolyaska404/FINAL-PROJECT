import express from 'express';
import mysql from 'mysql'
// import { createConnection } from 'mysql';
// import { json } from 'body-parser';
import cors from 'cors';

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    database: 'my_database',
    user: 'root',
})

db.connect((err) => {
    if (err) {
        console.log(err);
    }
    console.log('MySQL Connected...');
});

async function main() {
    app.use(express.json())
    app.post('/api/forms', (req, res) => {
        const formData = req.body;
        const sql = 'INSERT INTO forms SET ?'
        db.query(sql, formData, (err, data) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ id: result.insertId, message: 'Form submitted successfully' });
        })
    })
    app.listen(4200, () => {
        console.log('Server is running on port 4200')
    })
}

main()

// const db = createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: 'my_database'
// });

// db.connect((err) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log('MySQL Connected...')
// })

// app.get('/', (req, res) => {
//     return res.json('Hello world')
// })

// app.post('/api/forms', (req, res) => {
//     const formData = req.body;
//     const sql = 'INSERT INTO submissions SET ?';
    
//     db.query(sql, formData, (err, result) => {
//         if (err) {
//             return res.status(500).json({ error: err.message});
//         }
//         res.status(201).json({ id: result.insertId, message: 'Form submitted successfully' });
//     });
// });

// app.listen(5000, () => {
//     console.log(`Server is running on port ${PORT}`)
// })