import React from 'react'
import { Input, Checkbox } from '../../Inputs'
import Button from '../../Button'
import styled from 'styled-components'
import { useState } from 'react'
import Block from '../../Block'
import { useLocation, useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { deleteOfficer, toggleOfficer } from '../../../store/officerSlice'
import { PopupConfirm } from '../../Popup'
import Flex from '../../Flex'


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
			<Block width='320px' mobilewidth='100%' direction='column'>
				<StyledForm id='form' onSubmit={handleSubmit}>
					<Input name='email' type='email' label="Email" value={values.email} onChange={handleChange} required='required' disabled />
					<Input name='firstName' type='text' label='First name' value={values.firstName || ''} onChange={handleChange} />
					<Input name='lastName' type='text' label="Last name" value={values.lastName || ''} onChange={handleChange} />
					<Input name='clientId' type='text' label="Client ID" value={values.clientId} onChange={handleChange} disabled/>
					<Checkbox name='approved' label="Approved" value={values.approved} checked={values.approved} onChange={handleChangeCheckbox} />
				</StyledForm>
				<Flex justify='space-between'>
					<Button type='submit' form='form'>Save</Button>
					<PopupConfirm trigger={<Button>Delete</Button>} onClick={() => {dispatch(deleteOfficer(_id)); navigate('../officers')}}> the officer</PopupConfirm>
					<Button onClick={() => navigate('../officers')}>Back</Button>
				</Flex>
			</Block>
		</StyledWrapper>
	)
}

export default Officerdetailpage