import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import {Input} from '../components/Inputs'
import Block from '../components/Block'
import { logoutUser, signIn } from '../store/userSlice'
import {useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PopupAlert from '../components/Popup'


const StyledWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 80vh;
`

const StyledForm = styled.form`
	display: block;
`

const Loginpage = () => {
	const { status, message, errCode } = useSelector(state => state.users);

	const [values, setValues] = useState({
		email: '',
		password: '',
	})
	
	const dispatch = useDispatch();
	const navigate = useNavigate()
	
	
	
	const handleChange = (e) => {
		const fieldName = e.target.name
		setValues({...values, [fieldName]: e.target.value})
	}
	
	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(logoutUser())
		dispatch(signIn(values))
			.unwrap()
			.then(() => navigate("/"))
	}

	return (
		<StyledWrapper>
			<Block width='320px' mobilewidth='100%'>
				<StyledForm onSubmit={handleSubmit}>
					<Input label='Email' id='email' name='email' type='email' value={values.email} onChange={handleChange} required='required' />
					<Input label='Password' id='password' name='password' type='password' value={values.password} onChange={handleChange} required='required' />
					<Button width='100px' type='submit'>Sign in</Button>
				</StyledForm>
			</Block>
			<PopupAlert open={status === 'loading'}>Entering</PopupAlert>
			<PopupAlert open={errCode && errCode !== 'AUTH'}>{message}</PopupAlert>
		</StyledWrapper>
	)
}

export default Loginpage