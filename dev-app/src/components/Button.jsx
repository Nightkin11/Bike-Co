import styled from 'styled-components'
import React from 'react'


const StyledButton = styled.button`
	width: ${props => props.width || 'auto'};
  background: orange;
  border: none;
  z-index: 1;
  padding: 0.4rem 0.4rem;
	transition: all 0.3s ease;
  position: relative;
  display: inline-block;
	cursor: pointer;
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;
:after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0;
  top: 0;
  left: 0;
  z-index: -1;
  border-radius: 5px;
  background-color: green;
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5), 7px 7px 20px 0px rgba(0,0,0,.1), 4px 4px 5px 0px rgba(0,0,0,.1);
  transition: all 0.3s ease;
}
:hover {
  color: #000;
}
:hover:after {
  top: auto;
  top: 0;
  height: 100%;
}
:active {
  top: 2px;
}

@media (max-width: 768px) {
	width: ${props => props.mobilewidth || 'auto'};
	height: 48px;
}
`

const Button = (props) => {
	return (
		<StyledButton {...props}>{props.children}</StyledButton>
	)
}

export default Button