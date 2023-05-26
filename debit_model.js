// import {pathserver} from './pathserver';

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'my_user',
    host: 'localhost',
    database: 'my_user',
    password: 'root',
    port: 5432,
});


const getKoef = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM bd_tbl.vkoef', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }
  



  

//   const createMerchant = (body) => {
//      return new Promise(function(resolve, reject) {
//       const { name1, name2 } = body
//       pool.query('INSERT INTO merchants (name1, name2) VALUES ($1, $2) RETURNING *', [name1, name2], (error, results) => {
//         if (error) {
//           reject(error)
//         }
//         // resolve(`A new merchant has been added added: ${results.rows[0]}`)
//         // resolve(`Добавлена новая запись: ${results.rows[0]}`)
//       })
//     })
//   }
//   const deleteMerchant = () => {
//     return new Promise(function(resolve, reject) {
//       const id = parseInt(request.params.id)
//       pool.query('DELETE FROM merchants WHERE id = $1', [id], (error, results) => {
//         if (error) {
//           reject(error)
//         }
//         // resolve(`Merchant deleted with ID: ${id}`)
//          resolve(`Удалена запись с ID: ${id}`)
  
//       })
//     })
//   }

   module.exports = {
      getKoef,
   }


//   module.exports = {
//      getMerchants,
//      createMerchant,
//      deleteMerchant,
//   }
  