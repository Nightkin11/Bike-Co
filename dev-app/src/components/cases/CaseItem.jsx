import React from 'react'
import Block from '../Block'
import Button from '../Button'
import {RiDeleteBinLine, RiEditLine} from 'react-icons/ri'
import { useDispatch } from 'react-redux';
import {removeCase} from '../../store/caseSlice'
import styled from 'styled-components'
import Flex from '../Flex';
import { LIST_COLORS, LIST_TITLES } from '../../config';
import { formatDateTime, formatDate } from '../../utils'
import { Link } from 'react-router-dom';


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

const CaseItem = (singleCase) => {
	const { id, status, ownerFullName, licenseNumber, date, type, color, description, createdAt, updatedAt } = singleCase
	const dispatch = useDispatch();
	return (
		<Block direction='column'>
			<Flex justify='space-between'>
				<StyledStatus color={LIST_COLORS[status]}>{LIST_TITLES[status]}</StyledStatus>
				<Flex gap='0.4rem'>
					<Link to={`${id}`} state={{ id, status, ownerFullName, licenseNumber, date, type, color, description, createdAt, updatedAt }}><Button width='42px' mobilewidth='48px'><RiEditLine /></Button></Link>
					<Button width='42px' mobilewidth='48px' onClick={() => dispatch(removeCase({id}))}><RiDeleteBinLine /></Button>
				</Flex>
			</Flex>
			<StyledInformation>
				<StyledParagraph><StyledTitle>Owner name: </StyledTitle>{ownerFullName}</StyledParagraph>
				<StyledParagraph><StyledTitle>Steal date: </StyledTitle>{formatDate(date)}</StyledParagraph>
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