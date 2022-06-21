import express from 'express';
var router = express.Router();
import PostController  from '../controllers/PostController';

/* GET users listing. */
router.get('/', PostController.getAll);

router.get('/:id', PostController.getOne);

router.post('/', PostController.create);

router.put('/',PostController.update);

router.delete('/:id', PostController.delete);

router.get('/:id/user', PostController.getUser);

export default router;
