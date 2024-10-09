import express from 'express';
import 'reflect-metadata';
import { json } from 'body-parser';
import YAML from 'yamljs';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger'

import productRoutes from './routes/productRoutes';
import orderRoutes from './routes/orderRoutes';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());
const productsDoc = YAML.load(path.join(__dirname, 'docs', 'products.yaml'));
const ordersDoc = YAML.load(path.join(__dirname, 'docs', 'orders.yaml'));

// Configurar Swagger UI para ambos endpoints
app.use('/api-docs/products', swaggerUi.serve, swaggerUi.setup(productsDoc));
app.use('/api-docs/orders', swaggerUi.serve, swaggerUi.setup(ordersDoc));
app.use('/api/products', productRoutes)
app.use('/api/orders', orderRoutes);


app.get('/', (req, res) => {
  res.send('Ecommerce Backend API');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
