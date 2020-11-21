const mongoose = require('mongoose');

const PlaylistSchema = mongoose.Schema({
  id: String,
  nome: String,
});

module.exports = mongoose.model('Playlist', PlaylistSchema);
