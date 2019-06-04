background(89, 216, 255);

var centerX = 200;
var centerY = 118;
var bodyLength = 131;
var bodyHeight = 74;
var bodyColor = color(145, 86, 179);

var drawFish = function(centerX, centerY, bodyLength, bodyHeight, bodyColor) {
    noStroke();
    fill(bodyColor);
    // body
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    // tail
    fill(bodyColor - random(0,100));
    var tailWidth = bodyLength/random(1.5,5);
    var tailHeight = bodyHeight/random(0.8,2);
    triangle(centerX-bodyLength/2, centerY,
             centerX-bodyLength/2-tailWidth, centerY-tailHeight,
             centerX-bodyLength/2-tailWidth, centerY+tailHeight);
    // eye
    fill(random(0,255), random(0,255), random(0,255));
    ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);   
};
         
drawFish(random(50, 350), random(0, 300), random(30, 220), random(15, 80), color(random(0, 255),random(0, 200),random(0, 255)));
         
drawFish(random(50, 300), random(0, 300), random(30, 220), random(15, 80), color(random(0, 255),random(0, 200),random(0, 255)));

drawFish(random(50, 350), random(0, 300), random(30, 120), random(15, 80), color(random(0, 255),random(0, 200),random(0, 255)));

drawFish(random(50, 350), random(0, 300), random(30, 120), random(15, 80), color(random(0, 255),random(0, 200),random(0, 255)));

drawFish(random(0, 400), random(0, 300), random(30, 120), random(15, 80), color(random(0, 255),random(0, 200),random(0, 255)));




