import React from 'react'
import { useSelector} from 'react-redux'
import styled from 'styled-components'
import Block from '../Block'
import CaseItem from './CaseItem'
import AddCaseBlock from './AddCaseBlock'


const StyledGrid = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	grid-template-rows: auto;
	grid-gap: 1vw;
`

const ActualCases = () => {
	const cases = useSelector(state => state.cases.data);
	const { status, message } = useSelector(state => state.cases);
	
	return (
		<>
			{status === 'OK' && <AddCaseBlock />}
			<StyledGrid>
				{status === 'loading' && <Block>Loading...</Block>}
				{status === 'ERR' && <Block>{message}</Block>}
				{status === 'logout' && <Block>You have been logout</Block>}
				{status === 'OK' && cases.length === 0 ? <Block>
					It's empty here
				</Block> :
				cases.map((singleCase) => (
					<CaseItem key={singleCase._id} {...singleCase} />
				))}
			</StyledGrid>
		</>
	)
}



export default ActualCases