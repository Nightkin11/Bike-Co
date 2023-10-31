import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const fetchCases = createAsyncThunk(
	'cases/fetchCases',
	async function(_, {rejectWithValue}) {
		// const token = getState().users.data.token
		try {
			const response = await fetch('https://sf-final-project-be.herokuapp.com/api/cases/', {
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

export const deleteCase = createAsyncThunk(
	'cases/deleteCase',
	async function(_id, {rejectWithValue, dispatch}) {
		try {
			const response = await fetch(`https://sf-final-project-be.herokuapp.com/api/cases/${_id}`, {
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

			dispatch(removeCase({_id}))
			
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const toggleCase = createAsyncThunk(
	'cases/toggleCase',
	async function(values, {rejectWithValue, dispatch}) {
		try {
			const response = await fetch(`https://sf-final-project-be.herokuapp.com/api/cases/${values._id}`, {
				method: 'PUT',
				headers: {
					'Content-type': 'application/json',
					"Authorization": `Bearer ${localStorage.getItem('token')}`,
				},
				body: JSON.stringify({
					status: values.status,
					licenseNumber: values.licenseNumber,
					type: values.type,
					ownerFullName: values.ownerFullName,
					updatedAt: new Date().toISOString(),
					color: values.color,
					date: values.date,
					officer: values.officer,
					description: values.description,
					resolution: values.resolution,
				})
			}) 

			const data = await response.json()

			if (!response.ok) {
				return rejectWithValue(data)
			}

			dispatch(editCase(values))

		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const addNewCase = createAsyncThunk(
	'cases/addNewCase',
	async function(values, {rejectWithValue, dispatch}) {
		try {
			const singleCase = {
				status: values.status,
				licenseNumber: values.licenseNumber,
				type: values.type,
				ownerFullName: values.ownerFullName,
				createdAt: new Date().toISOString(),
				color: values.color,
				date: values.date,
				officer: values.officer,
				description: values.description,
				resolution: values.resolution,
			}

			const response = await fetch('https://sf-final-project-be.herokuapp.com/api/cases/', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
					"Authorization": `Bearer ${localStorage.getItem('token')}`,
				},
				body: JSON.stringify(singleCase)
			})
			
			const data = await response.json()

			if (!response.ok) {
				return rejectWithValue(data)
			}

			dispatch(addCase(data.data))

		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const addNewCasePublic = createAsyncThunk(
	'cases/addNewCasePublic',
	async function(values, {rejectWithValue, dispatch}) {
		try {
			const singleCase = {
				status: values.status,
				licenseNumber: values.licenseNumber,
				type: values.type,
				ownerFullName: values.ownerFullName,
				createdAt: new Date().toISOString(),
				color: values.color,
				date: values.date,
				description: values.description,
				resolution: values.resolution,
				clientId: 'c77c6184-c783-4c20-acbc-563bf7384d1f',
			}

			const response = await fetch('https://sf-final-project-be.herokuapp.com/api/public/report', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(singleCase)
			})
			
			const data = await response.json()

			if (!response.ok) {
				return rejectWithValue(data)
			}

			dispatch(addCase(data.data))

		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)


const caseSlice = createSlice({
	name: 'cases',
	initialState: {
		data: [],
		status: null,
		error: null,
	},
	reducers: {
		addCase(state, action) {
			state.data.push(action.payload)
		},
		editCase(state, action){
			const editedCase = state.data.find( editedCase => editedCase._id === action.payload._id )
			editedCase.status = action.payload.status;
			editedCase.licenseNumber = action.payload.licenseNumber;
			editedCase.type = action.payload.type;
			editedCase.ownerFullName = action.payload.ownerFullName;
			editedCase.updatedAt = new Date().toISOString();
			editedCase.color = action.payload.color;
			editedCase.date = action.payload.date;
			editedCase.officer = action.payload.officer;
			editedCase.description = action.payload.description;
			editedCase.resolution = action.payload.resolution;
		},
		removeCase(state, action) {
			state.data = state.data.filter(singleCase => singleCase._id !== action.payload._id)
		},
		clearCases(state) {
			state.data = [];
			state.status = 'logout'
		},
	},
	extraReducers: {
		[fetchCases.pending]: (state, action) => {
			state.status = 'loading';
			state.error = action.payload;
		},
		[fetchCases.fulfilled]: (state, action) => {
			state.status = action.payload.status;
			state.data = action.payload.data;
		},
		[fetchCases.rejected]: (state, action) => {
			state.status = action.payload.status;
			state.errCode = action.payload.errCode;
			state.message = action.payload.message
		},
		[deleteCase.rejected]: (state, action) => {
			state.status = action.payload.status;
			state.errCode = action.payload.errCode;
			state.message = action.payload.message
		},
		[toggleCase.rejected]: (state, action) => {
			state.status = action.payload.status;
			state.errCode = action.payload.errCode;
			state.message = action.payload.message
		},
		[addNewCase.rejected]: (state, action) => {
			state.status = action.payload.status;
			state.errCode = action.payload.errCode;
			state.message = action.payload.message
		},
	},
})

export const {addCase, removeCase, editCase, clearCases} = caseSlice.actions;

export default caseSlice.reducer;