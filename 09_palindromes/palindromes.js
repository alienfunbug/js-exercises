const palindromes = function (s) {

    let regex = /[^a-z0-9]/g;
    let s2 = s.toLowerCase().replace(regex ,'');
    reversedS2 = s2.split('').reverse().join('');
    return s2 == reversedS2;


};

// Do not edit below this line
module.exports = palindromes;
