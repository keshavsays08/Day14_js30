//understanding diff. btw Referencing and Copying
//start with numbers, strings & boolean


let age = 100;
let age2 = age;
 
console.log(age,age2);
//result is  ---> 100 100
//reassigning the value age variable
age = 500;

console.log(age,age2);
//result is  --->  500 100 

// the point is that here nothing happens to the value of age2 whereas it was assigned to age initially and changes were made only in the age variable

//lets now work with strings 

let Name = "keshav";
let Name2 = Name;
console.log(Name,Name2);
//result is  --->  keshav keshav 

//reassigning the value age variable
Name = "gairola";

console.log(Name,Name2);
//result is  --->  gairola keshav 

// again the point is that here nothing happens to the value of Name2 whereas it was assigned to Name initially and changes were made only in the Name variable


//Now lets play with array!!

const players = ['google','netflix','amazon','meta'];

//and we want to make a copy of it.
const team  = players;
//assigning a new variable equals the previous array no more specifically team is reference array;

console.log(players,team);
//result is  --->  ['google', 'netflix', 'amazon', 'meta']    ['google', 'netflix', 'amazon', 'meta']

//you might think we can just do something like this:
team[3] = 'statistica';
console.log(team);
//result is  ---> ['google', 'netflix', 'amazon', 'statistica']

//this happened because team is just referenced array and this way you could unknowing manipulate your original array which is definitely not good practice.

console.log(players);
//result is  --->  ['google', 'netflix', 'amazon', 'statistica']


//so how to make copy of an array not referencing of array
const arr1 = ['ram','sita','laxman','kyekai'];
const arr2 = arr1.slice();

console.log(arr1,arr2);

//using slice() method could be useful for copying an array

arr2[2]='hanuman';

console.log(arr1,arr2);
//result is  ---> ['ram', 'sita', 'laxman', 'kyekai'] ['ram', 'sita', 'hanuman', 'kyekai']
//here you can see that arr1 remains intact;

//this is one of the method.
 
//another method is contactination of array into the empty array
const arr3 = ['a','b','c','z'];
const arr4 = [].concat(arr3);
console.log(arr3,arr4);

arr4[0] = 'd';
console.log(arr3,arr4);

//this is called intelligent copying of array


// there is another method for handling the array copying that is ES6 spread operations

const arr5 = ['annie','baby','sana','vivek','chichu','shinu','misti','micko','chinu','gunnu','gullie'];
const arr6 = [...arr5];
console.log(arr5,arr6);

arr6[1] = 'neha';

console.log(arr5,arr6);

//finally there is another method handling the array copying that is array.from

const arr7 = ['duck','sparrow'];
console.log(arr7);
const arr8 = Array.from(arr7);
console.log(arr8);

arr8[2]= 'peacock';
console.log(arr8);

//that's all for array

// Now  let's have fun with objects!!

const obj1  = {
    fullName:'Anupama Punj',
    age:'26',
    height:'5.3'
}


const obj2 = obj1;
console.log(obj1,obj2);

obj2.rollNumber = 23;
console.log(obj1,obj2);

//this is called referencing in the objects!!

//so how to do copying in here!
//there is a method to do so and that is assign();

const ojb3 = {
    username : 'adityasen',
    password : 'aditya12345'
}

const obj4 = Object.assign({},ojb3,{location:'New Delhi',Age :'23'});
//what this assign does basically that it put the ojb3 into the {empty object} and if we want another key: value pair to added then we can simply do it by {writting stuff in here}
console.log(ojb3);
console.log(obj4);

//now let me introduce you to the spread operator for the objects

const obj5 = {
    costumer : 'Aakash',
    rating: '2.9'
}

const obj6 = {...obj5};
obj6.review ="need improvement in delivery of meal items";

console.log(obj5);
console.log(obj6); 

//here is catch in Object.assign()
const wes ={
    name: 'wes',
    age:'28',
    social:{
        twitter:'@wesbos',
        facebook:'wesbos.developer'
    }
}

//here if you want to change the twitter handle you won't be able to do it with Object.assign(); because you need some other stuff for manipulating that deeply but very rarely you would use it it's called clone deep;

