import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { clearCases, fetchCases } from './caseSlice'
import { clearOfficers, fetchOfficers } from './officerSlice'


export const fetchAuth = createAsyncThunk(
	'cases/fetchAuth',
	async function(_, {rejectWithValue}) {
		try {
			const response = await fetch('https://sf-final-project-be.herokuapp.com/api/auth/', {
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
			return data;

		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const signUp = createAsyncThunk(
	'users/signUp',
	async function(values, {rejectWithValue, dispatch}) {
		try {
			const user = {
				email: values.email,
				password: values.password,
				firstName: values.firstName,
				lastName: values.lastName,
				clientId: values.clientId,
			}

			const response = await fetch('https://sf-final-project-be.herokuapp.com/api/auth/sign_up', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(user)
			})
			console.log(user)

			const data = await response.json()

			if (!response.ok) {
				return rejectWithValue(data)
			}
			dispatch(signUpUser(data))
			
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const signIn = createAsyncThunk(
	'users/signIn',
	async function(values, {rejectWithValue, dispatch}) {
		try {
			const user = {
				email: values.email,
				password: values.password,
			}

			const response = await fetch('https://sf-final-project-be.herokuapp.com/api/auth/sign_in', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(user)
			})

			const data = await response.json()

			if (!response.ok) {
				return rejectWithValue(data)
			}
			
			localStorage.setItem('token', data.data.token)

			dispatch(fetchAuth())
			dispatch(fetchCases())
			dispatch(fetchOfficers())
			dispatch(signInUser(data))

		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const logout = createAsyncThunk(
	'users/logout',
	async function(_, {rejectWithValue, getState, dispatch}) {
		try {
			localStorage.removeItem('token');
			dispatch(clearOfficers())
			dispatch(logoutUser())
			dispatch(clearCases())
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

const userSlice = createSlice({
	name: 'users',
	initialState: {
		data: {
			token: null,
			user: {
				firstName: null,
			}
		}
	},
	reducers: {
		logoutUser(state) {
			state.data.token = null;
			state.data.user.firstName = null;
			state.status = 'logout'
		},
		signInUser(state, action) {
			state.data.user = action.payload.data.user;
			state.data.token = action.payload.data.token;
			state.status = action.payload.status + ' login';
		},
		signUpUser(state, action) {
			state.status = action.payload.status + ' registered';
		},
	},
	extraReducers: {
		[fetchAuth.pending]: (state) => {
			state.status = 'loading';
			state.errCode = null;
			state.message = null;
		},
		[fetchAuth.fulfilled]: (state, action) => {
			state.data = action.payload.data
			state.status = action.payload.status
			state.errCode = null;
			state.message = null;
		},
		[fetchAuth.rejected]: (state, action) => {
			state.status = action.payload.status;
			state.errCode = action.payload.errCode;
			state.message = action.payload.message
		},
		[signUp.pending]: (state) => {
			state.status = 'loading';
			state.errCode = null;
			state.message = null;
		},
		[signUp.fulfilled]: (state) => {
			state.errCode = null;
			state.message = null;
		},
		[signUp.rejected]: (state, action) => {
			state.status = action.payload.status;
			state.errCode = action.payload.errCode;
			state.message = action.payload.message
		},
		[signIn.pending]: (state) => {
			state.status = 'loading';
			state.errCode = null;
			state.message = null;
		},
		[signIn.fulfilled]: (state, action) => {
			state.errCode = null;
			state.message = null;
		},
		[signIn.rejected]: (state, action) => {
			state.status = action.payload.status;
			state.errCode = action.payload.errCode;
			state.message = action.payload.message
		},
	},
})

export const {logoutUser, signInUser, signUpUser} = userSlice.actions;

export default userSlice.reducer;