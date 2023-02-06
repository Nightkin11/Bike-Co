import React from 'react'
import { useSelector} from 'react-redux'
import styled from 'styled-components'
import CaseItem from './CaseItem'


const StyledGrid = styled.div`
	width: 320px;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px,1fr));
	grid-template-rows: auto;
	grid-gap: 1vw;
	@media (max-width: 768px) {
		width: 100%
	}
`

const ActualCases = () => {
	const cases = useSelector(state => state.cases.cases);
	return (
		<StyledGrid>
			{cases.map((singleCase) => (
				<CaseItem key={singleCase.id} {...singleCase} />
			))}
		</StyledGrid>
	)
}

export default ActualCases