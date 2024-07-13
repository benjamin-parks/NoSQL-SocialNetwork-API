const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThoughtById,
    deleteThought,
    addAReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// /api/thoughts - GET all thoughts and POST a new thought
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId - GET a single thought, PUT or update a thought, and DELETE a thought
router.route('/:thoughtId').get(getSingleThought).put(updateThoughtById).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions - POST to create a reaction stored in a single thought's reactions array field
router.route('/:thoughtId/reactions').post(addAReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId - DELETE to pull and remove a reaction by the reaction's reactionId value
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;