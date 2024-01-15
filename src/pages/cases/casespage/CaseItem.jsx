import React from 'react'
import Block from '../../../components/Block'
import Button from '../../../components/Button'
import {RiDeleteBinLine, RiEditLine} from 'react-icons/ri'
import { useDispatch } from 'react-redux';
import {deleteCase} from '../../../store/caseSlice'
import styled from 'styled-components'
import Flex from '../../../components/Flex';
import { LIST_COLORS, LIST_TITLES } from '../../../config';
import { formatDateTime } from '../../../utils'
import { Link } from 'react-router-dom';
import { PopupConfirm } from '../../../components/Popup';


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

const StyledCreatedDate = styled.span`
	color: gray;
	font-size: 12px;
	float: right;
`

const StyledParagraph = styled.p`
	margin:	0.4rem;
`
const StyledLittleParagraph = styled.p`
	margin:	0.1rem;
`

const CaseItem = (props) => {
	const { _id, status, ownerFullName, licenseNumber, date, type, color, officer, description, createdAt, updatedAt, resolution, officers } = props
	const dispatch = useDispatch();

	return (
		<Block direction='column'>
			<Flex justify='space-between'>
				<StyledStatus color={LIST_COLORS[status]}>{LIST_TITLES[status]}</StyledStatus>
				<Flex gap='0.4rem'>
					<Link to={`${_id}`} state={{ _id, status, ownerFullName, licenseNumber, date, type, color, officer, description, createdAt, updatedAt, resolution, officers}}><Button width='42px' mobilewidth='48px'><RiEditLine /></Button></Link>
					<PopupConfirm trigger={<Button width='42px' mobilewidth='48px'><RiDeleteBinLine /></Button>} onClick={() => dispatch(deleteCase(_id))}> the case</PopupConfirm>
				</Flex>
			</Flex>
			<StyledInformation>
				<StyledParagraph><StyledTitle>Owner name: </StyledTitle>{ownerFullName}</StyledParagraph>
				<StyledParagraph><StyledTitle>Steal date: </StyledTitle>{formatDateTime(date)}</StyledParagraph>
				<StyledParagraph><StyledTitle>Bike license number: </StyledTitle>{licenseNumber}</StyledParagraph>
				<StyledParagraph><StyledTitle>Bike type: </StyledTitle>{LIST_TITLES[type]}</StyledParagraph>
				<StyledParagraph><StyledTitle>Bike color: </StyledTitle>{color}</StyledParagraph>
				<Flex direction='column'>
						<StyledLittleParagraph><StyledCreatedDate>Created at {formatDateTime(createdAt)}</StyledCreatedDate></StyledLittleParagraph>
						{updatedAt && <StyledLittleParagraph><StyledCreatedDate>Updated at {formatDateTime(updatedAt)}</StyledCreatedDate></StyledLittleParagraph>}
				</Flex>
			</StyledInformation>
		</Block>
	)
}

export default CaseItem