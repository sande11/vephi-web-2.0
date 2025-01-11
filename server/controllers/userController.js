const supabase = require('../services/supabaseClient');

exports.getAllUsers = async (req, res) => {
  try {
    const { data, error } = await supabase.from('users').select('*');
    if (error) throw error;
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
