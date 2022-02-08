//forEach

/* accepts an array and returns:
-a new array with all the values in the array passed to the function doubled 
doubleValues([1,2,3]) // [2,4,6]
doubleValues([5,1,2,3,10]) // [10,2,4,6,20]
*/
function doubleValues(arr){
    let doubleArr = [];
    arr.forEach(function(num){
        doubleArr.push(num*2);
    })
    return doubleArr;
}

/* accepts an array and returns:
-a new array with only the even values in the array passed to the function 
onlyEvenValues([1,2,3]) // [2]
onlyEvenValues([5,1,2,3,10]) // [2,10]
*/
function onlyEvenValues(arr){
    let evenArr = [];
    arr.forEach(function(num){
        if (num % 2 === 0){
            evenArr.push(num)
        }
    })
    return evenArr;
}

/* accepts an array of strings and returns: 
-a new array with only the first and last character of each string 
showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']
*/
function showFirstAndLast(arr){
    let firstAndLastArr = [];
    arr.forEach(function(str){
        firstAndLastArr.push(str[0] + str[str.length - 1]);
    });
    return firstAndLastArr;
}

/* accepts an array of objects, a key, and a value and returns:
-the array passed to the function with the new key
-value added for each object 
addKeyAndValue(
[
  {name: 'Elie'},
  {name: 'Tim'},
  {name: 'Matt'},
  {name: 'Colt'}
],
  'title',
  'instructor'
)

//
  [
    {name: 'Elie', title:'instructor'},
    {name: 'Tim', title:'instructor'},
    {name: 'Matt', title:'instructor'},
    {name: 'Colt', title:'instructor'}
  ]
[arr],key,value
*/
function addKeyAndValue(arr, key, value){
    arr.forEach(function(arrKeyVal){
        arrKeyVal[key] = value;
    });
    return arr;
}

/* accepts a string and returns: 
-an object with the keys as the vowel
-the values as the number of times the vowel appears in the string.
made case insensitive 
vowelCount('Elie') // {e:2,i:1};
vowelCount('Tim') // {i:1};
vowelCount('Matt') // {a:1})
vowelCount('hmmm') // {};
vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1}
*/
function vowelCount(str){
    let splitArr = str.split(""); //split is the slice/splice of STRINGS string.split(separator, limit);
    let emptyObj = {}; //empty object
    const vowelKey = "aeiou";
    splitArr.forEach(function(char){
        let charLowerCase  = char.toLowerCase();
        if (vowelKey.indexOf(charLowerCase) !== -1){
            if(emptyObj[charLowerCase]){
                emptyObj[charLowerCase]++;
            }
            else{
                emptyObj[charLowerCase] = 1;
            }
        }
    });
    return emptyObj;
}

//map

/* accepts an array and returns:
-a new array with all the values in the array passed to the function doubled 
doubleValuesWithMap([1,2,3]) // [2,4,6]
doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/
function doubleValuesWithMap(arr){
    return arr.map(function(num){
        return num * 2;
    });
}

/* accepts an array and returns:
-a new array with each value multiplied by the index it is currently at in the array 
valTimesIndex([1,2,3]) // [0,2,6]
valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/
function valTimesIndex(arr){
    return arr.map(function(num, index){
        return num * index;
    });
}

/* accepts an array of objects and some key and returns:
-a new array with the value of that key in each object 
extractKey(
  [
    {name: 'Elie'},
    {name: 'Tim'},
    {name: 'Matt'},
    {name: 'Colt'}
  ],
  'name'
)

  // ['Elie', 'Tim', Matt', 'Colt']
*/
function extractKey(nameArr, key){
    return nameArr.map(function(keyVal){
        return keyVal[key];
    });
}

/* accepts an array of objects and returns:
-a new array with the value of the key with a name of “first”
-the value of a key with the name of “last” in each object, concatenated together with a space 
extractFullName([
  {first: 'Elie', last:"Schoppik"},
  {first: 'Tim', last:"Garcia"},
  {first: 'Matt', last:"Lane"},
  {first: 'Colt', last:"Steele"}
])

  // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/
function extractFullName(nameArr){
    return nameArr.map(function(name){
        return name.first + " " + name.last;
    });
}

//filter

/* accepts an array of objects and a key and returns:
-a new array with all the objects that contain that key 
filterByValue(
[
  {first: 'Elie', last:"Schoppik"},
  {first: 'Tim', last:"Garcia", isCatOwner: true},
  {first: 'Matt', last:"Lane"},
  {first: 'Colt', last:"Steele", isCatOwner: true}
],
'isCatOwner'
)

//
  [
    {first: 'Tim', last:"Garcia", isCatOwner: true},
    {first: 'Colt', last:"Steele", isCatOwner: true}
*/
function filterByValue(nameArr, key){
    return nameArr.filter(function(keyVal){
        return keyVal[key] !== undefined;
    });
}

/* which accepts an array and a value and returns:
-the first element in the array that has the same value as the second parameter
-or undefined if the value is not found in the array 
find([1,2,3,4,5], 3) // 3
find([1,2,3,4,5], 10) // undefined
*/
function find(arr, searchVal){
    return arr.filter(function(val){
        return val === searchVal;
    })[0];
}

/* accepts an array of objects, a key, and some value to search for and returns:
-the first found value in the array 
findInObj(
  [
    {first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia", isCatOwner: true},
    {first: 'att', last:"Lane"},
    {first: 'Colt', last:"Steele", isCatOwner: true}
  ],
  'isCatOwner',
  true
)
[array], key, searchFor
// {first: 'Tim', last:"Garcia", isCatOwner: true}
*/
function findInObj(arr, key, searchFor){
    return arr.filter(function(val){
        return val[key] === searchFor;
    })[0];//stops
}

/* which accepts a string and returns:
-a new string with all of the vowels (both uppercased and lowercased) removed
-new string is lowercase 
removeVowels('Elie') // ('l')
removeVowels('TIM') // ('tm')
removeVowels('ZZZZZZ') // ('zzzzzz')*/
function removeVowels(str){
    const vowels = "aeiou";
    return str.toLowerCase.split("").filter(function(strVal){//converts the string to lowercase splits on each character
        return vowels.indexOf(strVal) === -1;//converts vowel into to -1 whihc is outside of the array
    }).join("");//combines all consonants
}

/* accepts an array and returns:
-a new array with all of the odd numbers doubled 
(HINT - you can use map and filter to double and then filter the odd numbers).
doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
doubleOddNumbers([4,4,4,4,4]) // []
*/
function doubleOddNumbers(numArr){
    return numArr.filter(function(num){
        return num % 2 !== 0;//filters out any  numbers without remainders
    }).map(function(num){
        return num * 2;
    });
}