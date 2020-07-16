// - створити функцію яка виводить масив
function function1(array) { 
    console.log(array);  
}
function1(['Vasya',58,'Olya',35])
// - створити функцію яка заповнює масив рандомними числами та виводить його.
//  Для виведення використати попередню функцію.

function randomNum(lenght,min,max){
    let ranNum=[];
    for (let i=0;i<lenght;i++) {
        ranNum.push(Math.floor(Math.random()*(max-min)+min));
    }
    return ranNum
}
let randomArray= randomNum(10,1,100);
function1(randomArray)

// - створ)ити функцію яка приймає три числа та виводить та повертає найменьше.

function funcMin(){
    let min=arguments[0];
    for(let num of arguments ){
        if(num<min){
            min=num;
        }
    }
    console.log(min);
return min;
}
let minNumber=funcMin(5,9,12);

// - створити функцію яка приймає три числа та виводить та повертає найбільше.
function funcMax(){
    let max=arguments[0];
    for(let num of arguments ){
        if(num>max){
            max=num;
        }
    }
    console.log(max);  
return max;
}
let maxNumber=funcMax(5,9,12);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
function minMax(){
    let min=arguments[0];
    let max=arguments[0];
    for(let i=0;i<arguments.length;i++){
        if(arguments[i]<min){
            min=arguments[i];
        }
        if(arguments[i]>max){
            max=arguments[i];
        }
    }
    console.log('max'+max);
    return min
}
let minMaxNumbers=minMax(6,8,5,7,3,15,25);
console.log('min'+minMaxNumbers);
// - створити функцію яка виводить масив

let array1=[2,5,66,98,54,37,2,4,42];
function arrayFunc(a){
    console.log(a);
}
arrayFunc(array1);
// - створити функцію яка повертає найбільше число з масиву
function arrMax(){
    let max=array1[0];
    for(let elem of array1){
        if(max<elem){
            max=elem
        }
    }
   return max;     
}
let arr1max=arrMax();
console.log(arr1max);
// - створити функцію яка повертає найменьше число з масиву
function arrMin(){
    let min=array1[0];
    for(let elem of array1){
        if(min>elem){
            min=elem
        }
    }
   return min;     
}
let arr2min=arrMin();
console.log(arr2min);
// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
function sumElements(){
    let sum=0;
    for(i=0;i<array1.length;i++){
        sum+=array1[i];  
    }
    return sum
}
let result1=sumElements(array1);
console.log(result1);
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function sumArifmet(){
    let sum=0;
    for(i=0;i<array1.length;i++){
        sum+=array1[i]; 
        result=sum/array1.length 
    }
    return result;
}
let result2=sumArifmet(array1);
console.log(result2);
// - Створити функцію яка приймає масив будь яких объектів, 
// та повертає значення кількості об'єктів в масиві
let array3=[
    {name:'Dingo',age:5,color:'white',weight:40,size:'small'},
    {model:'honda',age:5,color:'silver',weight:950,size:'big'},
    {name:'Vasya',age:25,job:'doctor',weight:85,status:'married'},
    {location:'center',floor:3,rooms:3,status:'owned',size:'big'}
]

function funcObject(array3){
    let a=array3.length;
    return a
}
let arraylength=funcObject(array3)
console.log(arraylength);
// - Створити функцію яка приймає масив будь яких объектів,
//  та повертає загальн кількість полів в них
function funcKeys(){
    let sum=0;
    for(let obj of array3){
        let a=Object.keys(obj);
        sum+=a.length;
    }
    return sum;
}
let arrayKeys=funcKeys(array3)
console.log(arrayKeys);

// - створити функцію  яка скаладає значення елементів з однаковими індексами 
//  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

function sumArray(array4,array5){
    let arrayOfSum=[];
    for (let i = 0; i< array4.length; i++) {
        sumElem = array4[i]+array5[i];
        arrayOfSum.push(sumElem);
    }
    return arrayOfSum;
}
let array6=sumArray([1,2,3,4],[2,3,4,5]);
console.log(array6);

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
function owu(){
    let div=document.createElement('div');
    div.innerText='Hello owu';
    document.body.appendChild(div)
}
owu()
// / Створити функцію яка :
// - Додає в боді елемент з текстом . 
// Тип елементу та текст отримати через аргументи
function textElement(type,text){
    let divka=document.createElement(type)
    divka.innerText=text;
    console.log(divka);
    document.body.appendChild(divka);
 }   
textElement('h3','Show must go on'); 
// / Створити функцію яка :
// - приймає масив автомобілів (можна взяти з попередніх дз ),
// та  індентифікатор елемeнту в який потрібно додати список цих автомобілів.
let cars=[
    car1={model:'mazda',year:2006,power:150,color:'red'},
    car2={model:'honda',year:2010,power:170,color:'silver'},
    car3={model:'wv',year:2002,power:100,color:'green'},
    car4={model:'toyota',year:2007,power:180,color:'black'},
    car5={model:'yaguar',year:2017,power:200,color:'blue'},
    car6={model:'ford',year:2008,power:165,color:'white'},
    car7={model:'seat',year:2012,power:185,color:'grey'},
    car8={model:'bmw',year:2015,power:195,color:'darkgrey'},
    car9={model:'nissan',year:2005,power:190,color:'darkblue'},
    car10={model:'mersedes',year:2004,power:155,color:'brown'},
];
function carsArray(array,id) {
    
    for (let car of cars) {
        let carsDiv=document.createElement('div')
        
        carsDiv.innerText=(`${car.model}-${car.year}-${car.power}-${car.color}`)
        let elementId= document.getElementById(id);
        let divCar=elementId.appendChild(carsDiv)

    }
 }

carsArray(cars,'carsid')



// - приймає масив автомобілів (можна взяти з попередніх дз ),
// та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент,
//  індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
function newCars(array) {
    // let allCars=document.getElementById(id)
    for (let car of cars) {
        
        let carDivka=document.createElement('div');
       
        let modelDiv=document.createElement('div');
        modelDiv.innerText=car.model;
        carDivka.appendChild(modelDiv);

        let yearDiv=document.createElement('div');
        yearDiv.innerText=car.year;
        carDivka.appendChild(yearDiv);

        let powerDiv=document.createElement('div');
        powerDiv.innerText=car.power;
        carDivka.appendChild(powerDiv);

        let colorDiv=document.createElement('div');
        colorDiv.innerText=car.color;
        carDivka.appendChild(colorDiv);

        
        document.body.appendChild(carDivka);
    }
      
}
newCars(cars,)


// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та 
// з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
            let usersWithId = [ 
                {id: 1, name: 'vasya', age: 31, status: false}, 
                {id: 2, name: 'petya', age: 30, status: true}, 
                {id: 3, name: 'kolya', age: 29, status: true}, 
                {id: 4, name: 'olya', age: 28, status: false},];
            let citiesWithId = [
                {user_id: 3, country: 'USA', city: 'Portland'}, 
                {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
                {user_id: 2, country: 'Poland', city: 'Krakow'}, 
                {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:

function usersInCity(array1,array2){
    // let usersWithCity=[];
    for (let i = 0; i < array1.length; i++) {
        
        for (let j = 0; j < array2.length; j++) {
            
            if(array1[i].id===array2[j].user_id){
               array1[i].adress=array2[j]
               
            }
           
        }
       
    }
     return array1
  
}
let showAdress=usersInCity(usersWithId,citiesWithId);
console.log(showAdress)