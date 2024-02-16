
function removeFromArray (arrayToUpdate,...args){
    arrayToUpdate = arrayToUpdate.filter(x => !args.includes(x),...args) 
    return arrayToUpdate
}



// Do not edit below this line
module.exports = removeFromArray;
