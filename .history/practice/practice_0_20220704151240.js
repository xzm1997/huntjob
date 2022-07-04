const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class MyPromise {
  constructor (executor) {
    this.status = PENDING;
    this.value = null;
    this.reason = null;
    this.resolveList = [];
    this.rejectList = [];

    const resolve = (value) => {
      setTimeout(() => {
        this.status = FULFILLED;
        this.value = value;
        this.rejectList.forEach(callback => {
          callback(value);
        })
      }, 0)
    }
  }
}
