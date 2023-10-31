import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const fetchOfficers = createAsyncThunk(
	'officers/fetchOfficers',
	async function(_, {rejectWithValue}) {
		try {
			const response = await fetch('https://sf-final-project-be.herokuapp.com/api/officers/', {
				method: 'GET',
				headers: {
					'Content-type': 'application/json',
					"Authorization": `Bearer ${localStorage.getItem('token')}`,
				}
			})
			const data = await response.json()
			
			if (!response.ok) {
				return rejectWithValue(data)
			}
			return data

		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const addNewOfficer = createAsyncThunk(
	'officers/addNewOfficer',
	async function(values, {rejectWithValue, dispatch}) {
		try {
			const officer = {
				email: values.email,
				firstName: values.firstName,
				lastName: values.lastName,
				password: values.password,
				approved: false,
			}

			const response = await fetch('https://sf-final-project-be.herokuapp.com/api/officers', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
					"Authorization": `Bearer ${localStorage.getItem('token')}`,
				},
				body: JSON.stringify(officer)
			})
			
			const data = await response.json()

			if (!response.ok) {
				return rejectWithValue(data)
			}

			dispatch(addOfficer(data.data))

		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const deleteOfficer = createAsyncThunk(
	'officers/deleteOfficer',
	async function(_id, {rejectWithValue, dispatch}) {
		try {
			const response = await fetch(`https://sf-final-project-be.herokuapp.com/api/officers/${_id}`, {
				method: 'DELETE',
				headers: {
					'Content-type': 'application/json',
					"Authorization": `Bearer ${localStorage.getItem('token')}`,
				},
			})

			const data = await response.json()
			
			if (!response.ok) {
				return rejectWithValue(data)
			}

			dispatch(removeOfficer({_id}))

		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const toggleOfficer = createAsyncThunk(
	'officers/toggleOfficer',
	async function(values, {rejectWithValue, dispatch}) {
		try {
			const response = await fetch(`https://sf-final-project-be.herokuapp.com/api/officers/${values._id}`, {
				method: 'PUT',
				headers: {
					'Content-type': 'application/json',
					"Authorization": `Bearer ${localStorage.getItem('token')}`,
				},
				body: JSON.stringify({
					email: values.email,
					firstName: values.firstName,
					lastName: values.lastName,
					password: values.password,
					clientId: values.clientId,
					approved: values.approved,
				})
			})

			const data = await response.json()

			if (!response.ok) {
				return rejectWithValue(data)
			}

			dispatch(editOfficer(values))

		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

const officerSlice = createSlice({
	name: 'officers',
	initialState: {
		data: [],
		status: null,
		error: null,
	},
	reducers: {
		addOfficer(state, action) {
			state.data.push(action.payload)
		},
		editOfficer(state, action){
			const editedOfficer = state.data.find( officer => officer._id === action.payload._id )
			editedOfficer.email = action.payload.email;
			editedOfficer.firstName = action.payload.firstName;
			editedOfficer.lastName = action.payload.lastName;
			editedOfficer.password = action.payload.password;
			editedOfficer.clientId = action.payload.clientId;
			editedOfficer.approved = action.payload.approved;
		},

		removeOfficer(state, action) {
			state.data = state.data.filter(officer => officer._id !== action.payload._id)
		},
		clearOfficers(state) {
			state.data = [];
			state.status = 'logout'
		},
	},
	extraReducers: {
		[fetchOfficers.pending]: (state, action) => {
			state.status = 'loading';
			state.error = action.payload;
		},
		[fetchOfficers.fulfilled]: (state, action) => {
			state.status = 'OK'
			state.data = action.payload.officers;
		},
		[fetchOfficers.rejected]: (state, action) => {
			state.status = action.payload.status;
			state.errCode = action.payload.errCode;
			state.message = action.payload.message
		},
		[deleteOfficer.rejected]: (state, action) => {
			state.status = action.payload.status;
			state.errCode = action.payload.errCode;
			state.message = action.payload.message
		},
		[toggleOfficer.rejected]: (state, action) => {
			state.status = action.payload.status;
			state.errCode = action.payload.errCode;
			state.message = action.payload.message
		},
		[addNewOfficer.rejected]: (state, action) => {
			state.status = action.payload.status;
			state.errCode = action.payload.errCode;
			state.message = action.payload.message
		},
	},
})

export const {addOfficer, editOfficer, removeOfficer, clearOfficers} = officerSlice.actions;

export default officerSlice.reducer;