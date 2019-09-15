'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    if (inputStdin == -1){
            console.log(inputStdin);
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

function getGrade(score) {
    let grade;
    // Write your code here
    if (score > 25) {
        grade = 'A';
    } else if (score > 20) {
        grade = 'B';
    } else if (score > 15) {
        grade = 'C';
    } else if (score > 10) {
        grade = 'D';
    } else if (score > 5) {
        grade = 'E';
    } else {
        grade = 'F';
    }
    return grade;
}


function main() {
    const score = +(readLine());
    
    console.log(getGrade(score));

    process.exit();
}