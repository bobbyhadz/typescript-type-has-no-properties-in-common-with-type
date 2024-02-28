export {};

// Type 'X' has no properties in common with type 'Y' in TS

// EXAMPLE 1 - Using a weak type

interface Employee {
  id?: number;
  salary?: number;
}

// ✅ This is ok
const e: Employee = {};
console.log(e);

// ---------------------------------------------------

// // EXAMPLE 2 - Use a type assertion to solve the error

// interface Employee {
//   id?: number;
//   salary?: number;
// }

// function getEmployee(emp: Employee) {
//   return emp;
// }

// const emp = {
//   name: 'Bobby Hadz',
// };

// // 👇️ {name: 'Bobby Hadz'}
// getEmployee(emp as Employee); // 👈️ use type assertion

// ---------------------------------------------------

// // EXAMPLE 3 - Make sure there is an overlap between the type and the object

// interface Employee {
//   id?: number;
//   salary?: number;
//   name?: string; // 👈️ added name
// }

// function getEmployee(emp: Employee) {
//   return emp;
// }

// const emp = {
//   name: 'Bobby Hadz',
// };

// // 👇️ {name: 'Bobby Hadz'}
// console.log(getEmployee(emp));

// ---------------------------------------------------

// // EXAMPLE 4 - Use an index signature to solve the error

// interface Employee {
//   id?: number;
//   salary?: number;
//   [key: string]: any; // 👈️ added index signature
// }

// function getEmployee(emp: Employee) {
//   return emp;
// }

// const emp = {
//   name: 'Bobby Hadz',
// };

// // 👇️ {name: 'Bobby Hadz'}
// console.log(getEmployee(emp));
