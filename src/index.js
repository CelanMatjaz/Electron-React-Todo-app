const { app, BrowserWindow } = require('electron');

let mainWindow;

const createMainWindow = () => {
    mainWindow = new BrowserWindow({
        width: 400,
        height: 600,
        title: 'Todo app',
        webPreferences: {
            nodeIntegration: true
        },
    });

    mainWindow.loadFile('index.html');
    mainWindow.setMenuBarVisibility(false);

    mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', () => {
    createMainWindow();
});
