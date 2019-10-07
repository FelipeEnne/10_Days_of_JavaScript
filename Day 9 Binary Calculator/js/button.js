window.onload = function(){ 

document.getElementById('btn0').onclick = function(){
    document.getElementById('res').innerHTML =  document.getElementById('res').innerHTML + '0' ;
};

document.getElementById('btn1').onclick = function() {
    document.getElementById('res').innerHTML = document.getElementById('res').innerHTML + '1' ;
};

document.getElementById('btnClr').onclick = function() {
    document.getElementById('res').innerHTML = '' ;
};

document.getElementById('btnSum').onclick = function() {
    document.getElementById('res').innerHTML = document.getElementById('res').innerHTML + '+' ;
};

document.getElementById('btnSub').onclick = function() {
     document.getElementById('res').innerHTML = document.getElementById('res').innerHTML + '-' ;
};

document.getElementById('btnMul').onclick = function() {
      document.getElementById('res').innerHTML = document.getElementById('res').innerHTML + '*' ;
};

document.getElementById('btnDiv').onclick = function() {
        document.getElementById('res').innerHTML = document.getElementById('res').innerHTML + '/' ;
};


document.getElementById('btnEql').onclick = function() {

let x = [];
let resInt = 0;
let result = document.getElementById('res').innerHTML;

if (result.indexOf("+") >= 1){
//console.log(result.indexOf("+"));
x = document.getElementById('res').innerHTML.split('+');
//console.log(x.length);
for(let i = 0; i < 2; i++){
      x[i]= parseInt(x[i], 2);
      resInt += x[i];
       //console.log(resInt);
}

}

if (result.indexOf("-") >= 1){
       //console.log(result.indexOf("-"));
       x = document.getElementById('res').innerHTML.split('-');
       for(let i = 0; i < 2; i++){
            x[i]= parseInt(x[i], 2);
            //resInt = x[i];
            //console.log(x[i]);
       }
        resInt = x[0] - x[1];
}

       if (result.indexOf("*") >= 1){
             //console.log(result.indexOf("*"));
              x = document.getElementById('res').innerHTML.split('*');
                    for(let i = 0; i < 2; i++){
                        x[i]= parseInt(x[i], 2);
                        //resInt *= x[i];
                        //console.log(resInt);
                    }
                    resInt = x[0] * x[1];
                }
                if (result.indexOf("/") >= 1){
                    //console.log(result.indexOf("/"));
                    x = document.getElementById('res').innerHTML.split('/');
                    for(let i = 0; i < 2; i++){
                        x[i]= parseInt(x[i], 2);
                        //resInt /= x[i];
                        //console.log(resInt);
                    }
                    resInt = x[0] * x[1];
                }

                

                document.getElementById('res').innerHTML = resInt.toString(2);
};


}