import React from 'react'
import styled from 'styled-components'
import Block from '../../Block'
import { useSelector } from 'react-redux'

const StyledWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 80vh;
`

const StyledTitle = styled.h1`
	margin: 0.4rem;
`
const StyledSmallTitle = styled.span`
	color: gray;
`
const StyledParagraph = styled.p`
	margin:	0.4rem;
`

const Profilepage = () => {
	const user = useSelector(state => state.users.data.user);
	const { id, email, firstName, lastName, approved } = user
	return (
		<StyledWrapper>
			<Block width='320px' mobilewidth='100%' direction='column'>
				<StyledTitle>Profile</StyledTitle>
				<StyledParagraph><StyledSmallTitle>ID: </StyledSmallTitle>{id}</StyledParagraph>
				<StyledParagraph><StyledSmallTitle>Email: </StyledSmallTitle>{email}</StyledParagraph>
				<StyledParagraph><StyledSmallTitle>First name: </StyledSmallTitle>{firstName}</StyledParagraph>
				<StyledParagraph><StyledSmallTitle>Last name: </StyledSmallTitle>{lastName}</StyledParagraph>
				<StyledParagraph><StyledSmallTitle>Approved: </StyledSmallTitle>{approved ? 'Yes' : 'No'}</StyledParagraph>
			</Block>
		</StyledWrapper>
	)
}

export default Profilepage