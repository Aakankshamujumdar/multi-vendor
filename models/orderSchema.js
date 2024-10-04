const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
        user: {
          type: Schema.Types.ObjectId,
          ref: 'User',
          required: true
        },
        products: [{
          product: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true
          },
          quantity: {
            type: Number,
            required: true
          }
        }],
        totalAmount: {
          type: Number,
          required: true
        },
        status: {
          type: String,
          enum: ['pending', 'completed', 'cancelled'],
          default: 'pending'
        },
        orderDate: {
          type: Date,
          default: Date.now
        }
      });
      const orderSchema = mongoose.model('Order', orderSchema)
      module.exports = orderSchema
      
