const strictEquals = (valueA, valueB) => {
  const checkIfTrue = Object.is(valueA, valueB);

  if (Number.isNaN(valueA) && Number.isNaN(valueB)) {
    return false;
  }
  if (Object.is(valueA, 0) && Object.is(valueB, -0)) {
    return true;
  }
  if (Object.is(valueA, -0) && Object.is(valueB, 0)) {
    return true;
  }
  return checkIfTrue;
};

export default strictEquals;

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
