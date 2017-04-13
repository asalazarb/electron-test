const remote = require("electron").remote
const main = remote.require("./index.js")

var button = document.createElement('button')
button.textContent = 'Open Window'
button.addEventListener('click', () =>{
  var current = remote.getCurrentWindow()
  main.openWindow('page2')
  current.close()
}, false)
document.body.appendChild(button)
