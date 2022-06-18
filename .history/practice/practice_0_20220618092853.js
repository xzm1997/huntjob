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
      if (value instanceof myPromise)
    }
    const reject = function (reason) {

    }
  }
}
