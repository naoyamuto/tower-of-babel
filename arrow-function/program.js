var inputs = process.argv.slice(2);

//アロー関数に変換！
var result = inputs.map((str) => str[0])
                   .reduce((a,b) => a + b);

console.log(result);

// function(str) {
//   return str[0];
// }
//
// (str) => str[0]
//
// function(a,b) {
//   return a + b ;
// }
