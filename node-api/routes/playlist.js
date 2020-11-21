const express = require('express');
const router = express.Router();
const Playlist = require('../models/Playlist');

router.get('/', async (req, res) => {
  try {
    const playlists = await Playlist.find();
    res.json(playlists);
  } catch (error) {
    res.json({ message: err });
  }
});

router.post('/', async (req, res) => {
  const playlist = new Playlist({
    id: req.body.id,
    nome: req.body.nome,
  });
  try {
    const savedPlaylist = await playlist.save();
    res.json(savedPlaylist);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
