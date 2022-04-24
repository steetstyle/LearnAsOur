import { contextBridge } from 'electron'

import { fileApi } from './apis/fileApi'
import { mainApi } from './apis/mainApi'

contextBridge.exposeInMainWorld('MainAPI', mainApi)
contextBridge.exposeInMainWorld('FileAPI', fileApi)
