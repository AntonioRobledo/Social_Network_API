const router = require('express').Router();

const {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// api/users/userId
router
  .route('/:userId')
  .get(getSingleUser)
  .post(createUser)
  .delete(deleteUser)
  .put(updateUser);

// api/users/:userId/friends/friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router; 
