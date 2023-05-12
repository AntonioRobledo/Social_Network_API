const { Thought, User  } = require('../models');

module.exports = {
  // Get all Thoughts 
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a single Thought
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v');

      if (!thought) {
        return res.status(404).json({ message: 'No thought with this ID was found' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a Thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $addToSet: {thoughts: thought._id } },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res
            .status(404)
            .json({ message: 'Thought created, but found no user with that ID'})
      }
      res.json('Created a thought 🎉');
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Update a Thought 
async updateThought(req, res) {
  try {
    const thought = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    );

    if (!thought) {
      return res.status(404).json({ message: 'No thought with this ID was found'});
    }

    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
},

  // Delete a Thought
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndRemove({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: 'No thought with this ID was found' });
      }

      const user = await User.findOneAndUpdate(
        { thoughts: req.params.thoughtId },
        { $pull: { thoughts: req.params.thoughtId } },
        { new: true }
      );

      if(!user) {
        return res.status(404).json({
          message: 'Thought has been successfully deleted'
        });
      }

      res.json({ message: 'Thought has been successfully deleted' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Add a Reaction
  async addReaction(req, res) {
    try {
      const reaction = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );

      if (!reaction) {
        return res.status(404).json({ message: 'No thought with this ID was found' });
      }

      res.json(reaction);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Delete a Reaction
  async deleteReaction(req, res) {
    try {
      const reaction = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { new: true }
      );

      if (!reaction) {
        return res.status(404).json({ message: 'No thought with this ID was found'});
      }

      res.json({ message: 'Reaction has been removed'});
    } catch (err) {
      res.status(500).json(err);
    }
  },
};