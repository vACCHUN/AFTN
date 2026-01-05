import { app, BrowserWindow, ipcMain, Menu, screen, nativeTheme } from "electron";
import "dotenv/config";
let mainWindow: BrowserWindow | null;

app.whenReady().then(async () => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  mainWindow = new BrowserWindow({
    width: Math.floor(width * 0.55),
    height: Math.floor(height * 0.95),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: __dirname + "/preload.js",
    },
    resizable: false,
  });

  await mainWindow.webContents.session.clearCache();

  mainWindow.loadURL(process.env.URL as string);

  mainWindow.webContents.openDevTools();

  const template: Electron.MenuItemConstructorOptions[] = [
    {
      label: "Adás",
      submenu: [],
    },
    {
      label: "Keresés",
      submenu: [],
    },
    {
      label: "Beállítás",
      submenu: [],
    },
    {
      label: "Archívum",
      submenu: [],
    },
    {
      label: "Súgó",
      submenu: [
        /*{ label: "About", click: () => console.log("asd") }*/
      ],
    },
    {
      label: "Kilépés",
      click: () => app.quit(),
    },
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  nativeTheme.themeSource = "light";

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
