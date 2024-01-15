import React from 'react'
import styled from 'styled-components'
import {useDispatch} from 'react-redux'
import { useState } from 'react'
import { Input } from '../../Inputs'
import Button from '../../Button'
import { addNewOfficer } from '../../../store/officerSlice'

const StyledForm = styled.form`
	margin-top: 1rem;
	display: block;
`

const AddOfficerForm = (props) => {
	const {setOpen} = props;
	const [values, setValues] = useState({
		email: '',
		firstName: '',
		lastName: '',
		password: '',
		approved: false,
	})

	const dispatch = useDispatch();

	const handleChange = (e) => {
		const fieldName = e.target.name
		setValues({...values, [fieldName]: e.target.value})
	}

	const validatePasswordChange = (e) => {
		if (values.password !== e.target.value) {
			e.target.setCustomValidity('Passwords do not match')
		} else {
			e.target.setCustomValidity("");
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault()
		setOpen(false)
		dispatch(addNewOfficer(values))
		setValues({
			email: '',
			firstName: '',
			lastName: '',
			password: '',
			confirmPassword: '',
			approved: false,
		})
	}

	return (
		<StyledForm onSubmit={handleSubmit}>
			<Input id='email' name='email' type='email' label="E-mail" value={values.email} onChange={handleChange} required='required' />
			<Input id='password' name='password' type='password' label="Password" value={values.password} onChange={handleChange} required='required' />
			<Input id='confirm-password' name='confirm-password' type='password' label="Confirm Password" value={values.confirmPassword} onChange={validatePasswordChange} required='required' />
			<Input id='firstName' name='firstName' type='text' label='First name' value={values.firstName} onChange={handleChange} />
			<Input id='lastName' name='lastName' type='text' label="Last name" value={values.lastName} onChange={handleChange} />
			<Button type='submit'>Submit</Button>
		</StyledForm>
	)
}

export default AddOfficerForm