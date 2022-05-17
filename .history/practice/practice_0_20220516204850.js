const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

class Promise {
  constructor(executor) {
    this.status = PENDING
    this.value = null
    this.reason = null
    
    const resolve = (value) => {
      this.status = FULFILLED
      this.value = value
    }
  }
}