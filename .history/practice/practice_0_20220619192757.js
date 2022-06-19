const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class MyPromise {
  constructor(executor) {

    const resolve = (value) => {

    }

    const reject = (reason) => {
      
    }

    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e);
    }
  }

  then (onFulfilled, onRejected) {

  }
}
