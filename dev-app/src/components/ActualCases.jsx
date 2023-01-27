import React from 'react'
import styled from 'styled-components'
import Block from './Block'

const StyledGrid = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px,1fr));
	grid-template-rows: auto;
	grid-gap: 1vw;
`

const ActualCases = () => {
	return (
		<StyledGrid>
			<Block>
				Lorem ipsum, dolor sit amet 
			</Block>
			<Block>
				Lorem ipsum, dolor sit amet 
			</Block>
			<Block>
				Lorem ipsum, dolor sit amet 
			</Block>
			<Block>
				Lorem ipsum, dolor sit amet 
			</Block>
		</StyledGrid>
	)
}

export default ActualCases