import React, { useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Officerspage from './pages/Officerspage'
import Aboutpage from './pages/Aboutpage';
import Contactpage from './pages/Contactpage'
import Notfoundpage from './pages/Notfoundpage'
import Layout from './components/Layout';
import styled from 'styled-components';
import Registrationpage from "./pages/Registrationpage";
import Loginpage from "./pages/Loginpage";
import Casedetailpage from "./pages/Casedetailpage";
import Casespage from './pages/Casespage'
import Officerdetailpage from "./pages/Officerdetailpage"
import { useDispatch } from "react-redux";
import { fetchCases } from "./store/caseSlice";
import { fetchAuth } from "./store/userSlice";
import { fetchOfficers } from "./store/officerSlice";
import Profilepage from "./pages/Profilepage";


const AppWrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;
min-height: 100vh;
`

const App = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchAuth());
		dispatch(fetchCases());
		dispatch(fetchOfficers())
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
					<Route path='about' element={<Aboutpage />} />
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
