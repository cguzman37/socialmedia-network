const router = require('express').Router();
const Thought = require('../../models/Thought');

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require('../../models/Thought.js');

// /api/courses
router.route('/').get(getThoughts).post(createThought);

// /api/courses/:thoughts
router
  .route('/:thoughtsId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;