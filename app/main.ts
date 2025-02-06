import { app, BrowserWindow, ipcMain, Menu, screen } from "electron";

let mainWindow: BrowserWindow | null;

app.whenReady().then(() => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  mainWindow = new BrowserWindow({
    width: Math.floor(width * 0.66),
    height: Math.floor(height * 0.95), 
    frame: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: __dirname + "/preload.js",
    },
  });

  mainWindow.loadURL("http://localhost:5173");
  
  mainWindow.webContents.openDevTools();

  Menu.setApplicationMenu(null);


  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

ipcMain.on("close-app", () => {
  app.quit();
});
