import { Sequelize } from 'sequelize';

const db = new Sequelize(
  'fcpcutnc_ecosred', // fcpcutnc_ecosred // desarrollo_ecosred
  'fcpcutnc_Atest', // fcpcutnc_Atest  root
  'sw0ufsUTs=Nc' // sw0ufsUTs=Nc  @Mysql>1993<
  , { 
  host: '168.119.13.153', // 168.119.13.153   localhost
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

export default db;