
const reverseString = function(s1) {
    let reversed = '';
    for (let i = s1.length-1; i >= 0 ; i--){
        reversed += s1[i];
    }
    return reversed;

};

// Do not edit below this line
module.exports = reverseString;
