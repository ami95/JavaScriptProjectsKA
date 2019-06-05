background(219, 255, 255);

for(var i=0; i<400; i+=50){
    image(getImage("cute/TreeTall"), i-20, 200);
}


fill(255, 255, 255);
rect(60, 150, 280, 200);// house

for(var y=0; y<200; y+=100){
    for(var x=0; x<280; x+=70){
        if(x === 0 || x===140){
        image(getImage("cute/RampSouth"), 60+x, 100+y, 70, 170);
    } else {
        image(getImage("cute/PlainBlock"), 60+x, 100+y, 70, 170);
    }
    
    }
}

fill(120, 80, 19);
rect(80, 280, 40, 77); //door
image(getImage("cute/DoorTallClosed"), 60, 200, 70, 167);
fill(168, 230, 213);


for(var x=65; x<340; x+=100){
image(getImage("cute/WindowTall"),x ,100, 70,150);
//    rect(x, 200, 70, 50); // window
}

fill(255, 136, 0);
triangle(200, 10, 370, 160, 30, 160);//roof-woof
for(var x=0; x<400; x+=100){
    image(getImage("cute/GrassBlock"), x, 300);
}

image(getImage("creatures/Hopper-Happy"), 285,300);

