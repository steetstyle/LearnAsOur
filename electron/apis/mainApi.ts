import { ipcRenderer } from 'electron'

export const mainApi = {
	/**
	 * Here you can expose functions to the renderer process
	 * so they can interact with the main (electron) side
	 * without security problems.
	 *
	 * The function below can accessed using `window.Main.sendMessage`
	 */

	sendMessage: (message: any) => {
		ipcRenderer.send('message', message)
	},

	setSizeOfMainWindow: (message: { width: number; height: number; }) => {
		ipcRenderer.send('setSizeOfMainWindow', message)
	},

	/**
	 * Provide an easier way to listen to events
	 */
	on: (channel: string, callback: Function) => {
		ipcRenderer.on(channel, (_, data) => callback(data))
	},
}
