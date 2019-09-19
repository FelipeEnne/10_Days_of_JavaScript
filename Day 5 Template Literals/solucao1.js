'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    if (inputStdin == -1){
            //console.log(inputStdin);
            inputString = inputString.trim().split('\n').map(string => {
            return string.trim();
            });
            main(); 
            
    }
    inputString += inputStdin;
    //console.log(inputStdin);
});



function readLine() {
    return inputString[currentLine++];
}

/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
var s1 = 0;
var s2 = 1;

function sides(literals, ...expressions) {

    //console.log(expressions);
    //console.log(literals);
    //console.log(expressions[0]);
    //console.log(expressions[1]);
    s1 = (expressions[1] + Math.sqrt(Math.pow(expressions[1], 2) - 16 * expressions[0])) / 4;
    
    //console.log(s1);
    s2 = (expressions[1] - Math.sqrt(Math.pow(expressions[1], 2) - 16 * expressions[0])) / 4;
    //x = s1*s1;
    //y = 2 * (s1 + s2);
    var arr = [s1, s2];
    arr = [s1, s2].sort();
    //console.log(arr);
    return arr;

}


function main() {
    let s1 = +(readLine());
    let s2 = +(readLine());
    
    [s1, s2] = [s1, s2].sort();
    
    const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;
    
    console.log((s1 === x) ? s1 : -1);
    console.log((s2 === y) ? s2 : -1);

    process.exit();
}