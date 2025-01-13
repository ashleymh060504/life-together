import { Router } from 'express';
import { userRouter } from './user-routes.js';
import { choresRouter } from './chore-routes.js'
import { cleaningChoresRouter } from './cleaning-routes.js';
import { outdoorChoresRouter } from './outdoors-routes.js';

const router = Router();

router.use('/users', userRouter);
router.use('/chores', choresRouter);
router.use('/cleaning-chores', cleaningChoresRouter);
router.use('/outdoor-chores', outdoorChoresRouter);

export default router;