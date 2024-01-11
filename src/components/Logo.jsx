import React from "react";
import styled from "styled-components";

const StyledLogo = styled.h1`
	display: flex;
	font-size: 32px;
	color: green;
	margin: 0;
	cursor: pointer;
:before {
	content: 'Bike-Company';
}
@media (max-width: 768px) {
	order: 0;
:before {
	content: 'Bike-Co';
}
}
`

const Logo = () => {
	return <StyledLogo />;
}

export default Logo;