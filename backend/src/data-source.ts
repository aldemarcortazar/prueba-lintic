// src/data-source.ts
import { DataSource } from 'typeorm';
import { Product } from './models/Product';
import { Order } from './models/Order';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',
  entities: [Product, Order], 
  synchronize: true, 
  logging: true, 
});

// Inicializa la conexión
AppDataSource.initialize()
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente.');
  })
  .catch((error) => {
    console.error('Error al inicializar la conexión a la base de datos:', error);
  });
