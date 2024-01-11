import React from 'react'
import { useSelector} from 'react-redux'
import styled from 'styled-components'
import Block from '../../Block'
import CaseItem from './CaseItem'
import { PopupAlert } from '../../Popup'


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
	const officers = useSelector(state => state.officers.data)
	const token = localStorage.getItem('token')
	
	return (
		<>
			<PopupAlert open={status === 'ERR'}>{message}</PopupAlert>
			<StyledGrid>
				{status === 'loading' && <Block>Loading...</Block>}
				{status === 'logout' && <Block>You have been logout</Block>}
				{status === 'OK' && cases.length === 0 ? <Block>
					It's empty here
				</Block> :
				cases.map((singleCase) => (
					<CaseItem key={singleCase._id} {...singleCase} officers={officers} />
				))}
				{!token && status !== 'logout' && <Block>Please login for access</Block>}
			</StyledGrid>
		</>
	)
}



export default ActualCases