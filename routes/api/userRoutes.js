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
router.get(getSingleUser);
router.post(createUser);
router.delete(deleteUser);
router.put(updateUser);

// api/users/:userId/friends/friendId
router.route('/:userId/friends/friendId').post(addFriend);
router.route('/:userId/friends/friendId').delete(deleteFriend);

module.exports = router; 
