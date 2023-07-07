import * as React from 'react'
import { SVGProps, memo } from 'react'
const SvgArrowBack = (props: SVGProps<SVGSVGElement>) => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
		<path d="M480-160 160-480l320-320 57 56-224 224h487v80H313l224 224-57 56Z" />
	</svg>
)
const Memo = memo(SvgArrowBack)
export default Memo
