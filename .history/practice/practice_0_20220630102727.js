const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class MyPromise {
  constructor(executor) {
    this.status = PENDING;
    this.value = null;
    this.reason = null;

    const resolve = function(value) {
      this.status = FULFILLED;
      this.value = value;
    }

    const reject = function(reason) {
      this.status = REJECTED;
      this.reason = reason;
    }

    try {
      executor
    } catch {

    }
  }
}
