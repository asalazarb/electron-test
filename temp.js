const shell = require('shelljs')

var str = shell.exec('git commit -m');
shell.echo(str)
