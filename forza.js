const operators = ['minus', 'plus', 'times', 'division'];
const signs = {minus: '-', plus: '+', times: '*', division: '/'};
let total = 0;
let firstNumber = '';
let sign = '';

//screen refreshing function
function refreshScreen(value){
    firstNumber += value;
    document.getElementById('screen').innerHTML = firstNumber;
}

//setting listeners for all numbers
for(let i=0; i<=9; i++){
    document.getElementById('btn' + i).onclick = function(){
        refreshScreen(i);
    }
}

//setting operators listeners
operators.forEach(operators => {
    document.getElementById(operators).onclick = function(){

        if (total == 0){
            total = firstNumber;
            firstNumber = '';
        }
        
        //condition for being able concatenate multiple operations
        if(sign != ''){
            total = solution(total, firstNumber, sign);
            document.getElementById('screen').innerHTML = total;
            firstNumber = '';
        }

        sign = signs[operators];
    };
}); 

//operator function
function solution(previous, current, operation){
    previous = +previous;
    current = +current;
    if (operation == '+'){
         previous = previous + current;
    }
    else if(operation == '-'){
        previous = previous - current;
    }
    else if(operation == '*'){
        previous = previous * current;
    }
    else if(operation == '/'){
        previous = previous / current;   
    }
    return previous;
}

//clicking equal
document.getElementById('equal').onclick = function(){
    total = solution(total, firstNumber, sign);
    sign = '';
    firstNumber = '';
    document.getElementById('screen').innerHTML = total;
}

//clear
document.getElementById("clear").onclick = function(){
    document.getElementById("screen").innerHTML = 0;
    total = 0;
    firstNumber = '';
}