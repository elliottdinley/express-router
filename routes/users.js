const express = require('express');
const router = express.Router();

const { Fruit, User } = require('../models/index');

router.get('/', async (request, response) => {
    const data = await User.findAll();
    response.json(data);
});

router.get('/:id', async (request, response) => {
    const userId = request.params.id;
    const data = await User.findByPk(userId);
    response.json(data);
});

router.post('/', async (request, response) => {
    const newUser = request.body;
    await User.create(newUser);
    const data = await User.findAll();
    response.json(data);
});

router.put('/:id', async (request, response) => {
    const userId = request.params.id;
    const updatedUser = request.body;
    await User.update(updatedUser, {
        where: { id: userId }
    });
    const data = await User.findAll();
    response.json(data);
});

router.delete('/:id', async (request, response) => {
    const userId = request.params.id;
    await User.destroy({
        where: { id: userId }
    });
    const data = await User.findAll();
    response.json(data);
});

module.exports = router;