const fs = require("fs");

var userHome = getUserHome();

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(50);

  fs.readdir(userHome,
    function(err, data) {
      for (var i = 0; i < data.length; i++) {
        fill(random(60,255))
        rect(random(0,windowWidth),random(0,windowHeight),100,100)
      }
    }
  );

  noLoop();
}

function mouseClicked() {
  loop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function getUserHome() {
  return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}
