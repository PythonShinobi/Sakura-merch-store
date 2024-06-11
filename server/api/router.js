// server/api/router.js
import { Router } from "express";
import nodemailer from "nodemailer";
import Queue from "bull";
import env from "dotenv";
import Redis from "ioredis";

env.config();

const router = Router();

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

// Define the service URI with the connection details.
const serviceURI = process.env.SERVICE_URI;

// Create a Redis client
const redisClient = new Redis(serviceURI);

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

router.get("/", (req, res) => {
    res.send("Sakura backend server is running");
});

router.post("/send-email", (req, res) => {
    const { name, email, message } = req.body;

    // Add the email job to the queue.
    emailQueue.add({ name, email, message }, { attempts: 3, backoff: 5000 });

    // Respond to the client immediately.
    res.send("Email has been sent🙂.");
});

export default router;