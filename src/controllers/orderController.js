const Order = require('../models/Order');

// Field mapping: transforms the request body fields to the database fields
const mapOrder = (body) => ({
    orderId: body.numeroPedido,
    value: body.valorTotal,
    creationDate: new Date(body.dataCriacao),
    items: body.items.map(item => ({
        productId: Number(item.idItem),
        quantity: item.quantidadeItem,
        price: item.valorItem
    }))
});

// POST /order - Create a new order
const createOrder = async (req, res) => {
    try {
        const order = new Order(mapOrder(req.body));
        await order.save();
        res.status(201).json({ message: 'Order created successfully', order: order });
    } catch (error) {
        if (error.code === 11000) { // Duplicate orderId
            return res.status(409).json({ message: 'Order already exists' });
        }
        console.error('Error creating order:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};