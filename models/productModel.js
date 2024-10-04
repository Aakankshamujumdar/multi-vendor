const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
    price: {
        type: Number,
        required: true
      },
    stock: {
        type: Number,
        required: true,
        default: 0
     },
      category: {
        type: String,
        required: true
      },
      images: [String],  // Array of image URLs
      createdAt: {
        type: Date,
        default: Date.now
      },
      updatedAt: {
        type: Date,
        default: Date.now
      }
    });
    const productModel = mongoose.model('Product', productSchema)
    module.exports = productModel;
    