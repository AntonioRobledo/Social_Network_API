const router = require('express').Router();

const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getAllUsers).post(createUser);
router.route('/:userId').get(getOneUser);
router.route('/:userId').post(createUser);
router.route('/:userId').delete(deleteUser);
router.route('/:userId').put(updateUser);

// api/users/:userId/friends/friendId
router.route('/:userId/friends/friendId').post(addFriend);
router.route('/:userId/friends/friendId').delete(deleteFriend);

module.exports = router; 
