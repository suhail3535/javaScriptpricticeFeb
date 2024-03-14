Of course, here are 15 JavaScript logical operator-based questions:

1. What is the result of `true && false`?
2. What is the result of `true || false`?

3. What is the result of `(5 > 3) && (10 < 20)`?
4. What is the result of `(10 === 10) || (5 > 8)`?

5. What is the result of `(true && false) || true`?
6. What is the result of `false && (true || false)`?

7. What is the result of `(5 <= 5) && (false || true)`?
8. What is the result of `true && true && false`?
9. What is the result of `false || false || true`?

10. What is the result of `(10 >= 5) && (3 < 2) || (8 === 8)`?








post-increment uses the current value first, then increments.
Pre-increment increments first, then use the updated value.
In both cases, the variable num is incremented by 1. However, the pre-increment operator ++ increases the value before it is used, while the post-increment operator ++ increases the value after it is used.
example:-
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"