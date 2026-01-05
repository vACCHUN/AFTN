import { contextBridge, ipcRenderer, IpcRendererEvent, shell } from "electron";

contextBridge.exposeInMainWorld("electron", {
  closeApp: () => {
    ipcRenderer.send("close-app");
  },
  openExternal: (url: string) => ipcRenderer.send("open-external", url),
  onDeepLink: (callback: (url: string) => void) => {
    ipcRenderer.on("deep-link", (_event: IpcRendererEvent, url: string) => {
      callback(url);
    });
  },
});

contextBridge.exposeInMainWorld("env", {
  isElectron: true,
});
