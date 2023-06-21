import {createSlice} from '@reduxjs/toolkit'
import uniqid from 'uniqid';

const officerSlice = createSlice({
	name: 'officers',
	initialState: {
		officers: [],
	},
	reducers: {
		addOfficer(state, action) {
			state.officers.push({
				id: uniqid(),
				email: action.payload.email,
				firstName: action.payload.firstName,
				lastName: action.payload.lastName,
				password: action.payload.password,
				clientId: action.payload.clientId,
				approved: false,
			})
		},
		editOfficer(state, action){
			// const editedCase = state.cases.find( singleCase => singleCase.id === action.payload.id )
			// editedCase.status = action.payload.status;
			// editedCase.licenseNumber = action.payload.licenseNumber;
			// editedCase.type = action.payload.type;
			// editedCase.ownerFullName = action.payload.ownerFullName;
			// editedCase.updatedAt = new Date().toISOString();
			// editedCase.color = action.payload.color;
			// editedCase.date = action.payload.date;
			// editedCase.officer = action.payload.officer;
			// editedCase.description = action.payload.description;
			// editedCase.resolution = action.payload.resolution;
		},

		removeOfficer(state, action) {
			state.officers = state.officers.filter(officer => officer.id !== action.payload.id)
		},
	}
})

export const {addOfficer, editOfficer, removeOfficer} = officerSlice.actions;

export default officerSlice.reducer;