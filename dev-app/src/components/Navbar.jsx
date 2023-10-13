import React from 'react'
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react'

const StyledWrapper = styled.div`
	display: flex;
	@media (max-width: 768px) {
	order: -1;
	}`

const StyledNavLink = styled(NavLink)`
	color: black;
	text-decoration: none;
	display: inline-block;
	padding: 0.2rem;
	position: relative;
:after {
	content: "";
	position: absolute;
	bottom: -4px;
	left: 50%;
	display: block;
	background: none repeat scroll 0 0 transparent;
	height: 2px;
	width: 0;
	background: orange;
	transition: width 0.3s ease 0s, left 0.3s ease 0s;
}
:hover {
	color: orange;
}
:hover::after { 
	color: orange;
  width: 100%; 
  left: 0; 
}
&.active {
	color: orange;
}
&.active::after {
	color: orange;
  width: 100%; 
  left: 0; 
}
@media (max-width: 768px) {
	font-size: 32px;
}
`

const StyledUl = styled.ul`
	display: flex;
	align-items: center;
	gap: 2rem;
	@media (max-width: 768px) {
		flex-direction: column;
		justify-content: center;
		position: fixed;
		left: ${props => props.active};
		right: 0;
		top: 0;
		bottom: 0;
		width: 100%;
		height: 100vh;
		background-color: #FFFFFF;
		z-index: 10;
		transition: left 1s;
		box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.1);
	}
`

const StyledLi = styled.li`
	list-style: none;
`

const MobileBurgerBtn = styled.div`
	display: none;
	@media (max-width: 768px) {
		display: flex;
		cursor: pointer;
		align-items: center;
		z-index: 10;
	}
`

const Navbar = () => {
	const [isOpen, setOpen] = useState(false)
	return (
		<StyledWrapper>
			<StyledUl active={isOpen ? '0' : '-100%'}>
				<StyledLi>
					<StyledNavLink to='/' end onClick={() => setOpen(!isOpen)}>Home</StyledNavLink>
				</StyledLi>
				<StyledLi>
					<StyledNavLink to='cases' onClick={() => setOpen(!isOpen)}>Cases</StyledNavLink>
				</StyledLi>
				<StyledLi>
					<StyledNavLink to='officers' onClick={() => setOpen(!isOpen)}>Officers</StyledNavLink>
				</StyledLi>
				<StyledLi>
					<StyledNavLink to='about' onClick={() => setOpen(!isOpen)}>About</StyledNavLink>
				</StyledLi>
				<StyledLi>
					<StyledNavLink to='contact' onClick={() => setOpen(!isOpen)}>Contacts</StyledNavLink>
				</StyledLi>
			</StyledUl>
			<MobileBurgerBtn>
				<Hamburger duration={1} toggled={isOpen} toggle={setOpen} />
			</MobileBurgerBtn>
		</StyledWrapper>

	)
}

export default Navbar