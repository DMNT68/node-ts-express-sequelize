import { Sequelize } from 'sequelize';

const db = new Sequelize(
  'desarrollo_ecosRed', 
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