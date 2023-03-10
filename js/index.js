import strictEquals from "/js/strictEquals.js";

console.log(strictEquals(1, 1));
console.log(strictEquals(NaN, NaN)); // Rule exception
console.log(strictEquals(0, -0)); // Rule exception
console.log(strictEquals(-0, 0)); // Rule exception
console.log(strictEquals(1, "1"));
console.log(strictEquals(true, false));
console.log(strictEquals(false, false));
console.log(strictEquals("Water", "oil"));

/* 
| valueA  | valueB | RESULT |                   |
| ------- |------- |----------------- |
| 1       | 1      | true   |                   |
| NaN     | NaN    | false  | // Rule Exception |
| 0       | -0     | true   | // Rule Exception |
| -0      | 0      | true   | // Rule Exception |
| 1       | "1"    | false  |                   |
| true    | false  | false  |                   |
| false   | false  | true   |                   |
| "Water" | "oil"  | false  |
*/
