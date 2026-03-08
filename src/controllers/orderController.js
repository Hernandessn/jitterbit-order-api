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

// GET /order/:orderId - Get order by orderId
const getOrderById = async (req, res) => {
    try {
        const order = await Order.findOne({ orderId: req.params.orderId });

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        return res.status(200).json(order);
    } catch (error) {
        console.error('Error fetching order:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// GET /order/list - List all orders
const listOrders = async (req, res) => {
    try {
        const orders = await Order.find();

        return res.status(200).json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// PUT /order/:orderId - Update order by orderId
const updateOrder = async (req, res) => {
    try {
        const order = await Order.findOneAndUpdate(
            { orderId: req.params.orderId },
            mapOrder(req.body),
            { new: true, runValidators: true }
        );

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        return res.status(200).json({ message: 'Order updated successfully', order: order });
    } catch (error) {
        console.error('Error updating order:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

// DELETE /order/:orderId - Delete order by orderId
const deleteOrder = async (req, res) => {
    try {
        const order = await Order.findOneAndDelete({ orderId: req.params.orderId });

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        return res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
        console.error('Error deleting order:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    createOrder,
    getOrderById,
    listOrders,
    updateOrder,
    deleteOrder
};