/*
    6. 구조 분해
 */

// ex1 - basic
const user = {
    firstName: '둘',
    lastName: '리',
    email: 'hong1071@nate.com'
};

({firstName, lastName} = user);
// let firstName = user.firstName;
// let lastName = user.lastName;

console.log(firstName, lastName);