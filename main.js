const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    minWidth: 960,
    minHeight: 540,
    center: true,
    title: 'Hana no Kiseki — Dấu Ấn Hoa Anh Đào',
    icon: path.join(__dirname, 'assets/char/avatar_hana.png'),
    backgroundColor: '#080614',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      autoplayPolicy: 'no-user-gesture-required'
    }
  });

  // Remove default menu bar for clean game experience
  Menu.setApplicationMenu(null);

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
