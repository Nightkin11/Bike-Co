import React from 'react'
import { Input, Checkbox } from '../../Inputs'
import Button from '../../Button'
import styled from 'styled-components'
import { useState } from 'react'
import Block from '../../Block'
import { useLocation, useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { toggleOfficer } from '../../../store/officerSlice'


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
	const { _id, email, firstName, lastName, clientId, approved } = location.state

	const [values, setValues] = useState({
		_id: _id,
		email: email,
		firstName: firstName,
		lastName: lastName,
		clientId: clientId,
		approved: approved,
	})

	const handleChange = (e) => {
		const fieldName = e.target.name
		setValues({...values, [fieldName]: e.target.value})
	}

	const handleChangeCheckbox = (e) => {
		setValues({...values, 'approved': !values.approved})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(toggleOfficer(values))
		.unwrap()
		.then(navigate('../officers'))
	}

	return (
		<StyledWrapper>
			<Block width='320px' mobilewidth='100%'>
				<StyledForm onSubmit={handleSubmit}>
					<Input id='email' name='email' type='email' label="Email" value={values.email} onChange={handleChange} required='required' disabled />
					<Input id='firstName' name='firstName' type='text' label='First name' value={values.firstName || ''} onChange={handleChange} />
					<Input id='lastName' name='lastName' type='text' label="Last name" value={values.lastName || ''} onChange={handleChange} />
					<Input id='clientId' name='clientId' type='text' label="Client ID" value={values.clientId} onChange={handleChange} disabled/>
					<Checkbox id='approved' name='approved' label="Approved" value={values.approved} checked={values.approved} onChange={handleChangeCheckbox} />
					<Button type='submit'>Submit</Button>
				</StyledForm>
			</Block>
		</StyledWrapper>
	)
}

export default Officerdetailpage