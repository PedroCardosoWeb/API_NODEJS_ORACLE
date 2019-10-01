const oracledb = require('oracledb'); //Load oracle lib
const dbConfig = require('./dbconfig.js'); //Acesso
// const objEntrega = require('../src/models/app-model.js')

var SimpleOracleDB = require('simple-oracledb'); //Load the simple oracledb

SimpleOracleDB.extend(oracledb); //Modify the original oracledb lib

var connection;

// var insere = `INSERT INTO bv_edi_proceda (:num_nf, :sr_nf, :dt_efet_entrega, :sn_efet_entrega, :obs_histor, :cod_entrega) VALUES = ? `;
// var operacao = QueryCRUD; // implantar condicional p metdodos CRUD

// function carrega(){ //recebe 'operacao' como parâmetro
//   try {
//     // Get a non-pooled connection
//     // connection.execute(`INSERT INTO bv_edi_proceda (:num_nf, :sr_nf, :dt_efet_entrega, :sn_efet_entrega, :obs_histor, :cod_entrega) VALUES = ? `, 
//     // [objEntrega.num_nf, objEntrega.sr_nf, objEntrega.dt_efet_entrega, objEntrega.sn_efet_entrega, objEntrega.obs_histor, objEntrega.cod_entrega],
//     connection.execute(
//     insere, // queryCRUD
//     objEntrega, // obj inserido
//     {autoCommit: true}, 
//     function (err, res) {
//     if(err) {
//         console.log("error: ", err);
//     }
//         else{
//             console.log(res.insertId);
//         }
//     })
//   } 
//   catch (err) {
//       console.error(err);
//   } 
// }

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