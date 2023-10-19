//Destructuring Exercise

//Object Destructuring 1
    //console.log(numPlanets) outputs 8
    //console.log(yearNeptuneDiscovered) outputs 1846

//Object Destructuring 2
    //console.log(discoveryYears); outputs {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

//Object Destructuring 3
    //The code returns:
    //"Your name is Alejandro and you like purple"
    //"Your name is Melissa and you like green"
    //"Your name is undefined and you like green"

//Array Destructuring 1
    //console.log(first); outputs "Maya"
    //console.log(second); outputs "Marisa"
    //console.log(third); outputs "Chi"

//Array Destructuring 2
    //console.log(raindrops); outputs "Raindrops on roses"
    //console.log(whiskers); outputs "whiskers on kittens"
    //console.log(aFewOfMyFavoriteThings); outputs ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

//Array Destructuring 3
    //console.log(numbers); outputs [10,30,20]


//ES5 Assigning Variables to object properties

// var obj = {
//     numbers: {
//       a: 1,
//       b: 2
//     }
//   };
  
//   var a = obj.numbers.a;
//   var b = obj.numbers.b;

//ES2015 version:

const obj = {
    numbers:{
     a:1,
     b:2
    }
};

const {numbers:{a,b}} = obj;


//ES5 Array Swap

// var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

//ES2015 version (one-liner):

const arr = [1,2];
[arr[0], arr[1]] = [arr[1], arr[0]];


//ES2015 raceResults:

const raceResults = ([first,second,third,...rest]) => ({first,second,third,rest});