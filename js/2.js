
//--------task 1 ----------------------------

let inputYearOfBirth = document.querySelector('.inputYearOfBirth');
let buttonTask1 = document.querySelector('.enterTask1');

buttonTask1.addEventListener('click', howOld);


function howOld(){
	
    if(inputYearOfBirth.value.length === 4){
        alert('Ваш возвраст: ' + (2017 - inputYearOfBirth.value) + ' лет');
    }
    else if(inputYearOfBirth.value.length === 2){
        alert('Ваш возвраст: ' + (17 - inputYearOfBirth.value));
    }   
    else{
        alert('Введите корректную дату рождения');
    } 

}

//--------task 2 ----------------------------

let inputFirst = document.querySelector('.inputFirst');
let inputSecond = document.querySelector('.inputSecond');
let buttonTask2 = document.querySelector('.enterTask2');

buttonTask2.addEventListener('click', maxNumber);

function maxNumber(){
    let result = Math.max(inputFirst.value, inputSecond.value);
    alert('Максимальное число: ' + result );

}

//--------task 3 ----------------------------
let inputNumberFlat = document.querySelector('.inputNumberFlat');
let buttonTask3 = document.querySelector('.enterTask3');

buttonTask3.addEventListener('click', numberPorch);

function numberPorch(){
    if(inputNumberFlat.value > 0 && inputNumberFlat.value< 21){
        alert('Квартира находится в 1-м подьезде!')
    }
    else if(inputNumberFlat.value > 20 && inputNumberFlat.value< 65){
        alert('Квартира находится во 2-м подьезде!')
    }
    else if(inputNumberFlat.value > 65 && inputNumberFlat.value< 81){
        alert('Квартира находится в 3-м подьезде!')
    }
    else alert("Введите корректный номер квартиры");
}

//--------task 4 ----------------------------

let login = document.querySelector('.login');
let pass = document.querySelector('.pass');
let buttonTask4 = document.querySelector('.enterTask4');

buttonTask4.addEventListener('click', isCorrect);

function isCorrect(){    
    if(login.value == 'ivan' && pass.value == '333' || login.value == 'ssss' && pass.value == '665' || login.value == 'gibs' && pass.value == '0000' ){
       alert('Добро пожаловать');
    }
    else{        
        alert('ошибка');        
    }
    login.value = '';
    pass.value = '';
}

//--------task 5 ----------------------------

let inputNum = document.querySelectorAll('input');
let buttonTask5 = document.querySelector('.enterTask5');

buttonTask5.addEventListener('click', whatIsBiggest);

function whatIsBiggest(){
    let numberMax = 0;
    for (let i = 0; i < inputNum.length; i++) {

        if(inputNum[i].value > numberMax){
            numberMax = inputNum[i].value;   
             console.log ("inputNum =" + inputNum[i].value);          
        }  
        inputNum[i].value = '';  

    }
    alert('Максимальное число ' + numberMax);
}


//--------task 6 ----------------------------

// ------------вывод на экран в <div>
let task1 = document.querySelector('.task1');
let task2 = document.querySelector('.task2');
let task3 = document.querySelector('.task3');

let task5 = document.querySelector('.task5');
let task6 = document.querySelector('.task6');
//--------------------------------------------

let buttonTask6 = document.querySelector('.enterTask6');
buttonTask6.addEventListener('click' , f);


function f(){
//-------------------task 6.1 ---------------

for (var i = 0; i < 102; i++) {
    if(i % 2 == 0){
        task1.textContent += i + ' ';
    }    
}
//-------------------task 6.2 ---------------

for (var i = 200; i >= 0; i--) {    
        task2.textContent += i + ' ';        
}

//-------------------task 6.3 ---------------

let number = 0;
for (var i = 0; i < 101; i++) {    
       number +=i;         
}

task3.textContent += number;

//-------------------task 6.5 ---------------
let resMulti = 1;
let multiplication = 7;

for (let i=1; i<10; i++){
resMulti = multiplication*i;
task5.innerHTML+= i+ '* 7 = '+ resMulti +'<br>';
}

//-------------------task 6.6 ---------------
let SpecialChar = '';
for (var i = 1000; i <=2000; i++) {
     
    SpecialChar += String.fromCharCode(i);
     
}
        task6.textContent +=  SpecialChar + ' ';

}


//----------------очистка результатов вывода на экран
let buttonCleanUp = document.querySelector('.enterCleanUp');
buttonCleanUp.addEventListener('click' , CleanUp);
function CleanUp (){

task1.textContent = '';
task2.textContent = '';
task3.textContent = '';
task4.textContent = '';
task5.textContent = '';
task6.textContent = '';
}
//-------------------task 6.4 ---------------

let task4 = document.querySelector('.task4');
let inpSixNum = document.querySelector('.inpSixNum');
let inpSixDegreeOf = document.querySelector('.inpSixDegreeOf');
let buttonTaskSix4 = document.querySelector('.enterTaskSix4');

buttonTaskSix4.addEventListener('click', whatIsDegreeOf);
function whatIsDegreeOf(){
    let res = inpSixNum.value;
    for (let i = 1; i < inpSixDegreeOf.value; i++) {
        (res *= inpSixNum.value);

    }
    // alert('число ' + inpSixNum.value + ' в степени ' + inpSixDegreeOf.value + ' равно ' + res );
    task4.textContent+= 'Результат: '+res;

}
    //----------------------------------------------

