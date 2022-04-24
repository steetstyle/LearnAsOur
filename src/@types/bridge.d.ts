import { mainApi } from '../../electron/apis/mainApi'
import { fileApi } from '../../electron/apis/fileApi'


declare global {
	// eslint-disable-next-line
	interface Window {
		MainAPI: typeof mainApi
		FileAPI: typeof fileApi
	}
}
