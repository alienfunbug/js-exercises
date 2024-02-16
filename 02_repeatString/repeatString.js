const repeatString = function(s1,num) {
    if (num >= 0){
        let temporaryString = '';
        for(let i = 0; i< num; i++){
            temporaryString += s1
        }
        return temporaryString;
    }
    else{
        return 'ERROR';
    }

};

// Do not edit below this line
module.exports = repeatString;
