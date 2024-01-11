import React from "react";
import styled from "styled-components";

const StyledFlex = styled.div`
	display: flex;
	flex-direction: ${props => props.direction || 'row'};
	align-items:  ${props => props.align || 'stretch'};
	justify-content:  ${props => props.justify || 'stretch'};
	margin:  ${({margin}) => margin || '0'};
	width: ${props => props.width || 'auto'};
	gap: ${props => props.gap || 'auto'};
	@media (max-width: 768px) {
		display: ${props => props.display768max || 'flex'}
	}
	@media (min-width: 768px) {
		display: ${props => props.display768min || 'flex'}
	}
`

const Flex = (props) => {
	return <StyledFlex {...props} />
};

export default Flex;
