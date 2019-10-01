const express = require('express');
const appRouter = express.Router();
const controller = require('../controllers/app-controller.js');

// appRouter.get('/', controller.readAnEntrega);
appRouter.post('/', controller.createAnEntrega);
// appRouter.put('/:id', controller.updateAnEntrega);
// appRouter.delete('/', controller.deleteEntrega);

module.exports = appRouter;