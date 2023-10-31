import React from 'react'
import { useSelector} from 'react-redux'
import styled from 'styled-components'
import OfficerItem from './OfficerItem'
import Block from '../../Block'
import AddOfficerBlock from './AddOfficerBlock'
import { PopupAlert } from '../../Popup'


const StyledGrid = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	grid-template-rows: auto;
	grid-gap: 1vw;
`

const ActualOfficers = () => {
	const officers = useSelector(state => state.officers.data);
	const { status, errCode, message } = useSelector(state => state.officers);
	return (
		<>
		{status === 'OK' || errCode === 'USER_EXISTS' || errCode === 'BAD_REQUEST' ? <AddOfficerBlock /> : ''}
		<PopupAlert open={status === 'ERR'}>{message}</PopupAlert>
		<StyledGrid>
			{status === 'loading' && <Block>Loading...</Block>}
			{status === 'logout' && <Block>You have been logout</Block>}
			{status === 'OK' && officers.length === 0 ? <Block>
				It's empty here 
			</Block> :
			officers.map((officer) => (
				<OfficerItem key={officer._id} {...officer} />
			))}
		</StyledGrid>
		</>
	)
}

export default ActualOfficers