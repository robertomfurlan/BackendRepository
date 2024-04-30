import express from 'express';

const router = express.Router();

let items = [];

router.get('/', (req, res) => {
    res.json(items);
});

router.post('/', (req, res) => {
    const newItem = req.body;
    items.push(newItem);
    res.status(201).json(newItem);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    items = items.filter(item => item.id !== id);
    res.json({ message: 'Item deletado com sucesso' });
});

export default router;

