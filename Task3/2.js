/*Сгенерировать массив из N случайных целых чисел. Поменять местами все элементы относительно середины массива по следующей схеме:
Было [1,2,3,4,5,6,7,8,9], стало [4,3,2,1,5,9,8,7,6]. Создавать новые массивы нельзя.*/
'use strict'; 
var howManyItems = 8, //<-- Количество элементов в массиве
    arr = [],
    M = 10,
    N = 1;

for(var i = 0; i <= howManyItems - 1; i++){
    var numeral = Math.floor(Math.random() * (M - N + 1)) + N;
    arr[i] = numeral;
}
console.log("Исходный массив: ", arr);

var center = Math.floor(arr.length/2);
if(howManyItems % 2 === 0){
    for(i = 0; i < center; i++){
        var repository = arr[i];
        arr[i] = arr[center + i];
        arr[center + i] = repository;
    }
} else {
    for(i = 0; i < center; i++){
        var repository = arr[i];
        arr[i] = arr[center + i + 1];
        arr[center + i + 1] = repository;
    }
}
console.log("Результат: ", arr.reverse());