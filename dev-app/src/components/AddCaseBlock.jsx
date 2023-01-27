import React from 'react'
import Block from './Block'
import AddCaseForm from './AddCaseForm'
import Button from './Button'
import { useState } from 'react'

const AddCaseBlock = () => {
	const [isOpen, setOpen] = useState(false)
	return (
		<Block width='320px' mobilewidth='100%'>
			<Button width='280px' mobilewidth='280px' onClick={() => setOpen(!isOpen)}>Report a steal</Button>
			{isOpen && <AddCaseForm setOpen={setOpen}/>}
		</Block>
	)
}

export default AddCaseBlock