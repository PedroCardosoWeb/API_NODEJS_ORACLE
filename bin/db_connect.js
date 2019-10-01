const oracledb = require('oracledb'); //Load oracle lib
const dbConfig = require('./dbconfig.js'); //Acesso
// const objEntrega = require('../src/models/app-model.js')

var SimpleOracleDB = require('simple-oracledb'); //Load the simple oracledb

SimpleOracleDB.extend(oracledb); //Modify the original oracledb lib

var connection;

async function run() {
  try{
    connection = await oracledb.getConnection(dbConfig);
    console.log('\nConnection was successful!\n');
    // carrega();
  } 
  catch (err) {
      console.error(err);
  } 
  finally {
      if (connection) {
        try {
          await connection.close();
        } catch (err) {
          console.error(err);
          }
      }
  }
}

run();

module.exports = connection;
