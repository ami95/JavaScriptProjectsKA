/*WHILE ASKING THE QUESTION, HOLD THE LEFT MOUSE BUTTON PRESSED
    RELEASE IT WHEN YOU ARE READY TO SEE THE ANSWER !
    ENJOY :)
*/

fill(0, 0, 0);
ellipse(200, 200, 375, 375);
var triangleColor = fill(60, 0, 255);
var answer = 0;

mouseClicked = function(){
    if (answer === 1) {
        text("YES", 188, 200);
        text("IT IS CERTAIN", 159, 229);
        triangleColor = fill(2,222,2);
    } else if (answer === 2) {
        text("MAYBE", 180, 221);
        var triangleColor = fill(3, 17, 222);
    }else if (answer === 3) {
        text("IT IS", 188, 200);
        text("UP TO YOU", 166, 229); 
        var triangleColor = fill(156, 65, 123);
    }else if (answer === 4) {
        text("ALL", 188, 200);
        text("IS POSSIBLE", 159, 229); 
        var triangleColor = fill(255, 208, 0);
    }else if (answer === 5){
        text("ONLY YOU", 168, 216);
        text("KNOW THE ANSWER", 139, 256); 
        var triangleColor = fill(36, 119, 120);
    }
};

draw = function() {
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255);
    mouseClicked();
    
    if (mouseIsPressed) {
    // shows a mr-pink image in a white triangel while generating random numbers
    //fill(255, 255, 255);
    //triangle(200, 104, 280, 280, 120, 280);
    //image(getImage("avatars/mr-pink"), 151, 170, 100, 100);
    // generates random number and attributes it to the answer variable
    answer = floor(random(1, 6));
    }

};
