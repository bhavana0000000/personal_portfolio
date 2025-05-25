import express from 'express';
import 'dotenv/config'; // Load environment variables from .env file
import { configDotenv } from 'dotenv';
configDotenv(); // Load environment variables from .env file if not already loaded
import './config/dbConfig.js'; // Ensure database connection is established
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use(cors());
app.use(bodyParser.json());

// THIS IS THE ROUTE YOU NEED:
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Example: Just log and reply for now
  console.log('Contact form received:', { name, email, message });

  // You can add nodemailer logic here if needed
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bhavn2345@gmail.com',      // replace with your email
      pass: 'Boo@2345',       // replace with your app password
    },
  });

  // Email options
  let mailOptions = {
    from: email,
    to: 'bhavn2345@gmail.com',          // where you want to receive messages
    subject: `Portfolio Contact from ${name}`,
    text: message,
  };


  res.status(200).json({ message: 'Message sent successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

