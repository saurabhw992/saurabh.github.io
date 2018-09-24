
function mul (num1) {
  return function (num2) { 
    return function (num3) { 
      return x * y * z;
    };
  };
}

console.log(mul(2)(4)(5));