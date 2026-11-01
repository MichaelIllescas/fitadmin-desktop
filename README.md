# FitAdmin

Aplicación de escritorio para la gestión de gimnasios. Funciona sin conexión a internet y sin instalar una base de datos: todo queda guardado en un archivo SQLite en la computadora del usuario.

Desarrollada originalmente para un gimnasio que la usó en producción.

## Funcionalidades

- **Socios:** alta, edición, búsqueda y baja, con estado activo o inactivo.
- **Control de acceso:** al registrar una asistencia el sistema verifica si la cuota del socio está al día y la marca como permitida o denegada, indicando el motivo.
- **Cuotas y pagos:** tipos de cuota configurables (duración y precio) y registro de pagos por socio.
- **Gastos:** registro y consulta de egresos del gimnasio.
- **Finanzas:** ingresos diarios, mensuales y anuales, gastos mensuales y rentabilidad anual, con gráficos.

El detalle de los requerimientos y el orden en que se desarrollaron está en [docs/historias-de-usuario.md](docs/historias-de-usuario.md).

## Stack

| Capa | Tecnologías |
|---|---|
| Escritorio | Electron, electron-builder (instalador NSIS para Windows) |
| Backend | Node.js, Express 5, Sequelize, SQLite, Swagger |
| Frontend | React 19, Vite, Material UI, Bootstrap, Chart.js, Recharts |

## Cómo funciona

Al abrir la aplicación, Electron:

1. Crea (si no existe) la base `database.sqlite` en la carpeta de datos de la aplicación (en Windows, dentro de `%APPDATA%`). Así los datos se conservan aunque se reinstale o actualice el programa.
2. Levanta el backend como un proceso de Node en segundo plano, en `http://localhost:3001`.
3. Abre la ventana con el frontend ya compilado.

```
┌─────────────────────────── Electron ───────────────────────────┐
│  Ventana (React)  ── HTTP ──▶  Backend (Express)  ──▶  SQLite  │
└────────────────────────────────────────────────────────────────┘
```

## Estructura del repositorio

```
fitadmin/
├── main.js      proceso principal de Electron
├── backend/     API REST (Express + Sequelize)
├── frontend/    interfaz (React + Vite)
└── docs/        historias de usuario y plan de desarrollo
```

Cada módulo de negocio (`members`, `payments`, `assistances`, `feeTypes`, `expenses`, `reports`) tiene en el backend sus propias rutas, controlador y modelo, y en el frontend su carpeta dentro de `src/features`.

## Cómo ejecutarlo

### Requisitos

- Node.js 20 o superior

### Instalación

```bash
npm install
npm --prefix backend install
npm --prefix frontend install
```

### Desarrollo

Compilar el frontend y abrir la aplicación:

```bash
npm run build:frontend
npm start
```

Para trabajar sólo sobre la interfaz con recarga automática, levantar el backend y el servidor de Vite por separado:

```bash
node backend/index.js
npm --prefix frontend run dev
```

La documentación de la API queda en `http://localhost:3001/api-docs`.

### Generar el instalador

El instalador incluye su propio Node para no depender de que el usuario lo tenga instalado. Antes de compilar, copiar `node.exe` en la carpeta `node/` de la raíz del proyecto:

```bash
npm run build
```

El instalador queda en `dist/`.

## Licencia

Distribuido bajo licencia MIT. Ver [LICENSE](LICENSE).

## Autor

Jonathan Illescas · [GitHub](https://github.com/MichaelIllescas)
