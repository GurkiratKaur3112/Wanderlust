Wanderlust Project Setup Guide

Welcome to the setup guide for the Wanderlust web project! Follow the steps below to configure the project on your local machine seamlessly.

Prerequisites

Ensure your system meets the following requirements before proceeding:

Node.js: Version 18 (recommended)

MongoDB: Installed and running

Nodemon: Globally installed

Setup Steps

1. Clone the Repository

Download the Wanderlust project files by cloning the repository:

git clone https://github.com/GurkiratKaur3112/Wanderlust.git

2. Configure the Database

Create a .env file in the project's root directory.

Add the following line to configure the local MongoDB connection:

ATLASDB_URL=mongodb://127.0.0.1:27017/wanderlust

3. Set Up Cloudinary

Sign up for a free account on Cloudinary.

After logging in, retrieve the following credentials:

CLOUD_NAME

CLOUD_API_KEY

CLOUD_API_SECRET

Add these details to the .env file:

CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_api_key
CLOUD_API_SECRET=your_api_secret

Set a secure secret key for Cloudinary storage in the .env file:

SECRET=your_cloudinary_secret

4. Install Dependencies

Use npm to install the required packages:

npm install

5. Start the Application

Run the project using Nodemon to enable live updates:

nodemon app.js

6. Access the Application

Once the server starts, open your browser and navigate to:

http://localhost:8080

Troubleshooting

If you encounter any issues during the setup process, ensure:

Your .env file is correctly configured.

MongoDB is running on your system.

All dependencies are installed without errors.

Feel free to reach out for further assistance if needed. Enjoy exploring Wanderlust! 🌍✈️

About Wanderlust

Wanderlust is an innovative online platform inspired by Airbnb. This project aims to simplify the process of finding and booking hotels across various cities globally, making your vacation planning effortless and enjoyable.

🌐 Live Demo

Explore the deployed project here: Wanderlust Live Website

🚀 Features

A user-friendly interface for browsing and listing accommodations.

Robust backend built with Node.js and MongoDB for seamless data management.

Cloudinary integration for high-quality image uploads and media storage.

Whether you're planning your next trip or showcasing your development skills, Wanderlust is designed to impress. Happy exploring!

