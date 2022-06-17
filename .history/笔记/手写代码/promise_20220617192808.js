const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class myPromise {
  constructor(executor) {
    this.status = PENDING;
    this.value = null;
    this.reason = null;

    let resolveList = [];
    let rejectList = [];

    let resolve = (value) => {
      if (value instanceof myPromise)
    }

    let reject = (reason) => {

    }

    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e);
    }
  }

  then (onFulfilled, onRejected) {
    if (this.status === FULFILLED) onFulfilled(this.value);
    if (this.status === REJECTED) onRejected(this.reason);
  }
}
