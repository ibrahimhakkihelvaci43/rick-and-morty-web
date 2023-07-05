import * as React from 'react'
import { SVGProps, memo } from 'react'
const SvgClose = (props: SVGProps<SVGSVGElement>) => (
	<svg {...props} role='img' fill='rgba(0, 0, 0, 0.54)' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
		<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
	</svg>
)
const Memo = memo(SvgClose)
export default Memo
