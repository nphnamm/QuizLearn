const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const app = express();
const port = 3000;

// Replace with your Supabase URL and anon key
const SUPABASE_URL = process.env
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxjYnZuZHF3YmZvdXdpY3p2anBoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI2NDMzOTksImV4cCI6MjA0ODIxOTM5OX0.MScoU9ar1iOsc15Tla8-BkARrqOCocZ42lmhvfO2BuA';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Middleware to parse JSON bodies
app.use(express.json());

// Handle POST request to insert data into 'users' table
app.post('/api/users', async (req, res) => {
  const { name, email } = req.body; // Get data from request body

  // Insert data into Supabase 'users' table
  const { data, error } = await supabase
    .from('users')
    .insert([{ name, email }]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ message: 'User created successfully', data });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
