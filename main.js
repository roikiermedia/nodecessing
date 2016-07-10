const electron = require("electron");
const {app, BrowserWindow} = electron;

app.on("ready", () => {
  var win = new BrowserWindow({width: 640, height: 480});
  win.loadURL("file://" + __dirname + "/index.html");

});
