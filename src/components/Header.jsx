import React from "react";
import Container from "./Container";
import styled from "styled-components";
import Logo2 from "./Logo2";
import Navbar from "./Navbar";
import Registration from "./users/Registration";
import Flex from './Flex'
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
	background-color: #FFFFFF;
	box-shadow: inset 0px -2px 0px gray;
	position: sticky;
	top: 0;
	z-index: 2;
`
const StyledLink = styled(Link)`
	text-decoration:none;
`

const Header = () => {
	return (
		<StyledHeader>
			<Container padding='1rem 1rem'>
				<Flex justify='space-between' align='center'>
					<StyledLink to='/'><Logo2 /></StyledLink>
					<Navbar />
					<Registration />
				</Flex>
			</Container>
		</StyledHeader>
	)
}

export default Header
