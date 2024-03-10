const fibonacci = function(val) {
    let num = parseInt(val)
    if (num < 0){
        return "OOPS";
    } 
    let fib = [0,1];
    let i = 2;
    while (i <= num){
        fib.push(fib[i-1]+fib[i-2]);
        i += 1;
    }
    console.log(num)
    console.log(fib)
    return fib[num];
};

// Do not edit below this line
module.exports = fibonacci;
