import {configureStore} from '@reduxjs/toolkit';
import caseReducer from './caseSlice'

export default configureStore({
	reducer: {
		cases: caseReducer,
	}
})