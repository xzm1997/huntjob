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

    const resolve = function(value) {
      setTimeout(() =>{
        this.status = FULFILLED;
        this.value = value;
        this.resolveList.forEach(callback => {
          callback(value);
        })
      }, 0);
    }

    const reject = function(reason) {
      this.status = REJECTED;
      this.reason = reason;
    }

    try {
      executor(resolve, reject)
    } catch(e) {
      reject(e);
    }
  }
  then (onFulfilled, onRejected) {
    if (this.status === PENDING) {

    }
    if (this.status === FULFILLED) onFulfilled(this.value);
    if (this.status === REJECTED) onRejected(this.reason);
  }
}
