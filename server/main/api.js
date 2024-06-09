// server/main/api.js
import express from "express";
import nodemailer from "nodemailer";
import Queue from "bull";
import env from "dotenv";
import Redis from "ioredis";

env.config();

const router = express.Router();

// Create a Nodemailer transporter.
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL,
        pass: process.env.GMAIL_PASSWORD
    }
});

// Verify the transporter configuration.
transporter.verify((error, success) => {
    if (error) {
        console.error(`Transporter verification failed: ${error}`);
    } else {
        console.log("Transporter is ready to send emails")
    }
});

// Create a Redis client with custom options
const redisClient = new Redis({
    host: '127.0.0.1', // Redis server host
    port: 6379,        // Redis server port
    maxRetriesPerRequest: 50, // Increase max retries per request
    reconnectOnError: (err) => {
        const targetError = 'READONLY';
        if (err.message.includes(targetError)) {
            // Only reconnect when the error contains "READONLY"
            return true;
        }
    }
});

// Create an email queue.
const emailQueue = new Queue("emailQueue", { redis: redisClient });

// Process jobs in the email queue.
emailQueue.process(async (job, done) => {
    const { name, email, message } = job.data;
    try {
        let info = await transporter.sendMail({
            from: email,
            to: process.env.GMAIL,
            subject: "New Contact Message",
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        });
        console.log('Email sent:', info.messageId);
        done()
    } catch (error) {
        console.error(`Error sending email: ${error}`);
        done(error);
    }
});

router.post("/send-email", (req, res) => {
    const { name, email, message } = req.body;

    // Add the email job to the queue.
    emailQueue.add({ name, email, message }, { attempts: 3, backoff: 5000 });

    // Respond to the client immediately.
    res.status(200).send("Email has been sent🙂.");
});

export default router;