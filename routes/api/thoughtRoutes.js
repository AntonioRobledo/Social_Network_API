const router = require('express').Router();

const {
  getAllThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

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
router.route('/:thoughts/reactions').post(addReaction);

// /.api/thoughts/:thoughtId/reactions/reactionId
router.route('/:thoughts/reactions/:reactionId').delete(deleteReaction);

module.exports = router;
