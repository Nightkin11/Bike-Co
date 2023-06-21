import React from 'react'
import styled from 'styled-components'
import ActualCases from '../components/cases/ActualCases'
import AddCaseBlock from '../components/cases/AddCaseBlock'

const Container = styled.div`
	display: flex;
	gap: 1rem;
	@media (max-width: 640px) {
		flex-direction: column;
		margin: 0 auto;
	}
`


const Casespage = () => {
	return (
		<Container>
			<AddCaseBlock />
			<ActualCases />
		</Container>
	)
}

export default Casespage