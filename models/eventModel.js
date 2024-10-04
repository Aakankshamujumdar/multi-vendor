const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        required: true
      },
      location: {
        type: String,
        required: true
      },
      availableTickets: {
        type: Number,
        required: true
      },
      pricePerTicket: {
        type: Number,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now
      },
      updatedAt: {
        type: Date,
        default: Date.now
      }
    });
    const eventModel = mongoose.model('event', eventSchema)
    module.exports = eventModel