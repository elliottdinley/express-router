const express = require('express');
const router = express.Router();

const { Fruit, User } = require('../models/index');

router.get('/', async (request, response) => {
    const data = await Fruit.findAll();
    response.json(data);
});

router.get('/:id', async (request, response) => {
    const fruitId = request.params.id;
    const data = await Fruit.findByPk(fruitId);
    response.json(data);
});

router.post('/', async (request, response) => {
    const newFruit = request.body;
    await Fruit.create(newFruit);
    const data = await Fruit.findAll();
    response.json(data);
});

router.put('/:id', async (request, response) => {
    const fruitId = request.params.id;
    const updatedFruit = request.body;
    await Fruit.update(updatedFruit, {
        where: { id: fruitId }
    });
    const data = await Fruit.findAll();
    response.json(data);
});

router.delete('/:id', async (request, response) => {
    const fruitId = request.params.id;
    await Fruit.destroy({
        where: { id: fruitId }
    });
    const data = await Fruit.findAll();
    response.json(data);
});

module.exports = router;