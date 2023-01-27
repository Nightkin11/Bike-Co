import styled from "styled-components";
import React from "react";
import { useWindowSize } from './utils.jsx'

const StyledLogo = styled.h1`
	display: flex;
	font-size: 32px;
	color: green;
	margin: 0;
	cursor: pointer;
`

const Logo = () => {
  const [width] = useWindowSize();
	if (width > 768){
		return <StyledLogo>Bike-company</StyledLogo>;
	} else {
		return <StyledLogo>B-co</StyledLogo>;
	}
}

export default Logo;