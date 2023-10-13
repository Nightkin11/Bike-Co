import {configureStore} from '@reduxjs/toolkit';
import caseReducer from './caseSlice'
import officerReducer from './officerSlice';
import userReducer from './userSlice';


//ClientID c77c6184-c783-4c20-acbc-563bf7384d1f
export default configureStore({
	reducer: {
		users: userReducer,
		cases: caseReducer,
		officers: officerReducer,
	}
})