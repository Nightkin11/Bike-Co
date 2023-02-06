import React from 'react'
import Block from './Block'
import Button from './Button'
import {RiDeleteBinLine, RiEditLine} from 'react-icons/ri'
import { useDispatch } from 'react-redux';
import {removeCase} from '../store/caseSlice'
import styled from 'styled-components'
import Flex from './Flex';


const StyledInformation = styled.div`
	
`

const StyledStatus = styled.div`
	background-color: green;
	width: 80px;
	display: flex;
	align-items: center;
	justify-content: center;
`

const CaseItem = ({id, status, ownerFullName, licenseNumber, date, type, color, createdAt }) => {
	const dispatch = useDispatch();
	return (
		<Block direction='column'>
			<Flex justify='space-between'>
				<StyledStatus>{status}</StyledStatus>
				<Flex gap='0.4rem'>
					<Button width='42px' mobilewidth='48px' onClick={() => dispatch(removeCase({id}))}><RiEditLine /></Button>
					<Button width='42px' mobilewidth='48px' onClick={() => dispatch(removeCase({id}))}><RiDeleteBinLine /></Button>
				</Flex>
			</Flex>
			<StyledInformation>
				<p>{ownerFullName}</p>
				<p>{date}</p>
				<p>{licenseNumber}</p>
				<p>{type}</p>
				<p>{color}</p>
				<p>{createdAt}</p>
			</StyledInformation>
		</Block>
	)
}

export default CaseItem