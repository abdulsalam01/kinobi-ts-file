import { Router } from 'express';
import userRouter from './user-router';
import fileRouter from './file-router';

// Export the base-router
const baseRouter = Router();

// Setup routers

baseRouter.use('/users', userRouter);
baseRouter.use('/files', fileRouter);

// Export default.
export default baseRouter;
