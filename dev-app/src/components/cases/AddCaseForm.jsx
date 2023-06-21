import React from 'react'
import styled from 'styled-components'
import {useDispatch} from 'react-redux'
import { useState } from 'react'
import { Selector, Input } from '../Inputs'
import Button from '../Button'
import { addCase } from '../../store/caseSlice'

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
		color:'',
		date:'',
		description:'',
	})
	const dispatch = useDispatch();

	const handleChange = (e) => {
		const fieldName = e.target.name
		setValues({...values, [fieldName]: e.target.value})
	}

	const handleChangeSelect = (selected) => {
		setValues({...values, 'type': selected.value})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setOpen(false)
		dispatch(addCase(values))
		setValues({
			status: 'new',
			licenseNumber: '',
			type: '',
			ownerFullName: '',
			color:'',
			date:'',
			description:'',
		})
	}
	const selectOptions = [
		{value: 'general', label: 'General bike'},
		{value: 'sport', label: 'Sport bike'},
	]
	return (
		<StyledForm onSubmit={handleSubmit}>
			<Input id='licenseNumber' name='licenseNumber' type='text' label="Bike license number" value={values.licenseNumber} onChange={handleChange} required='required' />
			<Input id='ownerFullName' name='ownerFullName' type='text' label='Full name' value={values.ownerFullName} onChange={handleChange} required='required' />
			<Selector id='type' name='type' type='text' options={selectOptions} label="Bike type" onChange={handleChangeSelect} required='required' />
			<Input id='color' name='color' type='text' label="Bike color" value={values.color} onChange={handleChange} required='required' />
			<Input id='date' name='date' type='date' label="Steal date" value={values.date} onChange={handleChange} required='required' />
			<Input id='description' name='description' type='text' label="Description" value={values.description} onChange={handleChange} />
			<Button type='submit'>Submit</Button>
		</StyledForm>
	)
}

export default AddCaseForm