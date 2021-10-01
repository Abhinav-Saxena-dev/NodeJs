const rect = require('./rectangle')

const solveRect = (l,b) => {
    console.log("Solving rectangle with l = " +l+ " and b = "+b);

    if( l<=0 || b<=0){
        console.log("rectangle dimensions are invalid");
        return;
    }
    console.log("area is :" +(rect.area(l,b)));
    console.log("perimeter is :" +(rect.perimeter(l,b)));
}

solveRect(3,5);
solveRect(-1,2);