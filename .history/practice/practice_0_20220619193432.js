const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class MyPromise {
  constructor(executor) {
    this.status = PENDING;
    this.value = null;
    this.reason = null;
    this.resolveList = [];
    this.rejectList = [];

    const resolve = (value) => {
      this.status = FULFILLED;
      this.value = value;
      this.resolveList.forEach(callback => {
        callback(value);
      })
    }

    const reject = (reason) => {
      this.status = REJECTED;
      this.reason = reason
    }

    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e);
    }
  }

  then (onFulfilled, onRejected) {
    if (this.status === PENDING) {

    }
    if (this.status === FULFILLED) {

    }
    if (this.status === REJECTED) {

    }
  }
}