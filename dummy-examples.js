// dummy-examples.js
// 4 simple JavaScript dummy examples

// Example 1: Basic function
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Swati"));

// Example 2: Array operations
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled Numbers:", doubledNumbers);

// Example 3: Object and property access
const user = {
  id: 101,
  name: "John Doe",
  isActive: true
};
console.log(`User ${user.name} is active: ${user.isActive}`);

// Example 4: Conditional logic
function checkAge(age) {
  if (age >= 18) {
    return "Adult";
  } else {
    return "Minor";
  }
}
console.log("Age check (16):", checkAge(16));
console.log("Age check (21):", checkAge(21));
