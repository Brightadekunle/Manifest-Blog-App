var User  = require('../models/user');
var express = require('express');
var router  = express.Router();

const userController = require('../controllers/userController')


router.get('/create', userController.user_create_get)

router.post('/create', userController.user_create_post)


router.get('/:user_id/destroy', userController.user_delete_get)

router.post('/:user_id/destroy', userController.user_delete_post);

router.get('/:user_id/update', userController.user_update_get)

router.post('/:user_id/update', userController.user_update_post);

router.get('/user/users', userController.user_list)

router.get('/user', userController.user_detail_all)

router.get('/:user_id/user', userController.user_detail_one)









module.exports = router;
