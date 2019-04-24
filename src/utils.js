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


export function debounce(f, delay) {
    return setTimeout(f, delay * 1000)
}

export function undebounce(id) {
    clearTimeout(id)
}