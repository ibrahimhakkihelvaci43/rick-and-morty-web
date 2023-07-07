import { useEffect } from 'react'

type ScrollEndCallback = () => void

const useScrollEnd = (callback: ScrollEndCallback) => {
	useEffect(() => {
		const handleScroll = () => {
			const { scrollTop, scrollHeight, clientHeight } = document.documentElement
			const isAtBottom = scrollTop + clientHeight >= scrollHeight

			if (isAtBottom) {
				callback()
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [callback])
}

export default useScrollEnd
