Promise.prototype.finally = function (fn) {
   this.then(
       response => {
           return Promise.resolve(fn()).then(() => response)
       },
       reject => {
           return Promise.resolve(fn()).then(() => reject)
       }
   )
}

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];

Promise.prototype.allSettled = function (promises) {
    return Promise.all(promises.map(promise => {
        Promise.resolve(promise).then(value => ({
            status: 'fulfilled',
            value: value
        }), error => ({
            status: 'error',
            reason: error
        }))
    }))
}
