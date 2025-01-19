const User = require('../models/Users');


exports.updateTheme = async (req, res) => {
    const userId = req.session.userId;
    const { theme } = req.body;
  
    if (!['light', 'dark'].includes(theme)) {
      return res.status(400).json({ error: 'Invalid theme' });
    }
  
    try {
      console.log("reached here")  
      const user = await User.findByIdAndUpdate(userId, { theme }, { new: true });
      if (!user) return res.status(404).send('User not found');
  
      res.status(200).json({ message: 'Theme updated successfully', theme: user.theme });
    } catch (error) {
      console.error('Error updating theme:', error);
      res.status(500).json({ error: 'Failed to update theme' });
    }
  };
  