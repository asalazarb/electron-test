const {app} = require('electron')
const {BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

app.on('ready', () => {
  let win = new BrowserWindow({show: true})
  win.once('ready-to-show', () => {
    win.show()
  })

  win.loadURL(url.format({
    pathname: path.join(__dirname, '../html/index.html'),
    protocol: 'file:',
    slashes: true
  }))
})

exports.openWindow = (filename) =>{
  let win = new BrowserWindow({width: 800, height: 600})
  win.loadURL(url.format({
    pathname: path.join(__dirname, '../html/' + filename + '.html'),
    protocol: 'file:',
    slashes: true
  }))
}
