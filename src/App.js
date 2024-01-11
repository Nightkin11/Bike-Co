import React, { useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/home/Homepage';
import Officerspage from './components/officers/officerspage/Officerspage'
import Reportpage from './components/cases/casereportpage/Reportpage';
import Contactpage from './components/contacts/Contactpage'
import Notfoundpage from './components/Notfoundpage'
import Layout from './components/Layout';
import styled from 'styled-components';
import Registrationpage from "./components/users/registrationpage/Registrationpage";
import Loginpage from "./components/users/loginpage/Loginpage";
import Casedetailpage from "./components/cases/casedetailpage/Casedetailpage";
import Casespage from './components/cases/casespage/Casespage'
import Officerdetailpage from "./components/officers/officerdetailpage/Officerdetailpage"
import { useDispatch } from "react-redux";
import { fetchCases } from "./store/caseSlice";
import { fetchAuth } from "./store/userSlice";
import { fetchOfficers } from "./store/officerSlice";
import Profilepage from "./components/users/profilepage/Profilepage";


const AppWrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;
min-height: 100vh;
`

const App = () => {
	const token = localStorage.getItem('token')
	const dispatch = useDispatch()
	useEffect(() => {
		if (token) {
			dispatch(fetchAuth());
			dispatch(fetchCases());
			dispatch(fetchOfficers())
		}
	}, [dispatch])

	return (
		<AppWrapper>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Homepage />} />
					<Route path='cases' element={<Casespage />} />
					<Route path='cases/:id' element={<Casedetailpage />} />
					<Route path='officers' element={<Officerspage />} />
					<Route path='officers/:id' element={<Officerdetailpage />} />
					<Route path='report' element={<Reportpage />} />
					<Route path='contact' element={<Contactpage />} />
					<Route path='signup' element={<Registrationpage />} />
					<Route path='signin' element={<Loginpage />} />
					<Route path='profile' element={<Profilepage />} />
					<Route path='*' element={<Notfoundpage />} />
				</Route>
			</Routes>
		</AppWrapper>
	);
}

export default App;
