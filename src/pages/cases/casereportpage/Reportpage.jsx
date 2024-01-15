import React from 'react'
import styled from 'styled-components'
import Block from '../../../components/Block'
import AddCaseForm from './AddCaseForm'

const StyledWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

const Reportpage = () => {
	return (
		<StyledWrapper>
			<Block width='320px' mobilewidth='100%'>
				<AddCaseForm />
			</Block>
		</StyledWrapper>
	)
}

export default Reportpage