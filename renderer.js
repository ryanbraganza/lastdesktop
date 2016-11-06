// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const {ipcRenderer} = require('electron')

var execSync = require('child_process').execSync;

execSync('/usr/bin/open ~/Desktop/"$(/bin/ls -1tr ~/Desktop | /usr/bin/tail -1)"');

ipcRenderer.sendSync('synchronous-message', 'ping');
