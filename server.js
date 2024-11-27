// server.js

const express = require('express');
const usersRoutes = require('./routes/usersRoutes');
const foldersRoutes = require('./routes/foldersRoutes');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/api', usersRoutes);
app.use('/api', foldersRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
