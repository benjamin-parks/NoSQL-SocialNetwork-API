const router = require('express').Router();

const {
    getUsers,
    getUserbyId,
    createUser,
    updateUserbyId,
    deleteUser,
    addFriend,
    removeFriendById
} = require('../../controllers/userController');

// /api/users - GET all users and POST a new user
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId - GET a single user, PUT or update a user, and DELETE a user
router.route('/:userId').get(getUserbyId).put(updateUserbyId).delete(deleteUser);

// /api/users/:userId/friends/:friendId - POST to add a new friend to a user's friend list
router.route('/:userId/friends/:friendId').post(addFriend);

// /api/users/:userId/friends/:friendId - DELETE to remove a friend from a user's friend list
router.route('/userId/friends/:friendId').delete(removeFriendById);

module.exports = router;