import React from 'react'
import styled from 'styled-components'
import Block from '../../components/Block'
import { useSelector } from 'react-redux'
import bike from './bike.webp' 



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


const Homepage = () => {
	const {firstName} = useSelector(state => state.users.data.user);
	return (
		<StyledWrapper>
			<Block width='320px' mobilewidth='100%' direction='column'>
				<StyledTitle>Welcome{firstName && `, ${firstName}`}!</StyledTitle>
				<StyledPar>On this website you can report about stealing your bike</StyledPar>
				<img src={bike} alt="bike" />
			</Block>
		</StyledWrapper>
	)
}

export default Homepage