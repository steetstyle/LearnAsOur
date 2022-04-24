import { app, BrowserWindow, ipcMain, session, screen, globalShortcut } from 'electron'
import path from 'path'

let mainWindow: BrowserWindow | null

declare const MAIN_WINDOW_WEBPACK_ENTRY: string
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string

const assetsPath =
	process.env.NODE_ENV === 'production'
    ? process.resourcesPath
    : app.getAppPath()

function createWindow() {
	mainWindow = new BrowserWindow({
		icon: path.join(assetsPath, 'assets', 'icon.png'),
		frame: false,
		width: 1100,
		height: 700,
		backgroundColor: '#191622',
		webPreferences: {
			nodeIntegration: false,
			contextIsolation: true,
			preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
			webSecurity: true,
		}
	})


	if (process.env.NODE_ENV !== 'production') mainWindow.webContents.openDevTools({ mode: 'detach' })
	mainWindow.setMenuBarVisibility(false)

	mainWindow.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true })

	mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)
	// mainWindow.loadURL(process.env.NODE_ENV !== 'production' ? MAIN_WINDOW_WEBPACK_ENTRY: `file://${__dirname}/../build/index.html`);


	let ignoreMouseEventsToggle = false

	mainWindow.setAlwaysOnTop(true)
	mainWindow.setResizable(false)

	// Register the toogle visibility shorcuts
	globalShortcut.register("Capslock", () => {
		if(! mainWindow) throw new Error('mainWindowNotFound')
		ignoreMouseEventsToggle = !ignoreMouseEventsToggle
		mainWindow.setIgnoreMouseEvents(ignoreMouseEventsToggle)
	});

	mainWindow.on('closed', () => {
		mainWindow = null
	})

	session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
	// eslint-disable-next-line node/no-callback-literal
	callback({
		responseHeaders: {
			...details.responseHeaders,
			// 'Content-Security-Policy': ['script-src \'self\' http://localhost:3000']
		}
	})
})
}

async function registerListeners() {
	/**
	 * This comes from bridge integration, check bridge.ts
	 */

	ipcMain.on('message', (_, message) => {
		console.log(message)
	})

	ipcMain.on('setSizeOfMainWindow', (_, message: { width: number, height: number }) => {
		if(! mainWindow) throw new Error('mainWindowNotFound')
		mainWindow.setSize(message.width, message.height)
		mainWindow.setPosition((screen.getPrimaryDisplay().workAreaSize.width) - (message.width), (screen.getPrimaryDisplay().workAreaSize.height) - (message.height))
	})
}

app.on('ready', createWindow)
	.whenReady()
	.then(registerListeners)
	.catch(e => console.error(e))

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow()
	}
})