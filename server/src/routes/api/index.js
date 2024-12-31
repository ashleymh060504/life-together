import { Router } from 'express';
import { userRouter } from './user-routes.js';
import { cleaningChoresRouter } from './cleaning-routes.js';

const router = Router();

router.use('/users', userRouter);
router.use('/cleaning-chores', cleaningChoresRouter);

export default router;