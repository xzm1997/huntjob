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

    
  }
}
