// pages/api/contact.js
import nodemailer from 'nodemailer';
import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

// MongoDB connection
const client = new MongoClient(process.env.MONGODB_URI || 'mongodb://mongodb:27017/portfolio');

async function connectToDatabase() {
  try {
    await client.connect();
    return client.db(process.env.MONGODB_DB_NAME || 'portfolio');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}

export async function POST(request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  try {
    // Save to MongoDB
    const db = await connectToDatabase();
    const contactsCollection = db.collection('contacts');
    
    const contactData = {
      name,
      email,
      message,
      createdAt: new Date(),
      status: 'new' // You can use this to track if you've responded
    };
    
    const result = await contactsCollection.insertOne(contactData);

    // Send email notification
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT, 10),
      secure: false, // use true if port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: `New message from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>Database ID:</strong> ${result.insertedId}</p>
      `,
    });

    return NextResponse.json({ 
      message: "Message sent and saved successfully",
      id: result.insertedId 
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ 
      error: "Failed to process message" 
    }, { status: 500 });
  }
}

// Optional: GET method to retrieve contacts (for admin purposes)
export async function GET(request) {
  try {
    const db = await connectToDatabase();
    const contactsCollection = db.collection('contacts');
    
    const contacts = await contactsCollection
      .find({})
      .sort({ createdAt: -1 })
      .limit(50)
      .toArray();

    return NextResponse.json({ contacts });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json({ 
      error: "Failed to fetch contacts" 
    }, { status: 500 });
  }
}