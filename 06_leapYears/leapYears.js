const leapYears = function(year) {
    if((year % 400 == 0)){
        return true;

    }else if (( year % 4 == 0) && (year % 100 != 0)){
        return true; 
    }else {
        return false;
    }
};


//divisible by 4  (unless divisible by 100)
//divisibale by 400 pass


// Do not edit below this line
module.exports = leapYears;
