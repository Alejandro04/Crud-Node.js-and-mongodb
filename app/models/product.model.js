const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    ProductCode: String,
    ProductDescription: String
}, {
    timestamps: true
});

module.exports = mongoose.model('products', ProductSchema);