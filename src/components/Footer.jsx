import React from 'react'
import Container from './Container'
import styled from 'styled-components';
import Flex from './Flex';

const StyledFooter = styled.main`
	background-color: #fff;
	box-shadow: inset 0px 2px 0px #000000;
	flex: 0 0 auto;
`

const Footer = () => {
	return (
	<StyledFooter>
		<Container padding='1rem 2rem'>
			<Flex justify='center'>
				Bike-Company 2023
			</Flex>
		</Container>
	</StyledFooter>
	)
}

export default Footer