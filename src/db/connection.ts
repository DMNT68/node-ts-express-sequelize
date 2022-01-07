import { Sequelize } from 'sequelize';

const db = new Sequelize(
  'desarrollo_ecosred', // fcpcutnc_ecosred // desarrollo_ecosred
  'root', // fcpcutnc_Atest  root
  '@Mysql>1993<', // sw0ufsUTs=Nc  @Mysql>1993<
  {
    host: 'localhost', // 168.119.13.153   localhost
    dialect: 'mysql',
    define: {
      timestamps: false,
    },
  }
);

export default db;
