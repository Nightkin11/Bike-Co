import React from 'react'
import Block from './Block'
import Button from './Button'
import {RiDeleteBinLine, RiEditLine} from 'react-icons/ri'
import { useDispatch } from 'react-redux';
import {removeCase} from '../store/caseSlice'
import styled from 'styled-components'
import Flex from './Flex';
import { LIST_TITLES } from '../config';
import {formatDate, formatDateTime} from '../utils'
import { Link } from 'react-router-dom';


const StyledInformation = styled.div`
	
`

const StyledStatus = styled.div`
	background-color: green;
	width: 80px;
	display: flex;
	align-items: center;
	justify-content: center;
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

const CaseItem = ({id, status, ownerFullName, licenseNumber, date, type, color, createdAt }) => {
	const dispatch = useDispatch();
	return (
		<Block direction='column'>
			<Flex justify='space-between'>
				<StyledStatus>{status}</StyledStatus>
				<Flex gap='0.4rem'>
					<Link to={`cases/${id}`}><Button width='42px' mobilewidth='48px'><RiEditLine /></Button></Link>
					<Button width='42px' mobilewidth='48px' onClick={() => dispatch(removeCase({id}))}><RiDeleteBinLine /></Button>
				</Flex>
			</Flex>
			<StyledInformation>
				<StyledParagraph><StyledTitle>Owner name: </StyledTitle>{ownerFullName}</StyledParagraph>
				<StyledParagraph><StyledTitle>Steal date: </StyledTitle>{formatDate(date)}</StyledParagraph>
				<StyledParagraph><StyledTitle>Bike license number: </StyledTitle>{licenseNumber}</StyledParagraph>
				<StyledParagraph><StyledTitle>Bike type: </StyledTitle>{LIST_TITLES[type]}</StyledParagraph>
				<StyledParagraph><StyledTitle>Bike color: </StyledTitle>{color}</StyledParagraph>
				<StyledParagraph><StyledCreatedDate>{formatDateTime(createdAt)}</StyledCreatedDate></StyledParagraph>
			</StyledInformation>
		</Block>
	)
}

export default CaseItem