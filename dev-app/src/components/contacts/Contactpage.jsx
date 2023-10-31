import React from 'react'
import styled from 'styled-components'
import Block from '../Block'

const StyledWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 80vh;
`

const StyledTitle = styled.h1`
	
`

const Contactpage = () => {
	return (
		<StyledWrapper>
			<Block width='320px' mobilewidth='100%'>
				<StyledTitle>Contacts</StyledTitle>
			</Block>
		</StyledWrapper>
	)
}

export default Contactpage