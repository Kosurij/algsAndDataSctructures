const debounce = (callback, delay) => {
    let timer = null;

    return (...args) => {
        if (timer) {
            clearInterval(timer);
        }

        timer = setTimeout(() => {
            callback(args)
        }, delay)
    }
}

const throttle = (callback, delay) => {
    let timer = null;

    return (...args) => {
        if (timer) return;

        timer = setTimeout(() => {
            callback(args)
            clearInterval(timer);
            timer = null;
        }, delay)
    }
}

const fetchUrl = (url) => {
    console.log(`${url}...`)
}

const debouceFetch = debounce(fetchUrl, 300)
const throttleFetch = throttle(fetchUrl, 300)

debouceFetch(1)
debouceFetch(2)
debouceFetch(3)
debouceFetch(4)
debouceFetch(5)

throttleFetch(1)
throttleFetch(2)
throttleFetch(3)
throttleFetch(4)
throttleFetch(5)

setTimeout(() => {
    throttleFetch(6)
}, 1000)
