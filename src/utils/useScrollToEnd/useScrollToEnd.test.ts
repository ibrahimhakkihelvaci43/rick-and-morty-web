import { renderHook } from '@testing-library/react-hooks'
import useScrollEnd from './index'

test('should call the callback when reaching the bottom of the page', () => {
	const callback = jest.fn()
	renderHook(() => useScrollEnd(callback))

	const scrollHeight = 2000
	const clientHeight = 800
	const scrollTop = scrollHeight - clientHeight
	Object.defineProperty(document.documentElement, 'scrollTop', { value: scrollTop, writable: true })
	Object.defineProperty(document.documentElement, 'scrollHeight', { value: scrollHeight, writable: true })
	Object.defineProperty(document.documentElement, 'clientHeight', { value: clientHeight, writable: true })

	window.dispatchEvent(new Event('scroll'))

	expect(callback).toHaveBeenCalled()
})
