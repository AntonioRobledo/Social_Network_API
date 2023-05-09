const router = require('express').Router();

const {
  getAllThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/courseController.js');

// /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .post(createThought)
  .put(updateThought)
  .delete(deleteThought);

// /.api/thoughts/:thoughtId/reactions
router.route('/:thoughts/reactions').post(createReaction);

// /.api/thoughts/:thoughtId/reactions/reactionId
router.route('/:thoughts/reactions/reactionId').delete(deleteReaction);

module.exports = router;
