const { app, BrowserWindow } = require('electron')
const path = require('path')
const fs = require('fs')
const { spawn } = require('child_process')

let win
let backendProcess

function ensureUserDb() {
  const userDataDir = app.getPath('userData')
  const userDbPath = path.join(userDataDir, 'database.sqlite')

  const seedDbPath = app.isPackaged
    ? path.join(process.resourcesPath, 'app', 'database.sqlite')
    : path.join(__dirname, 'database.sqlite')

  fs.mkdirSync(userDataDir, { recursive: true })

  if (!fs.existsSync(userDbPath)) {
    if (fs.existsSync(seedDbPath)) {
      fs.copyFileSync(seedDbPath, userDbPath)
      console.log('[DB] Copiada DB semilla a userData')
    } else {
      fs.writeFileSync(userDbPath, '')
      console.log('[DB] Creada DB vacía en userData')
    }
  }
  return userDbPath
}

function createWindow() {
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    show: false,
    backgroundColor: '#111111',
    webPreferences: {
      contextIsolation: true,
      sandbox: true,
      nodeIntegration: false,
      devTools: !app.isPackaged
    }
  })

  if (app.isPackaged) {
    win.loadFile(path.join(process.resourcesPath, 'app', 'frontend', 'dist', 'index.html'))
  } else {
    win.loadURL(`file://${path.join(__dirname, 'frontend', 'dist', 'index.html')}`)
  }

  win.once('ready-to-show', () => win.show())
}

app.whenReady().then(() => {
  const dbPath = process.env.DB_PATH || ensureUserDb()

  const backendPath = app.isPackaged
    ? path.join(process.resourcesPath, 'app', 'backend', 'index.js')
    : path.join(__dirname, 'backend', 'index.js')

  const nodeExec = app.isPackaged
    ? path.join(process.resourcesPath, 'app', 'node', 'node.exe')
    : process.execPath

  console.log('Ejecutando backend desde:', backendPath)
  console.log('Usando DB en:', dbPath)

  backendProcess = spawn(nodeExec, [backendPath], {
    cwd: app.isPackaged ? path.join(process.resourcesPath, 'app') : __dirname,
    env: {
      ...process.env,
      NODE_ENV: 'production',
      DB_PATH: dbPath,
      NODE_OPTIONS: '--max-old-space-size=256'
    },
    stdio: app.isPackaged ? 'ignore' : ['ignore', 'pipe', 'pipe'],
    windowsHide: true
  })

  if (!app.isPackaged && backendProcess.stdout) {
    backendProcess.stdout.on('data', data => console.log(`[BACKEND]: ${data}`))
    backendProcess.stderr.on('data', data => console.error(`[BACKEND ERROR]: ${data}`))
  }

  backendProcess.on('close', code => console.log(`[BACKEND CLOSED] Código: ${code}`))
  backendProcess.on('error', err => console.error('Error iniciando backend:', err))

  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    if (backendProcess) backendProcess.kill()
    app.quit()
  }
})
