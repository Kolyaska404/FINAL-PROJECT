import express from 'express';
import mysql from 'mysql'
import cors from 'cors';
import mongoose from 'mongoose';

mongoose.connect(
    'mongodb+srv://admin:admin1@mydb.9kmko.mongodb.net/?retryWrites=true&w=majority&appName=mydb'
).then(() => {
    console.log('MongoDB is ON!')
}).catch((err) => {
    console.log('DB error' + err)
})

const app = express();
app.use(cors());
const PORT = 4200;

const formScmeha = new mongoose.Schema({
    service: String,
    kind: String,
    goal: [String],
    pages: String,
    functional: [String],
    budget: String,
    material: [String],
    url: String,
    yes_no: String,
    username: String,
    marketName: String,
    phone: String,
})

const Form = mongoose.model('Form', formScmeha)

async function main() {
    app.use(express.json())
    app.post('/api/forms', async (req, res) => {
        try {
            const formData = new Form(req.body)
            await formData.save()
            res.status(201).alert('Data is sending successfully')
        } catch (err) {
            alert.log('Error is' + err)
        }
    })
    app.listen(PORT, () => {
        console.log('Server is running on port 4200')
    })
}

main()

