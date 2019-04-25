export function offset(elem) {

    let offsetLeft = 0
    let offsetTop = 0

    do {
        if (!isNaN(elem.offsetLeft)) {
            offsetLeft += elem.offsetLeft
        }
        if (!isNaN(elem.offsetTop)) {
            offsetTop += elem.offsetTop
        }
    } while (elem = elem.offsetParent)

    return {
        offsetLeft, offsetTop
    }

}


export function debounce(f, delayMs) {

    let timer = null

    function debounced(...args) {

        debounced.cancel = () => clearTimeout(timer)

        if (timer) clearTimeout(timer)

        timer = setTimeout(() => {
            f(...args)
            timer = null
        }, delayMs)


    }

    return debounced
}