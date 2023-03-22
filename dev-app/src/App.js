import React from "react";
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Officerpage from './pages/Officerpage'
import Aboutpage from './pages/Aboutpage';
import Contactpage from './pages/Contactpage'
import Notfoundpage from './pages/Notfoundpage'
import Layout from './components/Layout';
import styled from 'styled-components';
import Registrationpage from "./pages/Registrationpage";
import Loginpage from "./pages/Loginpage";
import Casedetailpage from "./pages/Casedetailpage";


const AppWrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;
min-height: 100vh;
`

const App = () => {
  return (
	<AppWrapper>
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Homepage />} />
				<Route path='officers' element={<Officerpage />} />
				<Route path='about' element={<Aboutpage />} />
				<Route path='contact' element={<Contactpage />} />
				<Route path='signup' element={<Registrationpage />} />
				<Route path='signin' element={<Loginpage />} />
				<Route path='*' element={<Notfoundpage />} />
				<Route path='cases/:id' element={<Casedetailpage />} />
			</Route>
		</Routes>
	</AppWrapper>
  );
}

export default App;
