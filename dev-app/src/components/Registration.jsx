import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { useWindowSize } from '../utils'
import {FiLogIn, FiUserPlus, FiLogOut} from 'react-icons/fi'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/userSlice'

const StyledWrapper = styled.div`
	display: flex;
	gap: 0.4rem;
	align-items: center;
`

const Registration = () => {
	const [width] = useWindowSize();
	const dispatch = useDispatch();
	const token = useSelector(state => state.users.data.token);
	const {firstName} = useSelector(state => state.users.data.user);

	return (
		<StyledWrapper>
			{!token && <Link to='signin'><Button width={width > 768 ? '100px' : '48px'}>{width > 768 ? 'Sign in' : <FiLogIn />}</Button></Link>}
			{!token && <Link to='signup'><Button width={width > 768 ? '100px' : '48px'}>{width > 768 ? 'Sign Up' : <FiUserPlus />}</Button></Link>}
			{firstName && firstName}
			{token && <Button width={width > 768 ? '100px' : '48px'} onClick={() => dispatch(logout())}>{width > 768 ? 'Log out' : <FiLogOut />}</Button>}
		</StyledWrapper>
	)
}

export default Registration