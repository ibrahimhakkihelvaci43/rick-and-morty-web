import * as React from 'react'
import { SVGProps, memo } from 'react'
const SvgFilterList = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" {...props}>
		<path d="M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z" />
	</svg>
)
const Memo = memo(SvgFilterList)
export default Memo
