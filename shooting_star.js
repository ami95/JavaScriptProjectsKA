var xPos = 100;
var yPos = 250;

draw = function() {
    background(29, 40, 115);
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    ellipse(-xPos+323, -yPos+305, 25, 15);
    triangle(xPos -30,xPos -30,xPos -30,xPos,xPos,xPos -30);
    ellipse(xPos, yPos, 10, 10);
    ellipse(xPos+20, yPos-10, 10, 10);
    ellipse(xPos+40, yPos-20, 10, 10);
    ellipse(xPos+60, yPos-95, 12, 12);
    ellipse(xPos-40, yPos-105, 9, 9);
    ellipse(xPos-20, yPos+70, 11, 11);
    ellipse(xPos+70, yPos+60, 15, 15);
    
    xPos += 0.5;
    //yPos stays the same
    
};
