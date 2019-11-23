const {
    app,
    BrowserWindow,
    ipcMain,
    dialog
} = require('electron')
var mainwin, Loginwin;

app.setPath('userData', "C:/OneDrive/GameKey")

function createAppWindow() {
    mainwin = new BrowserWindow({
        width: 800,
        height: 500,
        frame: false,
        transparent: true,
        webPreferences: {
            nodeIntegration: true,
            devTools: false
        }
    })

    mainwin.loadURL('file://' + __dirname + '/index.html')
}

function createLoginWindow() {
    Loginwin = new BrowserWindow({
        width: 1000,
        height: 800,
        transparent: true,
        frame: false,
        webPreferences: {
            nodeIntegration: true
        }
    })

    Loginwin.loadURL('file://' + __dirname + '/Login.html')
}

app.on('ready', createLoginWindow)

ipcMain.on('minimize-app', (event) => {
    if (mainwin != null)
        mainwin.minimize();
    else Loginwin.minimize();
})

ipcMain.on('maximize-app', (event) => {
    mainwin.maximize();
})
ipcMain.on('access-app', (event) => {
    createAppWindow();
    Loginwin.hide();
})

ipcMain.on('unmaximize-app', (event) => {
    if (mainwin != null) {
        mainwin.setSize(800, 500);
        mainwin.center();
    } else {
        Loginwin.setSize(800, 500);
        Loginwin.center();
    }
})

ipcMain.on('close-app', (event) => {
    if (mainwin != null) mainwin.close();
    else
        Loginwin.close();
})

ipcMain.on('Path-request', (event, Platform) => {
    dialog.showOpenDialog(mainwin, {
        properties: ['openFile'],
        filters: [{
                name: 'Supported Files',
                extensions: ['txt', 'xlsx']
            },
            {
                name: 'Text Files',
                extensions: ['txt']
            },
            {
                name: 'Excel Files',
                extensions: ['xlsx']
            },
            {
                name: 'All Files',
                extensions: ['*']
            }
        ]
    }).then(result => {
        if (!result.canceled) event.reply('Path-reply', result.filePaths, Platform)
    }).catch(err => {
        console.log(err)
    })

})