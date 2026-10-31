const { Sequelize } = require('sequelize')
const path = require('path')
const fs = require('fs')

const dbPath = process.env.DB_PATH || path.join(__dirname, '..', 'database.sqlite')

fs.mkdirSync(path.dirname(dbPath), { recursive: true })
if (!fs.existsSync(dbPath)) {
  fs.writeFileSync(dbPath, '')
}

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbPath,
  logging: false,
  pool: { max: 1, min: 0 }
})

module.exports = sequelize
