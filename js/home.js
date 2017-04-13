const remote = require("electron").remote
const main = remote.require("./index.js")


var button = document.createElement('button')
button.textContent = 'Git Status'
button.addEventListener('click', () =>{
//  var current = remote.getCurrentWindow()
//  main.openWindow('page2')
  var str = main.commit()
  document.getElementById("hh").innerHTML = str;

  //current.close()
}, false)
document.body.appendChild(button)

/*var button2 = document.createElement('button2')
button.textContent = 'Commit'
button.addEventListener('click', () =>{
  main.commit()
}, false)
document.body.appendChild(button2)*/
