const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class myPromise {
  constructor (executor) {
    this.status = PENDING;
    this.value = null;
    this.reason = null;
    this.resolveList = [];
    this.rejectList = [];

    const resolve = function(value) {
      setTimeout(() => {
        this.status = FULFILLED;
        this.value = value;
        this.resolveList.forEach(callback => {
          callback(value);
        })
      }, 0)
    }
    const reject = function (reason) {
      setTimeout(() => {
        this.status = REJECTED;
        this.reason = reason;
        this.rejectList.forEach(callback => {
          callback(reason);
        })
      })
    }

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then (onFulfilled, onRejected) {
    onFulfilled =
      typeof onFulfilled === "function"
        ? onFulfilled
        : function(value) {
          return value;
        }

    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : function(reason) {
          throw error;
        }
    
    if (this.status === PENDING) {
      this.resolvedCallbacks.push(onResolved);
      this.rejectedCallbacks.push(onRejected);
    }

    if (this.status === FULFILLED) onFulfilled(this.value);
    if (this.status === REJECTED) onRejected(this.reason);
  }
}
