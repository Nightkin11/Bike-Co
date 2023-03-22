import React from 'react'
import { Selector, Input } from '../components/Inputs'
import Button from '../components/Button'
import styled from 'styled-components'
import { useState } from 'react'
import Block from '../components/Block'



const StyledWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 70vh;
`

const StyledForm = styled.form`
	
`

const Casedetailpage = ({id, status, ownerFullName, licenseNumber, date, type, color, description, createdAt }) => {
	const [values, setValues] = useState({
		licenseNumber: {licenseNumber},
		type: {type},
		ownerFullName: {ownerFullName},
		color:{color},
		date:{date},
		description:{description},
	})

	const handleChange = (e) => {
		const fieldName = e.target.name
		setValues({...values, [fieldName]: e.target.value})
	}

	const handleChangeSelect = (selected) => {
		setValues({...values, 'type': selected.value})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
	}
	
	const selectOptions = [
		{value: 'general', label: 'General bike'},
		{value: 'sport', label: 'Sport bike'},
	]

	return (
		<StyledWrapper>
			<Block width='320px' mobilewidth='100%'>
				<StyledForm onSubmit={handleSubmit}>
					<p>{id}{status}</p>
					<Input id='licenseNumber' name='licenseNumber' type='text' label="Bike license number" value={values.licenseNumber} onChange={handleChange} required='required' />
					<Input id='ownerFullName' name='ownerFullName' type='text' label='Full name' value={values.ownerFullName} onChange={handleChange} required='required' />
					<Selector id='type' name='type' type='text' options={selectOptions} label="Bike type" onChange={handleChangeSelect} required='required' />
					<Input id='color' name='color' type='text' label="Bike color" value={values.color} onChange={handleChange} required='required' />
					<Input id='date' name='date' type='date' label="Steal date" value={values.date} onChange={handleChange} required='required' />
					<Input id='description' name='description' type='text' label="Description" value={values.description} onChange={handleChange} />
					<p>{createdAt}{status}</p>
					<Button type='submit'>Submit</Button>
				</StyledForm>
			</Block>
		</StyledWrapper>
	)
}

export default Casedetailpage