const { Router } = require('express');
const { login } = require('../controllers/UserController');

const router = Router();

router.post('/',  login);


module.exports = router;