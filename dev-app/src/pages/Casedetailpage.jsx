import React from 'react'
import { Selector, Input } from '../components/Inputs'
import Button from '../components/Button'
import styled from 'styled-components'
import { useState } from 'react'
import Block from '../components/Block'
import { useLocation, useNavigate } from 'react-router-dom'
import { formatDateTime, DateWithoutTime } from '../utils'
import Flex from '../components/Flex'
import { deleteCase, toggleCase } from '../store/caseSlice'
import {useDispatch} from 'react-redux'




const StyledWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 70vh;
`

const StyledForm = styled.form`
	
`
const StyledCreatedDate = styled.span`
	color: gray;
	font-size: 12px;
	float: right;
`

const StyledParagraph = styled.p`
	margin:	0.1rem;
`

const Casedetailpage = () => {
	const location = useLocation()
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { _id, status, ownerFullName, licenseNumber, date, type, color, description, createdAt, updatedAt } = location.state

	const [values, setValues] = useState({
		_id: _id,
		licenseNumber: licenseNumber,
		ownerFullName: ownerFullName,
		status: status,
		type: type,
		color: color,
		date: date,
		description: description,
	})


	const handleChange = (e) => {
		const fieldName = e.target.name
		setValues({...values, [fieldName]: e.target.value})
	}

	const handleChangeSelectStatus = (selectedStatus) => {
		setValues({...values, 'status': selectedStatus.value})
	}
	const handleChangeSelectType = (selectedType) => {
		setValues({...values, 'type': selectedType.value})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(toggleCase(values))
		.unwrap()
		.then(navigate('../cases'))
	}

	const defaultValueIndexType = type === 'general' ? 0 : type === 'sport' ? 1 : 0
	const selectOptionsType = [
		{value: 'general', label: 'General bike'},
		{value: 'sport', label: 'Sport bike'},
	]

	const defaultValueIndexStatus = status === 'new' ? 0 : status === 'in_progress' ? 1 : status === 'done' ? 2 : 0
	const selectOptionsStatus = [
		{value: 'new', label: 'New'},
		{value: 'in_progress', label: 'In progress'},
		{value: 'done', label: 'Done'},
	]

	return (
		<StyledWrapper>
			<Block direction='column' width='320px' mobilewidth='100%'>
				<StyledForm id='form' onSubmit={handleSubmit}>
					<Input id='licenseNumber' name='licenseNumber' type='text' label="Bike license number" value={values.licenseNumber} onChange={handleChange} required='required' />
					<Input id='ownerFullName' name='ownerFullName' type='text' label='Full name' value={values.ownerFullName} onChange={handleChange} required='required' />
					<Selector id='status' name='status' defaultValue={selectOptionsStatus[defaultValueIndexStatus]} options={selectOptionsStatus} label="Status" onChange={handleChangeSelectStatus} required='required' />
					<Selector id='type' name='type' defaultValue={selectOptionsType[defaultValueIndexType]} options={selectOptionsType} label="Bike type" onChange={handleChangeSelectType} required='required' />
					<Input id='color' name='color' type='text' label="Bike color" value={values.color} onChange={handleChange} required='required' />
					<Input id='date' name='date' type='date' label="Steal date" value={DateWithoutTime(values.date)} onChange={handleChange} required='required' />
					<Input id='description' name='description' type='text' label="Description" value={values.description} onChange={handleChange} />
					<Flex direction='column' margin='0 0 1rem'>
						<StyledParagraph><StyledCreatedDate>Created at {formatDateTime(createdAt)}</StyledCreatedDate></StyledParagraph>
						{updatedAt && <StyledParagraph><StyledCreatedDate>Updated at {formatDateTime(updatedAt)}</StyledCreatedDate></StyledParagraph>}
					</Flex>
				</StyledForm>
				<Flex justify='space-between'>
					<Button type='submit' form='form'>Save</Button>
					<Button onClick={() => {dispatch(deleteCase(_id)); navigate('../cases')}}>Delete</Button>
				</Flex>
			</Block>
		</StyledWrapper>
	)
}

export default Casedetailpage