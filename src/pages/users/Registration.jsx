import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../../components/Button'
import { useWindowSize } from '../../utils'
import {FiLogIn, FiUserPlus, FiUser } from 'react-icons/fi'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import useOnclickOutside from "react-cool-onclickoutside";
import Dropdown from '../../components/Dropdown'

const StyledWrapper = styled.div`
	display: flex;
	gap: 0.4rem;
	align-items: center;
`

const ProfileWrapper = styled.div`
	position: relative;
	display: flex;
`

const Registration = () => {
	const [width] = useWindowSize();
	const token = useSelector(state => state.users.data.token);
	const {firstName} = useSelector(state => state.users.data.user);
	const [toggleDropdown, setToggleDropdown] = useState(false);

	const handleToggle = (e) => {
		e.preventDefault();
		setToggleDropdown((prevState) => !prevState);
	};

	const ref = useOnclickOutside(() => {
		setToggleDropdown(false);
	});

	return (
		<StyledWrapper>
			<ProfileWrapper ref={ref} onClick={handleToggle} >
				{token && <Button width={width > 768 ? '100px' : '48px'}>{width > 768 ? `${firstName ? firstName : 'Profile'}` : <FiUser />}</Button>}
				{toggleDropdown && <Dropdown />}
			</ProfileWrapper>
			{!token && <Link to='signin'><Button width={width > 768 ? '100px' : '48px'}>{width > 768 ? 'Sign in' : <FiLogIn />}</Button></Link>}
			{!token && <Link to='signup'><Button width={width > 768 ? '100px' : '48px'}>{width > 768 ? 'Sign Up' : <FiUserPlus />}</Button></Link>}
		</StyledWrapper>
	)
}

export default Registration