import React from 'react'
import styled from 'styled-components'



const StyledInput = styled.input`
 	 background-color: #FFFFFF;
    border: 1px solid gray;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
    transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;
		padding: 0.2rem;
		margin-bottom: 0.4rem;
		width: 280px;
	:focus {
		border-color: rgba(0, 128, 0, 0.8);
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(0, 128, 0, 0.6);
		outline: 0 none;
	}
`
const StyledSelector = styled.select`
 	 background-color: #FFFFFF;
    border: 1px solid gray;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
    transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;
		padding: 0.2rem;
		margin-bottom: 0.4rem;
		width: 280px;
	:focus {
		border-color: rgba(0, 128, 0, 0.8);
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(0, 128, 0, 0.6);
		outline: 0 none;
	}
`

const Input = (props) => {
	return (
		<StyledInput {...props}>{props.children}</StyledInput>
	)
}

const Selector = (props) => {
	return (
		<StyledSelector {...props}>{props.children}</StyledSelector>
	)
}

export { Input, Selector}