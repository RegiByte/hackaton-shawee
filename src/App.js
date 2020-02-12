import React from 'react';
import Routes from './components/containers/Routes';
import { ThemeProvider } from 'styled-components';
import theme from './config/theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Routes />
		</ThemeProvider>
	);
}

export default App;
