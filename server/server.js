// server.js

const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 4000;

// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json

// PostgreSQL connection
const pool = new Pool({
  user: 'postgres',  
  host: 'db',                   
  database: 'ct648', 
  password: '12345678',    
  port: 5432,                  
});

// Sample route to fetch data
app.get('/api/data', async (req, res) => {
    try {
        const result = await pool.query(`SELECT * FROM sp_users;`);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching data', error);
        res.status(500).send('Server Error');
    }
});
app.post('/api/register', async (req, res) => {
    const { email, password } = req.body;
    const name = 'name';
    console.log("email", email)
    console.log("password", password)
    try {


        // Insert the new user into the database
        const newUser = await pool.query(
            'INSERT INTO sp_users  ( email, password,name) VALUES ($1, $2 ,$3) RETURNING *',
            [email, password , name]
        );
        console.log("newUser", newUser)
        // Respond with the new user data (omit password)
        res.status(201).json({
            message: 'User registered successfully',
            user: { id: newUser.rows[0].id, name: newUser.rows[0].name, email: newUser.rows[0].email },
        });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
app.post('/api/pointregister', async (req, res) => {
    const { username, point } = req.body;

    try {


        // Insert the new user into the database
        const newUser = await pool.query(
            'INSERT INTO sp_score  ( username, point,time ) VALUES ($1, $2 , now()) RETURNING *',
            [username, point]
        );
        console.log("newUser", newUser)
        // Respond with the new user data (omit password)
        res.status(201).json({
            message: 'Point registered successfully',

        });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
app.get('/api/scores', async (req, res) => {
    try {
        // Query to select all scores
        const result = await pool.query('SELECT * FROM sp_score  ORDER BY point DESC limit 10'); // Adjust as needed
        console.log("Scores retrieved:", result.rows); // Log retrieved scores

        // Send the scores back as a JSON response
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error fetching scores:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Start the server

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
