import React from 'react';
import Routes from './components/containers/Routes';
import { ThemeProvider } from 'styled-components';
import theme from './config/theme';
import {makeTheme} from "./helpers";

function App() {
	return (
		<ThemeProvider theme={makeTheme(theme)}>
			<Routes/>
		</ThemeProvider>
	);
}

export default App;
