const {app} = require('electron')
const {BrowserWindow} = require('electron')
app.on('ready', () => {
  let win = new BrowserWindow({show: true})
  win.once('ready-to-show', () => {
    win.show()
  })

win.loadURL('https://github.com')
})
