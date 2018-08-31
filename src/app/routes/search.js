import express from 'express';
import controllerSearc from '../controllers/search'

const router = express.Router();

router.post('/cep', controllerSearc.searchcep);
router.get('/cep/:id', controllerSearc.searchcepId);
router.get('/cep',controllerSearc.searchQuery)

export default app => app.use('/', router)