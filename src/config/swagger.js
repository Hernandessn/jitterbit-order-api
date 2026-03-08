const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Jitterbit Order API',
            version: '1.0.0',
            description: 'REST API for order management - Jitterbit Technical Test - Hernandes Sales',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Local server'
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            }
        }
    },
    apis: ['./src/routes/*.js'] // Swagger will read the comments from the routes files
};

module.exports = swaggerJsdoc(options);