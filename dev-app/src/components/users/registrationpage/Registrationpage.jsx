import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Block from '../../Block'
import Button from '../../Button'
import {Input} from '../../Inputs'
import {useDispatch, useSelector} from 'react-redux'
import { signUp } from '../../../store/userSlice'
import { useNavigate } from 'react-router-dom'
import { PopupAlert } from '../../Popup'


const StyledWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 80vh;
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
					<Input label='Email' id='email' name='email' type='email' value={values.email} onChange={handleChange} required='required' />
					<Input label='Password' id='password' name='password' type='password' value={values.password} onChange={handleChange} required='required' />
					<Input label="Confirm Password" id='confirm-password' name='confirm-password' type='password' value={values.confirmPassword} onChange={validatePasswordChange} required='required' />
					<Input label='First name' id='firstName' name='firstName' type='text' value={values.firstName} onChange={handleChange} />
					<Input label='Last name' id='lastName' name='lastName' type='text' value={values.lastName} onChange={handleChange} />
					<Input label='Client ID' id='clientId' name='clientId' type='text' value={values.clientId} onChange={handleChange} required='required' />
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