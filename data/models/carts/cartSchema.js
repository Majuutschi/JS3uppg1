const { request } = require('express');
const mongodb = require('mongoose');
const Product = require('../products/productSchema');


const itemSchema = mongodb.Schema(
    {
        productId: {
            type: mongodb.Schema.Types.ObjectId,
            ref: 'Product'
        },
        quantity: {
            type: Number,
            required: true
        },
        price: {
            
        }
    }
)

const cartSchema = mongodb.Schema(
    {
        userId: {
            type: mongodb.Schema.Types.ObjectId,
            ref: 'User'
        },
        products: [ 
            itemSchema
        ],
        active: {
            type: Boolean,
            default: true
        },
        created: {
            type: Date, 
            default: Date.now 
        },
        modified: {
            type: Date, 
            default: Date.now 
        }
    }
)

module.exports = mongodb.model('Cart', cartSchema);