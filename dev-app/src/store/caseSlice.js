import {createSlice} from '@reduxjs/toolkit'
import uniqid from 'uniqid';

const caseSlice = createSlice({
	name: 'cases',
	initialState: {
		cases: [],
	},
	reducers: {
		addCase(state, action) {
			state.cases.push({
				id: uniqid(),
				status: action.payload.status,
				licenseNumber: action.payload.licenseNumber,
				type: action.payload.type,
				ownerFullName: action.payload.ownerFullName,
				clientId: action.payload.clientId,
				createdAt: new Date().toISOString(),
				updatedAt: new Date().toISOString(),
				color: action.payload.color,
				date: action.payload.date,
				officer: action.payload.officer,
				description: action.payload.description,
				resolution: action.payload.resolution,
			})
		},
		removeCase(state, action) {
			state.cases = state.cases.filter(singleCase => singleCase.id !== action.payload.id)
		},
	}
})

export const {addCase, removeCase} = caseSlice.actions;

export default caseSlice.reducer;