const PENDING = "PENDING"
const FULFILLED = "FULFILLED"
const REJECTED = "REJECTED"

class Promise {
  constructor(execute) {
    let status = PENDING
    let value = null
    let reason = null

    let resolve = (value) => {
      if (status == PENDING) {
        this.value = value
      }
    }
    let reject = (reason) => {

    }
  }
}