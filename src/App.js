import React, { useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/home/Homepage';
import Officerspage from './pages/officers/officerspage/Officerspage'
import Reportpage from './pages/cases/casereportpage/Reportpage';
import Contactpage from './pages/contacts/Contactpage'
import Notfoundpage from './pages/Notfoundpage'
import Layout from './components/Layout';
import styled from 'styled-components';
import Registrationpage from "./pages/users/registrationpage/Registrationpage";
import Loginpage from "./pages/users/loginpage/Loginpage";
import Casedetailpage from "./pages/cases/casedetailpage/Casedetailpage";
import Casespage from './pages/cases/casespage/Casespage'
import Officerdetailpage from "./pages/officers/officerdetailpage/Officerdetailpage"
import { useDispatch } from "react-redux";
import { fetchCases } from "./store/caseSlice";
import { fetchAuth } from "./store/userSlice";
import { fetchOfficers } from "./store/officerSlice";
import Profilepage from "./pages/users/profilepage/Profilepage";


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
