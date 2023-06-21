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
			const editedOfficer = state.officers.find( officer => officer.id === action.payload.id )
			editedOfficer.email = action.payload.email;
			editedOfficer.firstName = action.payload.firstName;
			editedOfficer.lastName = action.payload.lastName;
			editedOfficer.password = action.payload.password;
			editedOfficer.clientId = action.payload.clientId;
			editedOfficer.approved = action.payload.approved;
		},

		removeOfficer(state, action) {
			state.officers = state.officers.filter(officer => officer.id !== action.payload.id)
		},
	}
})

export const {addOfficer, editOfficer, removeOfficer} = officerSlice.actions;

export default officerSlice.reducer;