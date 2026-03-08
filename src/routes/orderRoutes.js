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

/**
 * @swagger
 * /order:
 *   post:
 *     summary: Create a new order
 *     tags: [Order]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numeroPedido:
 *                 type: string
 *                 example: v10089015vdb-01
 *               valorTotal:
 *                 type: number
 *                 example: 10000
 *               dataCriacao:
 *                 type: string
 *                 example: "2023-07-19T12:24:11.5299601+00:00"
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     idItem:
 *                       type: string
 *                       example: "2434"
 *                     quantidadeItem:
 *                       type: number
 *                       example: 1
 *                     valorItem:
 *                       type: number
 *                       example: 1000
 *     responses:
 *       201:
 *         description: Order created successfully
 *       409:
 *         description: Order already exists
 *       500:
 *         description: Internal server error
 */
router.post('/', auth, createOrder);

/**
 * @swagger
 * /order/list:
 *   get:
 *     summary: List all orders
 *     tags: [Order]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of orders
 *       500:
 *         description: Internal server error
 */
router.get('/list', auth, listOrders);

/**
 * @swagger
 * /order/{orderId}:
 *   get:
 *     summary: Get order by orderId
 *     tags: [Order]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: orderId
 *         required: true
 *         schema:
 *           type: string
 *         example: v10089015vdb-01
 *     responses:
 *       200:
 *         description: Order found
 *       404:
 *         description: Order not found
 *       500:
 *         description: Internal server error
 */
router.get('/:orderId', auth, getOrderById);

/**
 * @swagger
 * /order/{orderId}:
 *   put:
 *     summary: Update order by orderId
 *     tags: [Order]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: orderId
 *         required: true
 *         schema:
 *           type: string
 *         example: v10089015vdb-01
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numeroPedido:
 *                 type: string
 *                 example: v10089015vdb-01
 *               valorTotal:
 *                 type: number
 *                 example: 10000
 *               dataCriacao:
 *                 type: string
 *                 example: "2023-07-19T12:24:11.5299601+00:00"
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     idItem:
 *                       type: string
 *                       example: "2434"
 *                     quantidadeItem:
 *                       type: number
 *                       example: 1
 *                     valorItem:
 *                       type: number
 *                       example: 1000
 *     responses:
 *       200:
 *         description: Order updated successfully
 *       404:
 *         description: Order not found
 *       500:
 *         description: Internal server error
 */
router.put('/:orderId', auth, updateOrder);

/**
 * @swagger
 * /order/{orderId}:
 *   delete:
 *     summary: Delete order by orderId
 *     tags: [Order]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: orderId
 *         required: true
 *         schema:
 *           type: string
 *         example: v10089015vdb-01
 *     responses:
 *       200:
 *         description: Order deleted successfully
 *       404:
 *         description: Order not found
 *       500:
 *         description: Internal server error
 */
router.delete('/:orderId', auth, deleteOrder);

module.exports = router;