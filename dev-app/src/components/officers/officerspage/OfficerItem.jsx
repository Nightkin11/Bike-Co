import React from 'react'
import Block from '../../Block'
import Button from '../../Button'
import {RiDeleteBinLine, RiEditLine} from 'react-icons/ri'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import Flex from '../../Flex';
import { LIST_COLORS, LIST_TITLES } from '../../../config';
import { Link } from 'react-router-dom';
import { deleteOfficer } from '../../../store/officerSlice';
import { PopupConfirm } from '../../Popup';



const StyledInformation = styled.div`
	
`

const StyledStatus = styled.div`
	background-color: ${props => props.color || 'gray'};
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 1rem;
`

const StyledTitle = styled.span`
	color: gray;
`

const StyledParagraph = styled.p`
	margin:	0.4rem;
`

const OfficerItem = (officer) => {
	const { _id, approved, email, firstName, lastName, password, clientId, } = officer
	const dispatch = useDispatch();
	return (
		<Block direction='column'>
			<Flex justify='space-between'>
				<StyledStatus color={LIST_COLORS[approved]}>{LIST_TITLES[approved]}</StyledStatus>
				<Flex gap='0.4rem'>
					<Link to={`${_id}`} state={{ _id, approved, email, firstName, lastName, password, clientId, }}><Button width='42px' mobilewidth='48px'><RiEditLine /></Button></Link>
					<PopupConfirm trigger={<Button width='42px' mobilewidth='48px'><RiDeleteBinLine /></Button>} onClick={() => dispatch(deleteOfficer(_id))}> the officer</PopupConfirm>
				</Flex>
			</Flex>
			<StyledInformation>
				<StyledParagraph><StyledTitle>Email: </StyledTitle>{email}</StyledParagraph>
				<StyledParagraph><StyledTitle>First name: </StyledTitle>{firstName}</StyledParagraph>
				<StyledParagraph><StyledTitle>Last name: </StyledTitle>{lastName}</StyledParagraph>
			</StyledInformation>
		</Block>
	)
}

export default OfficerItem