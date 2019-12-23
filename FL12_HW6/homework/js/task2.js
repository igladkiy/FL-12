let a = +prompt('Enter side A:', '');
let b = +prompt('Enter side B:', '');
let c = +prompt('Enter side C:', '');

if(b + c > a || a + c > b || a + b > c){
    if(a === b && b === c && c === a){
        console.log(`Equivalent triangle`);
    }else if(a === b || b === c || c === b){
        console.log(`Isosceles triangle`);
    }else{
        console.log(`Scalene triangle`);
    }
}else{
    console.log(`Triangle doesn't exist!`)
}
