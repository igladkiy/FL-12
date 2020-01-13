function convert(){
    let conv = [];
    for(let i = 0; i<arguments.length; i++){
        if(typeof arguments[i] === 'string'){
            conv.push(Number(arguments[i]));
        }else if(typeof arguments[i] === 'number'){
            conv.push(String(arguments[i]));
        }else{
            conv.push(arguments[i])
        }
    }
    return conv;
}

function executeforEach(arr, callback){
    for(let key of arr){
         callback(+key);
    }
}

function mapArray(arr, callback){
    let mainArray = [];
    executeforEach(arr, function(items){
        mainArray.push(callback(items));
    });
    return mainArray;
}

function filterArray(arr, callback){
    let filterArr = [];
    executeforEach(arr, function(item){
        if(callback(item)){
            filterArr.push(item);
        }
    })
    return filterArr;
}

function flipOver(str){
    let newWord = '';
    for(let i = str.length-1; i>=0; i--){
        newWord += str[i];
    }
    return newWord;
}

function makeListFromRange([min, max]){
    let arrayOfNumbers = [];
    for(let i = min; i<=max; i++){
        arrayOfNumbers.push(i);
    }
    return arrayOfNumbers;
}

function getArrayOfKeys(arr, keyName) {
    let result = [];
    executeforEach(arr, item => result.push(item[keyName]));
    return result;
}
function substitute(arr) {
    const minNumber = 30;
    return mapArray(arr, item => {
        if(item < minNumber){
            return '*'
        }else{
            return item
        }
  })
}

function getPastDay(date, days) {
    let pastDay = new Date(date);
    pastDay.setDate(date.getDate() - days)
    return pastDay.getDate();
}

function formatDate(date) {
    return `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
}