const { User, Thought } = require('../models');

module.exports = {
  // Get all users
  async getAllUsers(req, res) {
    try {
      const user = await User.find();
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a single user
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'User ID was not found' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
// Update a user
  async updateUser(req, res) {
    try { 
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      if (!user) {
        return res.status(404).json({ message: 'User ID was not found'});
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Delete a user 
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: 'User ID was not found' });
      }

      await Thought.deleteMany({ _id: { $in: user.thoughts } });
      res.json({ message: 'User and their associated thoughts have successfully been deleted' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Add a friend 
  async addFriend(req, res) {
    try {
      const friend = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: {friends: req.params.friendId} },
        { runValidators: true, new: true }
      );

      if (!friend) {
        return res.status(404).json({ message: 'User ID was not found' });
      }

      res.json(friend);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Delete a friend 
  async deleteFriend (req, res) {
    try {
      const friend = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: {friends: req.params.friendId } },
        { new: true },
        );

      if (!friend) {
        return res.status(404).json({ message: 'Friend ID was not found' });
      }

      res.json({ message: 'Friend has been removed' })
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

