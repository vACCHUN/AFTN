import { app, BrowserWindow, ipcMain, Menu, screen, nativeTheme } from "electron";
import "dotenv/config";
let mainWindow: BrowserWindow | null;

const WINDOW_SIZE = 0.7;
const ZOOM_STEP = 0.1;

app.whenReady().then(async () => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  mainWindow = new BrowserWindow({
    width: Math.floor(width * WINDOW_SIZE),
    height: Math.floor((width * WINDOW_SIZE * 3) / 4),
    resizable: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: __dirname + "/preload.js",
    },
  });

  mainWindow.setAspectRatio(4 / 3);

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
      submenu: [
        {
          label: "Nagyítás",
          click: () => {
            if (!mainWindow) return;
            const zoom = mainWindow.webContents.getZoomFactor();
            mainWindow.webContents.setZoomFactor(zoom + ZOOM_STEP);
          },
        },
        {
          label: "Kicsinyítés",
          click: () => {
            if (!mainWindow) return;
            const zoom = mainWindow.webContents.getZoomFactor();
            mainWindow.webContents.setZoomFactor(Math.max(0.25, zoom - ZOOM_STEP));
          },
        },
        {
          label: "Alapértelmezett",
          click: () => {
            if (!mainWindow) return;
            mainWindow.webContents.setZoomFactor(1);
          },
        },
      ],
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
