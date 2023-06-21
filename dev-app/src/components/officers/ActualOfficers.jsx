import React from 'react'
import { useSelector} from 'react-redux'
import styled from 'styled-components'
import OfficerItem from './OfficerItem'


const StyledGrid = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	grid-template-rows: auto;
	grid-gap: 1vw;
`

const ActualOfficers = () => {
	const officers = useSelector(state => state.officers.officers);
	return (
		<StyledGrid>
			{officers.map((officer) => (
				<OfficerItem key={officer.id} {...officer} />
			))}
		</StyledGrid>
	)
}

export default ActualOfficers