import * as React from 'react'
import { SVGProps, memo } from 'react'
const SvgNavigateNext = (props: SVGProps<SVGSVGElement>) => (
	<svg
		{...props}
		fill="rgba(0, 0, 0, 0.54)"
		xmlns="http://www.w3.org/2000/svg"
		height="24"
		viewBox="0 -960 960 960"
		width="24"
	>
		<path d="m376-240-56-56 184-184-184-184 56-56 240 240-240 240Z" />
	</svg>
)
const Memo = memo(SvgNavigateNext)
export default Memo
