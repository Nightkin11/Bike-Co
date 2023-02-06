import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import store, { persistor } from './store';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import {PersistGate} from 'redux-persist/integration/react'

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
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ThemeProvider theme={theme}>
					<BrowserRouter>
						<Global />
						<App />
					</BrowserRouter>
				</ThemeProvider>
			</PersistGate>
		</Provider>
  </React.StrictMode>
);