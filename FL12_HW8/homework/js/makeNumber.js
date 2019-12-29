function makeNumber(str){
    let numbers = '';
    for(let i=0; i<str.length;i++){
        if(parseInt(str[i])){
            numbers += str[i];
        }
    }
    return numbers;
}
makeNumber('erer384jjjfd123');
makeNumber('123098h76gfdd');
makeNumber('ijifjgdj'); 

