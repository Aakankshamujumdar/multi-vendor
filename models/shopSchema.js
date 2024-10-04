const mongoose = require('mongoose')
const shopSchema = new schema({

    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      name: {
        type: String,
        required: true
      },
      description: {
        type: String
      },
      location: {
        type: String,
        required: true
      },
      products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
      }],
      createdAt: {
        type: Date,
        default: Date.now
      }
    });
    const shopModel = mongoose.model('Shop',shopSchema)
    module.exports = shopModel 