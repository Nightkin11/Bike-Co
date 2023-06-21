import React from 'react'
import styled from 'styled-components'
import Block from '../components/Block'

const StyledWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 70vh;
`

const StyledTitle = styled.h1`
	
`

const Aboutpage = () => {
	return (
		<StyledWrapper>
		<Block width='320px' mobilewidth='100%'>
			<StyledTitle>About</StyledTitle>
		</Block>
	</StyledWrapper>
	)
}

export default Aboutpage