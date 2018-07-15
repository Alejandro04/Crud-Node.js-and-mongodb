module.exports = (app) => {
    const products = require('../controllers/product.controller.js');

    // Create a new Note
    app.post('/products', products.create);

    // Retrieve all products
    app.get('/products', products.findAll);

    // Retrieve a single Note with noteId
    app.get('/products/:noteId', products.findOne);

    // Update a Note with noteId
    app.put('/products/:noteId', products.update);

    // Delete a Note with noteId
    app.delete('/products/:noteId', products.delete);
}