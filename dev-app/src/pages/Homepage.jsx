import React from 'react'
import styled from 'styled-components'
import Block from '../components/Block'
import { useSelector } from 'react-redux'


const StyledWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 70vh;
`

const StyledTitle = styled.h1`
	color: orange;
`


const Homepage = () => {
	const {firstName} = useSelector(state => state.users.data.user);
	return (
		<StyledWrapper>
			<Block width='320px' mobilewidth='100%'>
				<StyledTitle>Welcome{firstName && `, ${firstName}`}!</StyledTitle>
			</Block>
		</StyledWrapper>
	)
}

export default Homepage