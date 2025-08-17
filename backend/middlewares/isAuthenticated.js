const jwt = require('jsonwebtoken');
const Admin = require('../models/admin.model.js'); // Use relative path without .js

const JWT_SECRET = process.env.JWT_SECRET || 'helloiamapasswordforauthenticationandauthorization';

const isAuthenticated = async (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ message: "Unauthorized access, no token provided" });
    }

    const jwtToken = token.replace("Bearer ", "").trim();

    try {
        const isVerified = jwt.verify(jwtToken, JWT_SECRET);

        const adminData = await Admin.findById(isVerified.id).select('-password');

        if (!adminData) {
            return res.status(401).json({ message: "Admin not found" });
        }

        req.admin = adminData;
        req.token = jwtToken;
        next();
    } catch (error) {
        console.log('Error during token verification:', error);
        return res.status(401).json({ message: "Unauthorized access, token invalid or expired" });
    }
};

module.exports = isAuthenticated; 
