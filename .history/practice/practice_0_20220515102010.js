const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class Promise{
  constructor(executor) {
    this.status = PENDING;
    this.value = null;
    this.reason = null;

    let resolve = (value) => {
      if (this.status !== PENDING) return;
      this.status = FULFILLED;
      this.value = value;
    }

    let reject = (reason) => {
      if (this.status !== PENDING) return;
      this.status = REJECTED;
      this.reason = reason;
    }

    try {
      executor(resolve, reject)
    }
  }
}