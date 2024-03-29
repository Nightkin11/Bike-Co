import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Block from '../../../components/Block'
import Button from '../../../components/Button'
import {Input} from '../../../components/Inputs'
import {useDispatch, useSelector} from 'react-redux'
import { signUp } from '../../../store/userSlice'
import { useNavigate } from 'react-router-dom'
import { PopupAlert } from '../../../components/Popup'


const StyledWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
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
		clientId:'c77c6184-c783-4c20-acbc-563bf7384d1f',
	})
	const dispatch = useDispatch();
	const navigate = useNavigate()
	const { status, errCode, message } = useSelector(state => state.users);
	
	const validatePasswordChange = (e) => {
		if (values.password !== e.target.value) {
			e.target.setCustomValidity('Passwords do not match')
		} else {
			e.target.setCustomValidity("");
		}
	};

	const handleChange = (e) => {
		const fieldName = e.target.name
		setValues({...values, [fieldName]: e.target.value})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(signUp(values))
		.unwrap()
		.then(setTimeout(() => {
			navigate('/')
		}, 2000))
	}

	return (
		<StyledWrapper>
			<Block width='320px' mobilewidth='100%'>
				<StyledForm onSubmit={handleSubmit}>
					<Input label='Email' name='email' type='email' value={values.email} onChange={handleChange} required='required' />
					<Input label='Password' name='password' type='password' value={values.password} onChange={handleChange} required='required' />
					<Input label="Confirm Password" name='confirm-password' type='password' value={values.confirmPassword} onChange={validatePasswordChange} required='required' />
					<Input label='First name' name='firstName' type='text' value={values.firstName} onChange={handleChange} />
					<Input label='Last name' name='lastName' type='text' value={values.lastName} onChange={handleChange} />
					<Input label='Client ID' name='clientId' type='text' value={values.clientId} onChange={handleChange} disabled='disabled' required='required' />
					<Button width='100px' type='submit'>Sign up</Button>
				</StyledForm>
			</Block>
			<PopupAlert open={status === 'loading'}>Entering</PopupAlert>
			<PopupAlert open={status === 'OK registered'}>Registered</PopupAlert>
			<PopupAlert open={errCode && errCode !== 'AUTH'}>{message}</PopupAlert>
		</StyledWrapper>
	)
}

export default Registrationpage