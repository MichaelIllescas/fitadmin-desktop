# FitAdmin · Frontend

Interfaz de FitAdmin, desarrollada con React 19 y Vite.

Para la descripción general y cómo ejecutar la aplicación completa, ver el [README principal](../README.md).

## Ejecución

```bash
npm install
npm run dev
```

Necesita el backend corriendo en `http://localhost:3001`. La URL se configura en [`src/config/Config.js`](src/config/Config.js).

## Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build en `dist/`, que es lo que carga Electron |
| `npm run preview` | Sirve el build localmente |
| `npm run lint` | Análisis estático con ESLint |

El build usa rutas relativas (`base: './'`) y `HashRouter`, porque Electron abre la aplicación como archivo local y no desde un servidor.

## Estructura

```
src/
├── features/      un módulo por área: members, payments, assistances, fees, expenses, finances
├── dashboard/     pantalla principal
├── components/    sidebar y tablas reutilizables
├── routes/        rutas de la aplicación
├── config/        cliente HTTP contra la API
└── assets/
```
