import React from 'react'
import styled from 'styled-components'

const StyledFormItem = styled.div`
	position: relative;
	margin: 2rem 0;

	& input {
		display: block;
		width: 280px;
		height: 40px;
		background: #fff;
		border: solid 1px #ccc;
		transition: all .8s ease;
		padding: 0 15px;
	}

	& select {
		display: block;
		width: 280px;
		height: 40px;
		background: #fff;
		border: solid 1px #ccc;
		transition: all .8s ease;
		padding: 0 15px;
	}

	& input:focus {
		border-color: rgba(0, 128, 0, 0.8);
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(0, 128, 0, 0.6);
		outline: 0 none;
	}

	& select:focus {
		border-color: rgba(0, 128, 0, 0.8);
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(0, 128, 0, 0.6);
		outline: 0 none;
	}

	& label {
		position: absolute;
		cursor: text;
		top: -26px;
		left: -8px;
		font-size: 18px;
		background: transparent;
		padding: 0 10px;
		color: #999;
		transition: all .8s ease;
	}
	& input:focus + label{
	color: green;
	}

	& select:focus + label{
		color: green;
	}
`

const Input = (props) => {
	return (
		<StyledFormItem>
			<input type={props.type} id={props.id} name={props.name} autocomplete={props.autocomplete} required={props.required} value={props.value} onChange={props.onChange} />
			<label>{props.label}</label>
		</StyledFormItem>
	)
}

const Selector = (props) => {
	return (
		<StyledFormItem>
			<select type={props.type} id={props.id} name={props.name} autocomplete={props.autocomplete} required={props.required} value={props.value} onChange={props.onChange} >
				{props.children}
			</select>
			<label>{props.label}</label>
		</StyledFormItem>
	)
}

export { Input, Selector }

