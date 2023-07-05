import * as React from 'react'
import { SVGProps, memo } from 'react'
const SvgArrowDown = (props: SVGProps<SVGSVGElement>) => (
	<svg {...props} fill='rgba(0, 0, 0, 0.54)' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
		<path d="M480-360 280-560h400L480-360Z" />
	</svg>
)
const Memo = memo(SvgArrowDown)
export default Memo
