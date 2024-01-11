import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
	margin: 0 auto;
	position: relative;
	width: ${props => props.width || 'auto'};
	max-width: ${props => props.maxwidth || 'auto'};
	padding: ${({padding}) => padding || '0'};
`

const Container = (props) => {
	return <StyledContainer {...props} />
};

export default Container;