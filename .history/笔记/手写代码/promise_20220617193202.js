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
      if (value instanceof myPromise) {
        return value.then(resolve, reject);
      }

      setTimeout(() => {
        this.status = FULFILLED;
        this.value = value;
        resolveList.forEach(item => {
          item(value);
        })
      },0)
    }

    let reject = (reason) => {
      setTimeout(() => {
        this.status = REJECTED;
        this.reason = reason;
        rejectList.forEach(callback => {
          callback(reason);
        })
      })
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
