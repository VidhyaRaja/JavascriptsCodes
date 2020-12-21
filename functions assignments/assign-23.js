/* AreaOfSquare : You have been 
given  4 inputs x1,y1,x2and y2.
The points (x1,y1) and (x2,y2) 
represent the end points of the 
diagonal of a square. Return the area of the square. */

function areaOfSquare(x1,y1,x2,y2){
    let diagonal, area;
    diagonal = Math.sqrt(Math.pow(Math.abs(x1-x2),2)+Math.pow(Math.abs(y1-y2),2));
    area =  Math.pow(diagonal,2)/2;
    return area;
}

console.log(areaOfSquare(15,20,35,5));
