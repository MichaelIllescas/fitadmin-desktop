const express = require('express')
const cors = require('cors')
const sequelize = require('./config/database')

const memberRoutes = require('./src/members/routes/member.routes')
const expenseRoutes = require('./src/expenses/routes/expense.routes')
const feeTypeRoutes = require('./src/feeTypes/routes/feeTypes.routes')
const paymentRoutes = require('./src/payments/routes/payment.routes')
const assistanceRoutes = require('./src/assistances/routes/assistances.routes')
const reportRoutes = require('./src/reports/routes/report.routes')

const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./config/swagger')

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

app.use('/api/members', memberRoutes)
app.use('/api/fee-types', feeTypeRoutes)
app.use('/api/payments', paymentRoutes)
app.use('/api/assistances', assistanceRoutes)
app.use('/api/expenses', expenseRoutes)
app.use('/api/reports', reportRoutes)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

async function init() {
  try {
    await sequelize.authenticate()
    console.log('[DB] Conexión OK')

    await sequelize.query('PRAGMA journal_mode = WAL;')
    await sequelize.query('PRAGMA synchronous = NORMAL;')

    await sequelize.sync()
    console.log('[DB] Modelos sincronizados')

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`)
      console.log(`Usando DB en: ${process.env.DB_PATH || 'ruta por defecto'}`)
    })
  } catch (err) {
    console.error('[DB] Error al inicializar:', err)
    process.exit(1)
  }
}

init()
