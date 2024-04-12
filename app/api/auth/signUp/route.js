import dbConnect from '@/lib/dbConnect';
import User from '@/models/Users';

export async function POST(request) {
  try {
    await dbConnect();

    const { name, userName, email, phone, password } = await request.json();

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response('Email already exists', { status: 400 });
    }

    // Create a new user
    const newUser = new User({ name, userName, email, phone, password });
    await newUser.save();

    return new Response('User created successfully', { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response('Something went wrong', { status: 500 });
  }
}