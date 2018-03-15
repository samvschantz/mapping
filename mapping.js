var map = function(arr, cb){
  var resultArray = []
  arr.forEach(function(element){
    resultArray.push(cb(element))
  })
  console.log(resultArray)
}


var words = ["ground", "control", "to", "major", "tom"];



map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});