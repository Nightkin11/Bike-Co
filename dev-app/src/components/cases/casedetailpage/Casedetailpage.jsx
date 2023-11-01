import React from 'react'
import { Selector, Input } from '../../Inputs'
import Button from '../../Button'
import styled from 'styled-components'
import { useState } from 'react'
import Block from '../../Block'
import { useLocation, useNavigate } from 'react-router-dom'
import { formatDateTime, DateWithTime } from '../../../utils'
import Flex from '../../Flex'
import { deleteCase, toggleCase } from '../../../store/caseSlice'
import {useDispatch} from 'react-redux'
import { PopupConfirm } from '../../Popup'


const StyledWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
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
	const { _id, status, ownerFullName, licenseNumber, date, type, color, officer, description, createdAt, updatedAt, resolution, officers} = location.state
	const [values, setValues] = useState({
		_id: _id,
		licenseNumber: licenseNumber,
		ownerFullName: ownerFullName,
		status: status,
		type: type,
		color: color,
		date: date,
		officer: officer,
		resolution: resolution,
		description: description,
	})

	const handleChange = (e) => {
		const fieldName = e.target.name
		setValues({...values, [fieldName]: e.target.value})
	}

	const handleChangeSelectStatus = (e) => {
		const value = e === null ? null : e.value
		setValues({...values, 'status': value})
	}
	const handleChangeSelectType = (e) => {
		const value = e === null ? null : e.value
		setValues({...values, 'type': value})
	}
	const handleChangeOfficer = (e) => {
		const value = e === null ? null : e.value
		setValues({...values, 'officer' :value})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(toggleCase(values))
		.unwrap()
		.then(navigate('../cases'))
	}

	const selectedType = type === 'general' ? 0 : type === 'sport' ? 1 : 0
	const selectOptionsType = [
		{value: 'general', label: 'General bike'},
		{value: 'sport', label: 'Sport bike'},
	]

	const selectedStatus = status === 'new' ? 0 : status === 'in_progress' ? 1 : status === 'done' ? 2 : 0
	const selectOptionsStatus = [
		{value: 'new', label: 'New'},
		{value: 'in_progress', label: 'In progress'},
		{value: 'done', label: 'Done'},
	]

	const selectOfficers = officers.map((officer) => ({value: `${officer._id}`, label: `${officer.email}`}))
	const selectedOfficer = officers.map((officer) => officer._id).indexOf(values.officer);

	return (
		<StyledWrapper>
			<Block width='320px' mobilewidth='100%' direction='column'>
				<StyledForm id='form' onSubmit={handleSubmit}>
					<Input name='licenseNumber' type='text' label="Bike license number" value={values.licenseNumber || ''} onChange={handleChange} required='required' />
					<Input name='ownerFullName' type='text' label='Full name' value={values.ownerFullName || ''} onChange={handleChange} required='required' />
					<Selector name='status' defaultValue={selectOptionsStatus[selectedStatus]} options={selectOptionsStatus} label="Status" onChange={handleChangeSelectStatus} required='required' />
					{values.status === 'done' && <Input name='resolution' type='text' label="Resolution" value={values.resolution || ''} onChange={handleChange} required='required' />}
					<Selector name='type' defaultValue={selectOptionsType[selectedType]} options={selectOptionsType} label="Bike type" onChange={handleChangeSelectType} required='required' />
					<Input name='color' type='text' label="Bike color" value={values.color || ''} onChange={handleChange} />
					<Input name='date' type='datetime-local' label="Steal date" value={DateWithTime(values.date) || ''} onChange={handleChange} />
					<Selector type='text' options={selectOfficers} label="Officer" defaultValue={selectOfficers[selectedOfficer]} onChange={handleChangeOfficer} />
					<Input name='description' type='text' label="Description" value={values.description || ''} onChange={handleChange} />
					<Flex direction='column' margin='0 0 1rem'>
						<StyledParagraph><StyledCreatedDate>Created at {formatDateTime(createdAt)}</StyledCreatedDate></StyledParagraph>
						{updatedAt && <StyledParagraph><StyledCreatedDate>Updated at {formatDateTime(updatedAt)}</StyledCreatedDate></StyledParagraph>}
					</Flex>
				</StyledForm>
				<Flex justify='space-between'>
					<Button type='submit' form='form'>Save</Button>
					<PopupConfirm trigger={<Button>Delete</Button>} onClick={() => {dispatch(deleteCase(_id)); navigate('../cases')}}> the case</PopupConfirm>
				</Flex>
			</Block>
		</StyledWrapper>
	)
}

export default Casedetailpage