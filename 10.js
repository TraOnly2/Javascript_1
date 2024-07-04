// 10, Write a program that finds the largest number in an array using a loop.


const arr = [1,5,8,45,15,256,75,80,92];
let largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
console.log(`The largest number in the array is: ${largest}`);
