const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Preload script if needed, though not strictly for this app
      nodeIntegration: true, // Enable Node.js integration for file system access
      contextIsolation: false, // Disable context isolation for simplicity in this example
    },
  });

  mainWindow.loadFile('main.html'); // Load your main.html file
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
