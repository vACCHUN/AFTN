import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electron", {
  closeApp: () => {
    ipcRenderer.send("close-app");
  },
});
