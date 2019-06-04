//positioning the cat on the x and y axis
var headX = 200;
var headY = 200;


var faceSize = 250;

//pupil width var
var i =7;

draw = function() {
    background(mouseX, 91, 92);

    fill(255, 255, 255);
    stroke(173, 173, 173);
    ellipse(headX, headY, faceSize, faceSize); // face; a
  
    stroke(255, 255, 255);
    fill(255, 255, 255);
    triangle(headX-1/4*faceSize, headY-0.43*faceSize, headX-1/4*faceSize, headY+0.43*faceSize, headX- faceSize/1.5, headY-faceSize/1.7); //left ear
    
    triangle(headX+1/4*faceSize, headY+0.43*faceSize, headX+1/4*faceSize, headY-0.43*faceSize, headX + faceSize/1.5, headY - faceSize/1.7); //left ear

  
    fill(255, 255, 255);
    stroke(173, 173, 173);
    ellipse(headX, headY + faceSize/4, faceSize/2, faceSize/2); //muzzle; b
    
    fill(255, 176, 176);
    triangle(headX, headY + faceSize/3,headX-(faceSize/12), headY + faceSize/4,headX+(faceSize/12),headY + faceSize/4); //nose; [chh']
    
    stroke(105, 105, 105);
    line(headX-(faceSize/12),headY + faceSize/3+faceSize/12,headX,headY + faceSize/3 + faceSize/18); //kd
    line(headX+(faceSize/12),headY + faceSize/3+faceSize/12,headX,headY + faceSize/3 + faceSize/18); //k'd
    
    
    stroke(105, 105, 105);
    line(headX-(faceSize/15), headY + faceSize/120, headX-(3*faceSize/24), headY + faceSize/10); //eg
    line(headX+(faceSize/15), headY + faceSize/120, headX + (3*faceSize/24), headY + faceSize/10); //e'g'
    
    stroke(105, 105, 105);
    line(headX-(3*faceSize/24), headY + faceSize/10, headX-(faceSize/12),headY + faceSize/4); //gh
    line(headX + (3*faceSize/24), headY + faceSize/10, headX+(faceSize/12),headY + faceSize/4); //g'h'
    
   stroke(105, 105, 105);
    line(headX - (3*faceSize/24), headY + faceSize/30, headX-(3*faceSize/24), headY + faceSize/10); //fg
    line(headX + (3*faceSize/24), headY + faceSize/30, headX + (3*faceSize/24), headY + faceSize/10); //f'g'
    
   stroke(105, 105, 105);
    line(headX-(3*faceSize/24), headY + faceSize/10,headX - faceSize/4 ,headY + faceSize/4); //gi
    line(headX + (3*faceSize/24), headY + faceSize/10, headX + faceSize/4, headY + faceSize/4); //g'i'
    
    stroke(105, 105, 105);
    line(headX - faceSize/4, headY + faceSize/4, headX - faceSize/4.4, headY + faceSize/3+faceSize/18); //ij
    line(headX + faceSize/4, headY + faceSize/4, headX + faceSize/4.4, headY + faceSize/3+faceSize/18); //i'j'
    
   stroke(105, 105, 105);
    line(headX - faceSize/4.4, headY + faceSize/3+faceSize/18, headX-(faceSize/12),headY + faceSize/3+faceSize/12); //jk
    line(headX + faceSize/4.4, headY + faceSize/3+faceSize/18, headX + (faceSize/12),headY + faceSize/3+faceSize/12); //j'k'
  

    
    stroke(0, 0, 0);
    fill(107, 247, 52);
    ellipse(headX - 0.23 * faceSize, headY, 5*faceSize/24, 3*faceSize/24); //left eye
    ellipse(headX + 0.23 * faceSize, headY, 5*faceSize/24, 3*faceSize/24); //right eye
    /*
    fill(0, 0, 0);
    ellipse(headX - 0.23 * faceSize, headY, 7*faceSize/100, 3*faceSize/24); //left pupil
    ellipse(headX + 0.23 * faceSize, headY, 7*faceSize/100, 3*faceSize/24); //right pupil
*/
    

        
    fill(0, 0, 0);
    ellipse(headX - 0.23 * faceSize, headY, i, 30); //left pupil
    ellipse(headX + 0.23 * faceSize, headY, i, 30); //right pupil
    
    i = -(-mouseX/15+ 30);

    headY = 200;
    //faceSize++;
    var ballX = 25;
    fill(mouseX, mouseX, 0);
    ellipse(mouseX, 360, 50, 50);
};
