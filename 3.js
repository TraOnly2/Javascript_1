// 3, Convert numerical grades into letter grades (A, B, C, D, E, F)

//First

let point = 95;
let grade;

if(point >= 50){
    if(point >= 95){
        console.log('A+')
    }else if(point >= 90){
        console.log('A')
    }else if(point >= 80){
        console.log('B')
    }else if(point >= 70){
        console.log('C')
    }else if(point >= 60){
        console.log('D')
    }else if(point >= 50){
        console.log('E')
    }
}else{
    console.log('F')
}



// second

// let point = window.prompt('Enter the point');
// let grade = (point >= 95) ? 'A+' :
//             (point >= 90) ? 'A'  :
//             (point >= 80) ? 'B'  :
//             (point >= 70) ? 'C'  :
//             (point >= 60) ? 'D'  : 
//             (point >= 50) ? 'E'  :  'F';

// console.log(`You got ${grade}`);
