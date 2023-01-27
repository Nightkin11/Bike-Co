import React from 'react'
import Container from './Container'
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledMain = styled.main`
	background-color: #E8E8E8;
	flex: 1 0 auto;
`

const Main = () => {
  return (
	<StyledMain>
		<Container padding='1rem 1rem'>
			<Outlet />
		</Container>
	</StyledMain>
  )
}

export default Main