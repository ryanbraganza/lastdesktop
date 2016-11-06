const electron = require('electron')
// Module to control application life.
const app = electron.app
const {execSync} = require('child_process')

app.on('ready', () => {
  execSync('/usr/bin/open ~/Desktop/"$(/bin/ls -1tr ~/Desktop | /usr/bin/tail -1)"')
  app.quit()
})
