export function offset(elem: HTMLElement) {

	const rect = elem.getBoundingClientRect()

	return {
		offsetTop: rect.top + window.scrollY,
		offsetLeft: rect.left + window.scrollX
	}

}

export function debounce(f: (...args: unknown[]) => void, delayMs: number) {

	let timer: number = 0

	function debounced(...args: unknown[]) {

		if (timer) window.clearTimeout(timer)

		timer = window.setTimeout(() => {
			f(...args)
			timer = 0
		}, delayMs)
	}

	debounced.cancel = () => window.clearTimeout(timer)

	return debounced
}

export function getValueFromIndex(_: unknown, index: number) {
	return index
}

export function getTrue() {
	return true
}

export function lerp(start: number, end: number, t: number) {
	return start * (1 - t) + end * t
}

export function getRippleColorFromColorStyle(colorStyle : 'light' | 'dark' | 'primary' | 'secondary') {
	return `var(--cs-${colorStyle}-ripple)`
}