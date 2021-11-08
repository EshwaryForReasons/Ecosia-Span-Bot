const { app, BrowserWindow } = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

var ListURLAddonForLoad = [
  "brilliance",
  "electronics",
  "routine",
  "progress",
  "officer",
  "abuse",
  "shine",
  "democratic",
  "transport",
  "team",
  "lick",
  "acquisition",
  "carve",
  "dialogue",
  "film",
  "arm",
  "pillow",
  "relationship",
  "decade",
  "consensus",
  "behead",
  "harvest",
  "sign",
  "city",
  "posture",
  "cake",
  "menu",
  "skeleton",
  "point",
  "chemistry",
  "Sunday",
  "positive",
  "receipt",
  "trial",
  "custody",
  "graduate",
  "tolerant",
  "rugby",
  "jockey",
  "ritual",
  "breeze",
  "adult",
  "vat",
  "cherry",
  "float",
  "census",
  "physics",
  "rent",
  "highlight",
  "circumstance",
  "graphic",
  "seal",
  "conference",
  "grind",
  "dip",
  "coal",
  "recruit",
  "mechanical",
  "celebration",
  "expertise",
  "pound",
  "litigation",
  "mild",
  "short",
  "circuit",
  "belly",
  "position",
  "draft",
  "crew",
  "manufacturer",
  "notebook",
  "scatter",
  "emphasis",
  "concert",
  "senior",
  "remain",
  "steel",
  "justice",
  "torture",
  "excess",
  "reputation",
  "shout",
  "tactic",
  "weed",
  "rebel",
  "gravel",
  "qualified",
  "go",
  "flood",
  "build",
  "visible",
  "hunter",
  "velvet",
  "hardship",
  "conviction",
  "recognize",
  "garage",
  "cell",
  "phone",
  "shallow",
]

var URLBaseForLoad
var RunNum
  
var x
var RandomPickA
  
var URLToUse

(function LoadPage() {
  setTimeout(function() {
    URLBaseForLoad = "https://www.ecosia.org/search?q="
    RunNum = 0
      
    x = Math.floor(Math.random() * 101);
    RandomPickA = ListURLAddonForLoad[x]
      
    URLToUse = URLBaseForLoad + RandomPickA

    // and load the index.html of the app.
    win.loadURL(URLToUse)

    LoadPage();
  }, 5000)
})(1000);

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // Open the DevTools.
  //win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.