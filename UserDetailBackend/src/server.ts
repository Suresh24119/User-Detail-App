import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const DB_FILE = path.join(__dirname, '../db.json');

app.use(cors());
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Helper to read DB
const readDb = () => {
    try {
        const data = fs.readFileSync(DB_FILE, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};

// Helper to write DB
const writeDb = (data: any) => {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
};

// Routes

// GET /users
app.get('/users', (req: Request, res: Response) => {
    const users = readDb();
    res.json(users);
});

// GET /users/:id
app.get('/users/:id', (req: Request, res: Response) => {
    const users = readDb();
    const user = users.find((u: any) => u.id == req.params.id);
    if (user) res.json(user);
    else res.status(404).json({ message: 'User not found' });
});

// POST /users
app.post('/users', (req: Request, res: Response) => {
    const users = readDb();
    const newUser = {
        id: Date.now(), // Simple ID generation
        ...req.body
    };
    users.push(newUser);
    writeDb(users);
    res.status(201).json(newUser);
});

// PUT /users/:id
app.put('/users/:id', (req: Request, res: Response) => {
    const users = readDb();
    const index = users.findIndex((u: any) => u.id == req.params.id);
    if (index !== -1) {
        users[index] = { ...users[index], ...req.body };
        writeDb(users);
        res.json(users[index]);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// DELETE /users/:id
app.delete('/users/:id', (req: Request, res: Response) => {
    const users = readDb();
    const newUsers = users.filter((u: any) => u.id != req.params.id);
    if (users.length !== newUsers.length) {
        writeDb(newUsers);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Also accessible on network at http://10.172.53.92:${PORT}`);
});
