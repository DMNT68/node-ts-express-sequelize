import dotenv from 'dotenv';
dotenv.config();
import express, { Application } from 'express';
import cors from 'cors';

import userRoutes from '../routes/usuario';
import authRoutes from '../routes/auth';
import catalogsRoutes from '../routes/catalogs';
import lotaipRoutes from '../routes/lotaip';
import db from '../db/connection';
import { apiPaths } from '../utils/apiPaths';

class Server {
  private app: Application;
  private port: string;
  private apiPaths = apiPaths;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8000';

    // Métodos iniciales
    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();

      console.log('DataBase online');
    } catch (error) {
      console.log('---->', error);
      throw new Error();
    }
  }

  middlewares() {
    // cors
    this.app.use(cors());

    // Lectura del body
    this.app.use(express.json());

    // Carpeta publica
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.apiPaths.usuarios, userRoutes);
    this.app.use(this.apiPaths.authPath, authRoutes);
    this.app.use(this.apiPaths.catalogs, catalogsRoutes);
    this.app.use(this.apiPaths.lotaip, lotaipRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en puerto: ${this.port}`);
    });
  }
}

export default Server;
