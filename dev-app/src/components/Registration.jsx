import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { useWindowSize } from './utils.jsx'
import {FiLogIn, FiUserPlus} from 'react-icons/fi'
import { Link } from "react-router-dom";

const StyledWrapper = styled.div`
	display: flex;
	gap: 0.4rem;
`

const Registration = () => {
	const [width] = useWindowSize();
	return (
		<StyledWrapper>
			{width > 768 ? <Link to='signin'><Button width='100px'>Sign in</Button></Link> : <Link to='signin'><Button mobilewidth='48px'><FiLogIn /></Button></Link>}
			{width > 768 ? <Link to='signup'><Button width='100px'>Sign up</Button></Link> : <Link to='signup'><Button mobilewidth='48px'><FiUserPlus /></Button></Link>}
		</StyledWrapper>
	)
}

export default Registration