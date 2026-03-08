const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
    createOrder,
    getOrderById,
    listOrders,
    updateOrder,
    deleteOrder

} = require('../controllers/orderController');

// POST /order - Create a new order
router.post('/', auth, createOrder);

// GET /order/list - List all orders
router.get('/list', auth, listOrders);

// GET /order/:orderId - Get order by orderId
router.get('/:orderId', auth, getOrderById);

// PUT /order/:orderId - Update order by orderId
router.put('/:orderId', auth, updateOrder);

// DELETE /order/:orderId - Delete order by orderId
router.delete('/:orderId', auth, deleteOrder);

module.exports = router;