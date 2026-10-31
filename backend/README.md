# FitAdmin · Backend

API REST de FitAdmin, desarrollada con Node.js, Express 5, Sequelize y SQLite.

Para la descripción general y cómo ejecutar la aplicación completa, ver el [README principal](../README.md).

## Ejecución

```bash
npm install
node index.js
```

- API: `http://localhost:3001`
- Swagger: `http://localhost:3001/api-docs`

La ruta de la base se toma de la variable de entorno `DB_PATH`. Si no está definida, se usa `database.sqlite` en esta carpeta. Las tablas se crean automáticamente al iniciar.

## Estructura

```
backend/
├── index.js       arranque del servidor y registro de rutas
├── config/
│   ├── database.js    conexión a SQLite con Sequelize
│   └── swagger.js     documentación de la API
└── src/
    └── <modulo>/
        ├── routes/       endpoints
        ├── controller/   lógica de cada endpoint
        └── model/        entidad de Sequelize
```

## Módulos

| Módulo | Ruta base | Descripción |
|---|---|---|
| `members` | `/api/members` | Socios y búsqueda |
| `feeTypes` | `/api/fee-types` | Tipos de cuota (duración y precio) |
| `payments` | `/api/payments` | Pagos de cuotas por socio |
| `assistances` | `/api/assistances` | Registro de asistencias con control de cuota vigente |
| `expenses` | `/api/expenses` | Gastos del gimnasio |
| `reports` | `/api/reports` | Ingresos diarios, mensuales y anuales, gastos y rentabilidad |
