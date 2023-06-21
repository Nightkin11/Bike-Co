import {configureStore} from '@reduxjs/toolkit';
import caseReducer from './caseSlice'
import officerReducer from './officerSlice';

export default configureStore({
	reducer: {
		cases: caseReducer,
		officers: officerReducer,
	}
})