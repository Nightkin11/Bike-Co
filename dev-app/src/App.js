import React from "react";
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Servicepage from './pages/Servicepage';
import Blogpage from './pages/Blogpage'
import Aboutpage from './pages/Aboutpage';
import Contactpage from './pages/Contactpage'
import Notfoundpage from './pages/Notfoundpage'
import Layout from './components/Layout';
import styled from 'styled-components';
import Registrationpage from "./pages/Registrationpage";
import Loginpage from "./pages/Loginpage";


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
				<Route path='service' element={<Servicepage />} />
				<Route path='blog' element={<Blogpage />} />
				<Route path='about' element={<Aboutpage />} />
				<Route path='contact' element={<Contactpage />} />
				<Route path='signup' element={<Registrationpage />} />
				<Route path='signin' element={<Loginpage />} />
				<Route path='*' element={<Notfoundpage />} />
			</Route>
		</Routes>
	</AppWrapper>
  );
}

export default App;
