// Async/Await
const asyncGreeting = async () => 'Greetings';
// Promises
const promiseGreeting = () => new Promise(((resolve) => {
  resolve('Greetings');}));
asyncGreeting().then(result => console.log(result));
promiseGreeting().then(result => console.log(result));