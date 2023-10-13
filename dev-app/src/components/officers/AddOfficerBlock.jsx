import React from 'react'
import Block from '../Block'
import Button from '../Button'
import { useState } from 'react'
import Flex from '../Flex'
import AddOfficerForm from './AddOfficerForm'

const AddOfficerBlock = () => {
	const [isOpen, setOpen] = useState(false)
	return (
		<Block width='320px' mobilewidth='100%'>
			<Flex direction='column'>
				<Button width='280px' mobilewidth='280px' onClick={() => setOpen(!isOpen)}>Create Officer</Button>
				{isOpen && <AddOfficerForm setOpen={setOpen}/>}
			</Flex>
		</Block>
	)
}

export default AddOfficerBlock