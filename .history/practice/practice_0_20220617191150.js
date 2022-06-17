const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECT = 'REJECT';

class myPromise {
  constructor(executor) {
    this.status = PENDING;
    this.value = null;
    this.reason = null;

    const resolve = (value) => {
      this.status = FULFILLED;
      this.value = value;
    }

    const reject = (reason) => {
      this.status = REJECT;
      this.reason = reason;
    }

    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  then (onFulfilled, onRejected) {
    if (this.status === FULFILLED) onFulfilled(this.value);
    if (this.status === REJECTED) onRejected(this.reason);
  }
}
