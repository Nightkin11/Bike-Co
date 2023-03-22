import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Block from '../components/Block'
import Button from '../components/Button'
import {Input} from '../components/Inputs'

const StyledWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 70vh;
`

const StyledForm = styled.form`
	display: block;
`

const Registrationpage = () => {
	const [values, setValues] = useState({
		email: '',
		firstName: '',
		lastName: '',
		password: '',
		clientId:'',
		approved:'',
	})

	const handleChange = (e) => {
		const fieldName = e.target.name
		setValues({...values, [fieldName]: e.target.value})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	return (
		<StyledWrapper>
			<Block width='320px' mobilewidth='100%'>
				<StyledForm onSubmit={handleSubmit}>
					<Input label='Email' id='email' name='email' type='email' value={values.email} onChange={handleChange} required='required' />
					<Input label='Password' id='password' name='password' type='password' value={values.password} onChange={handleChange} required='required' />
					<Input label='First name' id='firstName' name='firstName' type='text' value={values.firstName} onChange={handleChange} />
					<Input label='Last name' id='lastName' name='lastName' type='text' value={values.lastName} onChange={handleChange} />
					<Input label='Client ID' id='clientId' name='clientId' type='text' value={values.clientId} onChange={handleChange} required='required' />
					<Button width='100px' type='submit'>Sign up</Button>
				</StyledForm>
			</Block>
		</StyledWrapper>
	)
}

export default Registrationpage