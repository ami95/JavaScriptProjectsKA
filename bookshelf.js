var books = [
    {
        title: "The Giver",
        stars: 4,
        author: "Lois Lowry",
        color: color(random(100,240), random(100,240), random(100,240)),
        red: Math.round(Math.random(0,1))
    },
    
    {
        title: "Principia",
        stars: 4,
        author: "Sir Isaac Newton",
        color: color(random(100,240), random(100,240), random(100,240)),
        red: Math.round(Math.random(0,1))
    },
    {
        title: "Cosmos",
        stars: 4,
        author: "Carls Sagan",
        color: color(random(100,240), random(100,240), random(100,240)),
        red: Math.round(Math.random(0,1))
    },
    {
        title: "A hundred years of solitude",
        stars: 4,
        author: "Gabriel García Márquez",
        color: color(random(100,240), random(100,240), random(100,240)),
        red: Math.round(Math.random(0,1))
    },
    {
        title: "The Magic Mountain",
        stars: 4,
        author: "Thomas Mann",
        color: color(random(100,240), random(100,240), random(100,240)),
        red: Math.round(Math.random(0,1))
    },
    {
        title: "Rich Man, Poor Man",
        stars: 4,
        author: "Irwin Shaw",
        color: color(random(100,240), random(100,240), random(100,240)),
        red: Math.round(Math.random(0,1))
    },
    {
        title: "The Republic",
        stars: 4,
        author: "Plato",
        color: color(random(100,240), random(100,240), random(100,240)),
        red: Math.round(Math.random(0,1))
    }, 
    {
        title: "Manufacturing Consent: The Political Economy of the Mass Media",
        stars: 4,
        author: "Edward S. Herman  and Noam Chomsky",
        color: color(random(100,240), random(100,240), random(100,240)),
        red: Math.round(Math.random(0,1))
    },
  
    {
        title: "Moromeţii",
        stars: 4,
        author: "Marin Preda",
        color: color(random(0,240), random(0,240), random(0,240)),
        red: Math.round(Math.random(0,1))
    },
    {
        title: "Femeile sunt de pe Venus...",
        stars: 4,
        author: "Patricia",
        color: color(random(100,240), random(100,240), random(100,240)),
        red: Math.round(Math.random(0,1))
    }, 
 
    ];



    var drawBook = function(x, y){
	// draw one book
    rect(x, y, 80, 80);
    
    // draw rating-stars
    for (var s = 0; s < books[s].stars; s++) {
        imageMode(CENTER);
        image(getImage("cute/Star"), x + 10 + s * 15, y + 70, 10, 15);
    }
};


// loop that displays each book at the right place
for(var i = 0; i < books.length; i++){
    var x = (i%4) * 100 +10;
    var y = floor(i/4) * 100 + 10;
    
    // Books that were read appear in dark green
    if(books[i].red === 1){
    // fill random color
        fill(books[i].color);
    } else {
        fill(0, 70, 70);
    }

    drawBook(x, y);
    
    // Get books title and author
    fill(0, 0, 0);
    textSize(12);
    text(books[i].title, x + 10 , y + 10, 60, 40);
    
    textSize(8);
    text("by " + books[i].author, x + 5, y + 50, 75, 20);
}


// loop that generates shelves
    for(var shelfCount = 0; shelfCount < i/4; shelfCount++){
    // draw shelf
        fill(173, 117, 33);
        rect(0, 100 + shelfCount * 100 - 10, 400, 10);
}
    
    
