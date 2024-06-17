const express = require('express');
const Participant = require('../models/Participant');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');

const router = express.Router();

// Registrar participante
router.post('/:eventId', authMiddleware, async (req, res) => {
    const { eventId } = req.params;
    const userId = req.user.id;
    try {
        const participant = new Participant({ eventId, userId });
        await participant.save();
        res.status(201).json(participant);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Listar participantes de um evento
router.get('/:eventId', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const participants = await Participant.find({ eventId: req.params.eventId }).populate('userId');
        res.json(participants);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;