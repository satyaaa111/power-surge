import dbConnect from '@/lib/dbConnect';
import User from '@/models/Users';
const bcrypt = require('bcrypt');

const POST = async (req, res) => {
    // return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
    await dbConnect();
    try {
        const { email, password } = req.body;
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }

        // Compare the passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          return res.status(401).json({ message: 'Invalid password' });
        }

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
}; 
const GET = () => {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
}; 
module.exports = { POST, GET };