import React from 'react'
import styled from 'styled-components'
import Select from 'react-select'



const StyledFormItem = styled.div`
	position: relative;
	margin: 2rem 0;
`
const StyledInput = styled.input`
		display: block;
		width: 280px;
		height: 40px;
		background: #fff;
		border: solid 1px #ccc;
		transition: all .8s ease;
		padding: 0 0.6rem;
	:focus {
		border-color: rgba(0, 128, 0, 0.8);
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(0, 128, 0, 0.6);
		outline: 0 none;
	}
	:focus + label {
		color: green;
	}
`

const StyledSelector = styled(Select)`
	.Select__control {
		width: 280px;
		height: 40px;
		background: #fff;
		border: solid 1px #ccc;
		transition: all .8s ease;
		border-radius: 0;
	}

	.Select__control--is-focused {
		border-color: rgba(0, 128, 0, 0.8);
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(0, 128, 0, 0.6);
		outline: 0 none;
	}
	.Select__control:hover {
		border-color: green;
  }
	.Select__control--is-focused + label {
		color: green;
	}

`
const Styledlabel = styled.label`
		position: absolute;
		cursor: text;
		top: -26px;
		left: -8px;
		font-size: 18px;
		background: transparent;
		padding: 0 10px;
		color: #999;
		transition: all .8s ease;
`

const Input = (props) => {
	return (
		<StyledFormItem>
			<StyledInput type={props.type} id={props.id} name={props.name} required={props.required} value={props.value} onChange={props.onChange} />
			<Styledlabel>{props.label}</Styledlabel>
		</StyledFormItem>
	)
}

const Selector = (props) => {
	return (
		<StyledFormItem>
			<StyledSelector classNamePrefix='Select' isClearable options={props.options} {...props} >
				{props.children}
			</StyledSelector>
			<Styledlabel>{props.label}</Styledlabel>
		</StyledFormItem>
	)
}

export { Input, Selector }

