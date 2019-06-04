background(0, 153, 69);
var x = 100;
var y = -100;

fill(255, 255, 255);
textSize(50);
text(" AN EMPTY BOX", 0, 90);
fill(242, 228, 228);

stroke(255, 255, 255);
var draw = function(){

    
    fill(255, 255, 255);
    rect(0, 398, x, y);
    
    noStroke();
    fill(255, 255, 255);
    rect(y+480,308,40,40);
    
    noStroke();
    fill(0, 153, 70);
    rect(324,308,40,40);
    


    textSize(15);
    fill(0, 153, 70);
    text("It fills your whole world up!", 123, 181);
    text("www.emptybox.com", 251, 369);

    x+=2;
    y--;
};
