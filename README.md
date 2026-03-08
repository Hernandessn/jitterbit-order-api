# Jitterbit Order API

REST API for order management - Jitterbit Technical Test

## Technologies

- Node.js
- Express
- MongoDB (Mongoose)
- JWT Authentication
- Swagger UI

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository
```bash
git clone https://github.com/Hernandessn/jitterbit-order-api.git
cd jitterbit-order-api
```

2. Install dependencies
```bash
npm install
```

3. Create your `.env` file based on `.env.example`
```bash
cp .env.example .env
```

4. Run the project
```bash
npm run dev
```

## API Documentation

Swagger UI available at:
```
http://localhost:3000/api-docs
```

## Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| POST | /auth/login | Generate JWT token |
| POST | /order | Create a new order |
| GET | /order/list | List all orders |
| GET | /order/:orderId | Get order by orderId |
| PUT | /order/:orderId | Update order by orderId |
| DELETE | /order/:orderId | Delete order by orderId |

## Authentication

All order endpoints require a JWT token. To authenticate:

1. Call `POST /auth/login` with credentials:
```json
{
  "username": "admin",
  "password": "admin"
}
```
2. Copy the token from the response
3. Use it in the `Authorization` header: `Bearer <token>`