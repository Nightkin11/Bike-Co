import React from 'react'
import { Input, Checkbox } from '../components/Inputs'
import Button from '../components/Button'
import styled from 'styled-components'
import { useState } from 'react'
import Block from '../components/Block'
import { useLocation, useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { editOfficer } from '../store/officerSlice'


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
	const { id, email, firstName, lastName, password, clientId, approved } = location.state

	const [values, setValues] = useState({
		id: id,
		email: email,
		firstName: firstName,
		lastName: lastName,
		password: password,
		clientId: clientId,
		approved: approved,
	})

	const handleChange = (e) => {
		const fieldName = e.target.name
		setValues({...values, [fieldName]: e.target.value})
	}

	const handleChangeCheckbox = (e) => {
		setValues({...values, 'approved': !approved})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(editOfficer(values))
		navigate('../officers')
	}

	return (
		<StyledWrapper>
			<Block width='320px' mobilewidth='100%'>
				<StyledForm onSubmit={handleSubmit}>
					<Input id='email' name='email' type='email' label="Email" value={values.email} onChange={handleChange} required='required' />
					<Input id='firstName' name='firstName' type='text' label='First name' value={values.firstName} onChange={handleChange} required='required' />
					<Input id='lastName' name='lastName' type='text' label="Last name" value={values.lastName} onChange={handleChange} required='required' />
					<Input id='password' name='password' type='password' label="Password" value={values.password} onChange={handleChange} required='required' />
					<Input id='clientId' name='clientId' type='text' label="Client ID" value={values.clientId} onChange={handleChange} />
					<Checkbox id='approved' name='approved' label="Approved" value={values.approved} checked={values.approved} onChange={handleChangeCheckbox} />
					<Button type='submit'>Submit</Button>
				</StyledForm>
			</Block>
		</StyledWrapper>
	)
}

export default Officerdetailpage