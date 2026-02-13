import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors({
  origin: 'https://silver-succotash-ggrrvwr7wrw2vvpx-5173.app.github.dev',
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json()); // Allows the server to read JSON sent in requests

// A sample API route for your Dashboard
app.get('/', (req, res) => {
  res.send('Welcome to the Ledgix Backend API! Try /api/user for data.');
});
app.get('/api/user', (req, res) => {
  res.json({
    name: "John Doe",
    role: "Admin",
    lastLogin: "2026-02-13"
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});