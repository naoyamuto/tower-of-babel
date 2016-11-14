const max = process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    //FizzBuzzの計算
    let num = 1;
    return {
      next() {
        if(num > max) {
          return {done: true};
        }
        let value = num;
        if(num % 3 == 0 && num % 5 == 0) {
          value = "FizzBuzz";
        }
        else if(num % 3 == 0) {
          value = "Fizz";
        }
        else if(num % 5 == 0) {
          value = "Buzz";
        }
        num++;
        return {done: false, value: value};
      }
    }
  }
}

for(var n of FizzBuzz) {
  console.log(n);
}
