const router = require('express').Router();


const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtController');

// /api/courses
router.route('/').get(getThought)
// .post(createThought);

// /api/courses/:thoughts
router.route('/').get(getThought).post(createThought);
router.route('/:id').get(getSingleThought).delete(deleteThought).put(updateThought);

module.exports = router;