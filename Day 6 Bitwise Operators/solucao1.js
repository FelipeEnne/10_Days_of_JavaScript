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

function getMaxLessThanK(n, k) {

    let arr = [];
    let x = 0;
    //console.log(n);
    //console.log(k);
    for (let i = 0; i < n; i++) {
        arr.push((i + 1));
    }
    //console.log(arr);
    for (let i = 0; i < arr.length; i++) { 
        for (let j = (i+1); j < arr.length; j++) {
            //console.log(arr[i] + " " + arr[j]);
            //console.log(arr[i] & arr[j]);
            //console.log(arr[i] + " " + arr[j] + " = " + (arr[i] & arr[j]));
            if ((arr[i] & arr[j]) < k) {
                if ((arr[i] & arr[j]) > x) {
                    x = (arr[i] & arr[j]);
                }
                //console.log(arr[i] + " " + arr[j] + " = " + (arr[i] & arr[j]));
                //console.log((arr[i] & arr[j]) + " > " + k);
                
            }
        }
    }


    return x;
}




function main() {
    const q = +(readLine());
    
    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);
        
        console.log(getMaxLessThanK(n, k));

    }

    process.exit();
}