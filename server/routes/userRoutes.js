require('dotenv').config();
const express = require('express');
const router = express.Router();
const supabase = require('../services/supabaseClient');  // Import configured Supabase client

router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Insert user into the "users" table
        const { data, error } = await supabase
            .from('users')
            .insert([{ username, email, password }]);

        if (error) throw error;

        res.status(200).json({ message: 'User signed up successfully', data });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
