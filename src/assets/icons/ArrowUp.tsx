import * as React from 'react'
import { SVGProps, memo } from 'react'
const SvgArrowUp = (props: SVGProps<SVGSVGElement>) => (
	<svg
		{...props}
		fill="rgba(0, 0, 0, 0.54)"
		xmlns="http://www.w3.org/2000/svg"
		height="24"
		viewBox="0 -960 960 960"
		width="24"
	>
		<path d="m280-400 200-200 200 200H280Z" />
	</svg>
)
const Memo = memo(SvgArrowUp)
export default Memo
