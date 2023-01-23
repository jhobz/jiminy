// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from 'electron'
import { getTimingData } from './gsheets'

contextBridge.exposeInMainWorld('electron', {
    sendMessage: (channel: string, data: any) => {
        ipcRenderer.send(channel, data)
    },
    onMessage: (channel: string, callback: Function) => {
        ipcRenderer.on(channel, (e, ...args) => callback(...args))
    }
})

// contextBridge.exposeInMainWorld('google', {
//     getTimingData: (auth: any) => {
//         return getTimingData(auth)
//     }
// })