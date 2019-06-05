/* Click on the background to generate more drops
*/


var xPositions = [];
var yPositions = [];
var colors = [];
var dropCount = 50;
var click = 1;

// generates initial x and y positions for individual drops
    while(xPositions.length < dropCount && yPositions.length < dropCount){
        xPositions.push(Math.round(random(0,400)));
        yPositions.push(Math.round(random(-400,0)));
        colors.push(color(random(0,240), random(0,240), random(0,240)));
    }
    
    var drawDrop = function(){
        for (var i = 0; i < click ; i++) {
        noStroke();
        fill(colors[i]);
        ellipse(xPositions[i], yPositions[i], 10, 10);
        yPositions[i] += 5;
        /* change the yPosition and the y position to a random position, as soon as it reaches a value above 400(bottom)
        */
    if(yPositions[i] > 400){
        yPositions[i] = random(-40,0);
        xPositions[i] = random(0, 400);
    }    
    }
    };
    
    var drawHopper = function(){
        for (var i = 0; i < 5 ; i++) {
        image(getImage("creatures/Hopper-Happy"),xPositions[i], yPositions[i], 50, 50);
        yPositions[i] = yPositions[i]-3;
        /* change the yPosition and the y position to a random position, as soon as it reaches a value above 400(bottom)
        */
    if(yPositions[i] > 400){
        yPositions[i] = random(-40,0);
        xPositions[i] = random(100, 300);
    }    
    }
    };
    
    draw = function() {
        
        background(204, 247, 255);
        fill(0, 0, 0);
text("One clikc = one extra-drop", 20, 20);
text("n clicks = n extra-drops", 20, 40);
        drawHopper();
        drawDrop();
        
        //increments the nr. of drops by one for each click
        mouseClicked = function() {
        click += 1;
    };
    
    
};
