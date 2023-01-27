import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { Selector, Input } from './Inputs'
import Button from './Button'

const StyledForm = styled.form`
	margin-top: 1rem;
	display: block;
`

const AddCaseForm = (props) => {
	const {setOpen} = props;
	const [values, setValues] = useState({
		status: 'new',
		licenseNumber: '',
		type: '',
		ownerFullName: '',
		clientId: '',
		createdAt: '',
		updateAt: '',
		color:'',
		date:'',
		officer: '',
		description:'',
		resolution:'',
	})

	const handleChange = (e) => {
		const fieldName = e.target.name
		setValues({...values, [fieldName]: e.target.value})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setOpen(false)
	}

	return (
		<StyledForm onSubmit={handleSubmit}>
			<Input id='licenseNumber' name='licenseNumber' type='text' label='License number' value={values.licenseNumber} onChange={handleChange} />
			<Input id='ownerFullName' name='ownerFullName' type='text' label='Full name' value={values.ownerFullName} onChange={handleChange} />
			<Selector id='type' name='type' type='text' label="Bike's type" onChange={handleChange}>
				<option disabled selected value={values.type} style={{display: 'none'}}>Bike's type</option>
				<option value="general">General bike</option>
				<option value="sport">Sport bike</option>
			</Selector>
			<Input id='color' name='color' type='text' label="Bike's color" value={values.color} onChange={handleChange} />
			<Input id='date' name='date' type='date' label="Date of steal" value={values.date} onChange={handleChange} />
			<Input id='description' name='description' type='text' label="Description" value={values.description} onChange={handleChange} />
			<Button type='submit'>Submit</Button>
		</StyledForm>
	)
}

export default AddCaseForm