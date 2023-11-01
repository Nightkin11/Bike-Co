import React, { useState } from 'react'
import styled from 'styled-components'
import Block from '../../Block'
import { useDispatch, useSelector } from 'react-redux'
import { Input } from '../../Inputs'
import { PopupAlert, PopupPassword } from '../../Popup'
import { toggleOfficer } from '../../../store/officerSlice'
import Button from '../../Button'
import Flex from '../../Flex'

const StyledWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 80vh;
`

const StyledTitle = styled.h1`
	margin: 0.4rem;
`
const StyledSmallTitle = styled.span`
	color: gray;
`
const StyledParagraph = styled.p`
	margin:	0.4rem;
`

const Profilepage = () => {
	const user = useSelector(state => state.users.data.user);
	const { status, message } = useSelector(state => state.officers);
	const dispatch = useDispatch();
	const { id, email, firstName, lastName, approved } = user
	const [ values, setValues ] = useState({
		_id: id,
		password: '',
	})

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
	
	const handleSubmit = () => {
		dispatch(toggleOfficer(values))
	}

	return (
		<StyledWrapper>
			<Block width='320px' mobilewidth='100%' direction='column'>
				<StyledTitle>Profile</StyledTitle>
				<StyledParagraph><StyledSmallTitle>ID: </StyledSmallTitle>{id}</StyledParagraph>
				<StyledParagraph><StyledSmallTitle>Email: </StyledSmallTitle>{email}</StyledParagraph>
				<StyledParagraph><StyledSmallTitle>First name: </StyledSmallTitle>{firstName}</StyledParagraph>
				<StyledParagraph><StyledSmallTitle>Last name: </StyledSmallTitle>{lastName}</StyledParagraph>
				<StyledParagraph><StyledSmallTitle>Approved: </StyledSmallTitle>{approved ? 'Yes' : 'No'}</StyledParagraph>
				<PopupPassword trigger={<Button>Change password</Button>}>
					{close => (
						<>
							<Input name='password' type='password' label="Password" value={values.password} onChange={handleChange} required='required' />
							<Input name='confirm-password' type='password' label="Confirm Password" value={values.confirmPassword} onChange={validatePasswordChange} required='required' />
							<Flex justify='space-between'>
								<Button form='form' onClick={() => {handleSubmit(); close()}}>Save</Button>
								<Button onClick={close}>Cancel</Button>
							</Flex>
						</>
					)}
				</PopupPassword>
				<PopupAlert open={status === 'loading'}>Loading</PopupAlert>
				<PopupAlert open={status === 'changed'}>Password changed</PopupAlert>
				<PopupAlert open={status === 'ERR'}>{message}</PopupAlert>
			</Block>
		</StyledWrapper>
	)
}

export default Profilepage