import React from 'react'
import { Input } from '../components/Inputs'
import Button from '../components/Button'
import styled from 'styled-components'
import { useState } from 'react'
import Block from '../components/Block'
import { useLocation, useNavigate } from 'react-router-dom'
import { editCase } from '../store/caseSlice'
import {useDispatch} from 'react-redux'


const StyledWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 70vh;
`

const StyledForm = styled.form`
	
`

const Officerdetailpage = () => {
	const location = useLocation()
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id, status, ownerFullName, licenseNumber, date, type, color, description, createdAt, updatedAt } = location.state

	const [values, setValues] = useState({
		id: id,
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


	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(editCase(values))
		navigate('../cases')
	}



	return (
		<StyledWrapper>
			<Block width='320px' mobilewidth='100%'>
				<StyledForm onSubmit={handleSubmit}>
					<Input id='licenseNumber' name='licenseNumber' type='text' label="Bike license number" value={values.licenseNumber} onChange={handleChange} required='required' />
					<Input id='ownerFullName' name='ownerFullName' type='text' label='Full name' value={values.ownerFullName} onChange={handleChange} required='required' />
					<Input id='color' name='color' type='text' label="Bike color" value={values.color} onChange={handleChange} required='required' />
					<Input id='date' name='date' type='date' label="Steal date" value={values.date} onChange={handleChange} required='required' />
					<Input id='description' name='description' type='text' label="Description" value={values.description} onChange={handleChange} />
					<Button type='submit'>Submit</Button>
				</StyledForm>
			</Block>
		</StyledWrapper>
	)
}

export default Officerdetailpage