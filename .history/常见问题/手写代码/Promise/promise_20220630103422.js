const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class myPromise {
  constructor(executor) {
    this.status = PENDING;
    this.value = null;
    this.reason = null;

    this.resolveList = [];
    this.rejectList = [];

    const resolve = (value) => {
      // 如果 value 是一个promise，那我们的库中应该也要实现一个递归解析
      if (value instanceof myPromise) {
        return value.then(resolve, reject);
      }

      setTimeout(() => {
        this.status = FULFILLED;
        this.value = value;
        this.resolveList.forEach(callback => {
          callback(value);
        })
      },0)
    }

    const reject = (reason) => {
      setTimeout(() => {
        this.status = REJECTED;
        this.reason = reason;
        this.rejectList.forEach(callback => {
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
    onFulfilled = 
      typeof onFulfilled === "function"
        ? onFulfilled
        : function(value) {
          return value
        }

    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : function(reason) {
          throw reason;
        }

    if (this.status === PENDING) {
      this.resolvedCallbacks.push(onFulfilled);
      this.rejectedCallbacks.push(onRejected);
    }

    if (this.status === FULFILLED) onFulfilled(this.value);
    if (this.status === REJECTED) onRejected(this.reason);
  }
}
