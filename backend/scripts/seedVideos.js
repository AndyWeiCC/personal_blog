// scripts/seedVideos.js
const mongoose = require('mongoose');
const Video = require('../models/Video.js');

const MONGO_URI = 'mongodb://localhost:27017/tripblog'; // or your Atlas URI

const videos = [
  {
    topic: 'stripe',
    title: 'Introduction to Stripe',
    description: 'Learn how Stripe enables online payment processing and financial infrastructure.',
    videoId: 'm2xA3fTAUIs',
  },
  {
    topic: 'stripe',
    title: 'Create Subscriptions with Stripe',
    description: 'Walkthrough on recurring payments and webhooks',
    videoId: 'm2xA3fTAUIs',
  },
  {
    topic: 'stripe',
    title: 'Stripe Payment Methods',
    description: 'Understanding different payment methods in Stripe',
    videoId: 'm2xA3fTAUIs',
  },
  {
    topic: 'stripe',
    title: 'Stripe API Best Practices',
    description: 'Best practices for using the Stripe API effectively',
    videoId: 'm2xA3fTAUIs',
  },
  {
    topic: 'stripe',
    title: 'Handling Stripe Webhooks',
    description: 'How to handle webhooks securely and efficiently',
    videoId: 'm2xA3fTAUIs',
  },
  {
    topic: 'stripe',
    title: 'Stripe Dashboard Overview',
    description: 'Navigating the Stripe Dashboard for better insights',
    videoId: 'm2xA3fTAUIs',
  },
  {
    topic: 'typescript',
    title: 'Introduction to TypeScript',
    description: 'Learn the basics of TypeScript and its benefits',
    videoId: '0Mk5MPSapvM',
  },
  {
    topic: 'typescript',
    title: 'TypeScript Interfaces and Types',
    description: 'Understanding interfaces and types in TypeScript',
    videoId: '0Mk5MPSapvM',
  },
  {
    topic: 'typescript',
    title: 'TypeScript with React',
    description: 'Integrating TypeScript with React applications',
    videoId: '0Mk5MPSapvM',
  },
];

const insertData = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    await Video.insertMany(videos);
    console.log('Data inserted successfully!');

    mongoose.disconnect();
  } catch (err) {
    console.error('Error inserting data:', err);
    process.exit(1);
  }
};

insertData();
