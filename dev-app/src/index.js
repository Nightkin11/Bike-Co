import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const Global = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: Roboto;
	font-size: 18px;
}
`

const theme = {
	colors: {
		primary: 'black',
		secondary: 'white',
	}
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	<ThemeProvider theme={theme}>
		<BrowserRouter>
			<Global />
			<App />
		</BrowserRouter>
	</ThemeProvider>
  </React.StrictMode>
);