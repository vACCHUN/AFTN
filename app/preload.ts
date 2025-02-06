import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electron", {
  closeApp: () => {
    console.log("Close app called from React!");
    ipcRenderer.send("close-app");
  },
});
