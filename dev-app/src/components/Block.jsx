import React from 'react'
import styled from 'styled-components'

const StyledBlock = styled.div`
	width: ${props => props.width || 'auto'};
	background-color: #FFF;
	border: 1px gray solid;
	box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.1);
	padding: 1rem;
	@media (max-width: 640px) {
		width: ${props => props.mobilewidth || 'auto'}
	}
`

const Block = (props) => {
	return (
		<StyledBlock {...props} />
	)
}

export default Block