const mongoose = require('mongoose')

const withdrawSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      amount: {
        type: Number,
        required: true
      },
      status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
      },
      requestedAt: {
        type: Date,
        default: Date.now
      },
      processedAt: {
        type: Date
      }
    });
    const withdrawModel = mongoose.model(Withdraw,withdrawSchema)
    module.exports = withdrawModel
    
