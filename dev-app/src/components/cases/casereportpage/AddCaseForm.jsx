import React, { useRef } from 'react'
import styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux'
import { useState } from 'react'
import { Selector, Input } from '../../Inputs'
import Button from '../../Button'
import { addNewCase, addNewCasePublic } from '../../../store/caseSlice'
import { PopupAlert } from '../../Popup'

const StyledForm = styled.form`
	z-index: 1;
	margin-top: 1rem;
	display: block;
`

const AddCaseForm = () => {
	const officers = useSelector(state => state.officers.data)
	const token = localStorage.getItem('token')
	const [values, setValues] = useState({
		status: 'new',
		licenseNumber: '',
		type: '',
		ownerFullName: '',
		color:'',
		date:'',
		officer:'',
		description:'',
		clientId:'c77c6184-c783-4c20-acbc-563bf7384d1f',
	})
	const [isOpen, setIsOpen] = useState(false)
	const dispatch = useDispatch();
	const selectRefType = useRef()
	const selectRefOfficer = useRef()

	const handleChange = (e) => {
		const fieldName = e.target.name
		setValues({...values, [fieldName]: e.target.value})
	}

	const handleChangeType = (e) => {
		const value = e === null ? '' : e.value
		setValues({...values, 'type' : value})
	}
	const handleChangeOfficer = (e) => {
		const value = e === null ? '' : e.value
		setValues({...values, 'officer' : value})
	}

	const onClear = () => {
		selectRefType.current.clearValue()
		token && selectRefOfficer.current.clearValue()
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		token ? dispatch(addNewCase(values)) : dispatch(addNewCasePublic(values))
		setIsOpen(true)
		onClear()
		setValues({
			status: 'new',
			licenseNumber: '',
			type: '',
			ownerFullName: '',
			color:'',
			date:'',
			officer: '',
			description:'',
			clientId:''
		})
		setTimeout(()=> {
			setIsOpen(false)
		}, 2000)
	}

	const selectOptions = [
		{value: 'general', label: 'General bike'},
		{value: 'sport', label: 'Sport bike'},
	]

	const selectOfficers = officers.map((officer) => ({value: `${officer._id}`, label: `${officer.email}`}))


	return (
		<StyledForm onSubmit={handleSubmit}>
			<Input name='licenseNumber' type='text' label="Bike license number" value={values.licenseNumber} onChange={handleChange} required='required' />
			<Input name='ownerFullName' type='text' label='Full name' value={values.ownerFullName} onChange={handleChange} required='required' />
			<Selector ref={selectRefType} name='type' type='text' options={selectOptions} label="Bike type" onChange={handleChangeType} required='required' />
			<Input name='color' type='text' label="Bike color" value={values.color} onChange={handleChange} />
			<Input name='date' type='datetime-local' label="Steal date" value={values.date} onChange={handleChange} />
			{token && <Selector ref={selectRefOfficer} type='text' options={selectOfficers} label="Officer" onChange={handleChangeOfficer} />}
			<Input name='description' type='text' label="Description" value={values.description} onChange={handleChange} />
			{!token && <Input name='clientId' type='text' label="Client ID" value={values.clientId} onChange={handleChange} required='required' />}
			<Button type='submit'>Submit</Button>
			<PopupAlert open={isOpen}>The report is added</PopupAlert>
		</StyledForm>
	)
}

export default AddCaseForm