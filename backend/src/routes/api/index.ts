import express from 'express';
import apiV1 from './v1';

const router = express.Router();

router.use('/api/v1', apiV1);

export default router;