import path from 'path';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Gestión de Productos y Órdenes',
      version: '1.0.0',
      description: 'Documentación de la API para la gestión de productos y órdenes',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: [path.join(__dirname, './routes/*.js'), path.join(__dirname, './swagger.yaml')], 
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

export default swaggerDocs;
