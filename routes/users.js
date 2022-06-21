import express from 'express';
var router = express.Router();
import UserController  from '../controllers/UserController';

/* GET users listing. */
router.get('/', UserController.getAll);

router.get('/:id', UserController.getOne);

router.post('/', UserController.create);

router.put('/',UserController.update);

router.delete('/:id', UserController.delete);

router.get('/:id/posts', UserController.getPosts);

export default router;
