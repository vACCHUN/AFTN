import { app, BrowserWindow, ipcMain, Menu, screen, nativeTheme, shell } from "electron";
import "dotenv/config";
import path from "path";
let mainWindow: BrowserWindow | null;

const WINDOW_SIZE = 0.7;
const ZOOM_STEP = 0.1;
const PRODUCTION_URL = "https://cc.vacchun.hu/aftn";
const DEV_URL = "http://127.0.0.1:5173/aftn";

app.whenReady().then(async () => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const isDev = !app.isPackaged;

  mainWindow = new BrowserWindow({
    width: Math.floor(width * WINDOW_SIZE),
    height: Math.floor((width * WINDOW_SIZE * 3) / 4),
    resizable: true,
    maximizable: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });
  mainWindow.loadURL(isDev ? DEV_URL : PRODUCTION_URL);

  mainWindow.webContents.openDevTools();

  mainWindow.setAspectRatio(4 / 3);

  await mainWindow.webContents.session.clearCache();

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

app.setAsDefaultProtocolClient("aftn");

if (!app.isPackaged) {
  app.setAsDefaultProtocolClient("aftn", process.execPath, [path.resolve(process.argv[1])]);
}

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

ipcMain.on("close-app", () => {
  app.quit();
});

app.on("open-url", (event, url) => {
  event.preventDefault();
  console.log("Deep link:", url);

  if (mainWindow) {
    mainWindow.webContents.send("deep-link", url);
  }
});

app.on("second-instance", (event, argv) => {
  const deepLink = argv.find((arg) => arg.startsWith("aftn://"));
  if (deepLink && mainWindow) {
    mainWindow.webContents.send("deep-link", deepLink);
  }
});

ipcMain.on("open-external", (event, url) => {
  console.log("Opened: ", url);
  shell.openExternal(url).catch((err) => {
    console.error("Failed to open URL:", err);
  });
});

const gotLock = app.requestSingleInstanceLock();
if (!gotLock) {
  app.quit();
}
