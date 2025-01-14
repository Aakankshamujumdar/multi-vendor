const mongoose = require('mongoose')

const couponSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true
      },
      discount: {
        type: Number,
        required: true
      },
      expirationDate: {
        type: Date,
        required: true
      },
      isActive: {
        type: Boolean,
        default: true
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
    
    const couponModel = mongoose.model('Coupon', couponSchema)
    module.exports = couponModel;