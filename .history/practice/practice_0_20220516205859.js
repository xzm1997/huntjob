const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

class Promise {
  constructor(executor) {
    this.status = PENDING
    this.value = null
    this.reason = null
    
    const resolve = (value) => {
      if (this.status !== PENDING) return
      this.status = FULFILLED
      this.value = value
    }
    const reject = (reason) => {
      if (this.status !== PENDING) return
      this.status = REJECTED
      this.value = reason
    }

    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }

  then(onFulfill, onReject) {
    if (this.status === FULFILLED) onFulfill(this.value)
    if (this.status === REJECTED) onReject(this.reason)
  }
}