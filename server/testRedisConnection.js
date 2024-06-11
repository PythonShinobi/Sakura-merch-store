// testRedisConnection.js
import Redis from "ioredis";
import env from "dotenv";

env.config();

const serviceURI = process.env.SERVICE_URI;
const redisClient = new Redis(serviceURI);

redisClient.on('connect', () => {
    console.log('Redis client connected');
});

redisClient.on('error', (err) => {
    console.error('Redis connection error:', err);
});

redisClient.ping((err, result) => {
    if (err) {
        console.error('Ping error:', err);
    } else {
        console.log('Ping response:', result);
    }
    redisClient.quit();
});
