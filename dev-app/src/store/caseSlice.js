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
				// updatedAt: new Date().toISOString(),
				color: action.payload.color,
				date: action.payload.date,
				officer: action.payload.officer,
				description: action.payload.description,
				resolution: action.payload.resolution,
			})
		},
		editCase(state, action){
			// state.cases.map((singleCase) => (
			// 	singleCase.id === action.payload.id
			// 	? {...singleCase,
			// 		status: action.payload.status,
			// 		licenseNumber: action.payload.licenseNumber,
			// 	}
			// 	: singleCase
			// ));
			const editedCase = state.cases.find( singleCase => singleCase.id === action.payload.id )
			editedCase.status = action.payload.status;
			editedCase.licenseNumber = action.payload.licenseNumber;
			editedCase.type = action.payload.type;
			editedCase.ownerFullName = action.payload.ownerFullName;
			// editedCase.clientId = action.payload.clientId;
			// editedCase.createdAt = new Date().toISOString();
			editedCase.updatedAt = new Date().toISOString();
			editedCase.color = action.payload.color;
			editedCase.date = action.payload.date;
			editedCase.officer = action.payload.officer;
			editedCase.description = action.payload.description;
			editedCase.resolution = action.payload.resolution;
		},

		removeCase(state, action) {
			state.cases = state.cases.filter(singleCase => singleCase.id !== action.payload.id)
		},
	}
})

export const {addCase, removeCase, editCase} = caseSlice.actions;

export default caseSlice.reducer;