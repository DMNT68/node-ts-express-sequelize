import { Sequelize } from 'sequelize';

const db = new Sequelize('desarrollo_ecosRed', 'root', '@Mysql>1993<', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

export default db;