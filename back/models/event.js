const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  eventId: String,
  joined: Boolean,
  comments: Array,
  usersJoined: Array,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;