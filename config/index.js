const { createConnection } = require('mysql2')

module.exports = createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Root4Jags',
  database: 'burgers_db'
})
