import React from 'react'
import styled from 'styled-components'
import ActualOfficers from '../components/officers/ActualOfficers'

const Container = styled.div`
	display: flex;
	gap: 1rem;
	@media (max-width: 640px) {
		flex-direction: column;
		margin: 0 auto;
	}
`


const Officerspage = () => {
	return (
		<Container>
			<ActualOfficers />
		</Container>
	)
}

export default Officerspage