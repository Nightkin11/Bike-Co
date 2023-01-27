import React from 'react'
import styled from 'styled-components'
import ActualCases from '../components/ActualCases'
import AddCaseBlock from '../components/AddCaseBlock'

const Container = styled.div`
	display: flex;
	gap: 1rem;
	@media (max-width: 640px) {
		flex-direction: column;
		margin: 0 auto;
	}
`


const Homepage = () => {
	return (
		<Container>
			<AddCaseBlock />
			<ActualCases />
		</Container>
	)
}

export default Homepage