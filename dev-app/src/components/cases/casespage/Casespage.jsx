import React from 'react'
import styled from 'styled-components'
import ActualCases from './ActualCases'

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
			<ActualCases />
		</Container>
	)
}

export default Casespage