let a = +prompt('enter a value', 1);
let b = +prompt('enter b value', 1);
let c = +prompt('enter c value', 1);
let four = 4;
let two = 2; 
let d = b*b - four*a*c;

if(a && b && c !== isNaN){
    if(d>0){
        let x1 = (-b + Math.sqrt(d)) / (two * a);
        let x2 = (-b - Math.sqrt(d)) / (two * a);
        console.log(`Discriminant > 0; x1=${x1}, x2=${x2}`);
    }else if(d===0){
        let x = -(b/ (two*a));
        console.log(`Discriminant = 0; x=${x}`);
    }else{
        console.log(`no solution Discriminant < 0`);
    }
}else{
    console.log('error, you need enter only numbers');
}