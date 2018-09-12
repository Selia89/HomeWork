/*Реализовать функцию сравнения двух массивов на равенство, т.е. определить, что массивы имеют одинаковые элементы в одинаковой последовательности.*/
'use strict';
function areArraysEqual(a1, a2) {
    if (!a1 || !a2) return false;
    if (a1.length === a2.length) {
        for (var i = 0, n = a1.length; i < n; i++) {
            if (a1[i] !== a2[i]) return false;
        }
        return true;
    }
    return false;
}

console.log(areArraysEqual([1,2,3], [1,4,5])); // false
console.log(areArraysEqual([1,2,3], [1,2,"3"])); // false
console.log(areArraysEqual([1,2,3], [1,2,3])); // true
console.log(areArraysEqual([], [])); // true
console.log(areArraysEqual([], null)); // false