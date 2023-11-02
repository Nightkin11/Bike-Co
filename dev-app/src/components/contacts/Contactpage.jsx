import React from 'react'
import styled from 'styled-components'
import Block from '../Block'

const StyledWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

const StyledTitle = styled.h1`
	color: orange;
	text-align: center;
`
const StyledPar = styled.p`
	text-align: center;
`

const Contactpage = () => {
	return (
		<StyledWrapper>
			<Block width='320px' mobilewidth='100%' direction='column'>
				<StyledTitle>Contacts</StyledTitle>
				<StyledPar>m.efimov0112@gmail.com</StyledPar>
			</Block>
		</StyledWrapper>
	)
}

export default Contactpage