//build own version of array.map function
//will take in 2 arguments (a, b)
  //  first argument is array
  //  second argument will be callback function
//function must return new array based on results of callback function


var words = ["ground", "control", "to", "major", "tom"];


function map(arr, callbackFunction) {
  var newArray = [];
  for(i in arr) {
    var result = callbackFunction(arr[i])
    newArray.push(result);
  }
  return newArray;
};



var answer1 = map(words, function(word) {
  // console.log('in callback function');
  return word.length;
});

var answer2 = map(words, function(word) {
  return word.toUpperCase();
});

var answer3 = map(words, function(word) {
  return word.split('').reverse().join('');
});

console.log(answer1);
console.log(answer2);
console.log(answer3);

