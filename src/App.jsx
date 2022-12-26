// Libraries
import { ApolloProvider } from '@apollo/client';
import { MathJaxContext } from 'better-react-mathjax';
import { CssBaseline, ThemeProvider } from '@mui/material';
// src
import { client } from '@/apollo';
import { theme } from '@/styles';
import { config } from '@/mathJax';
import { Routes } from '@/routes';

const App = () => (
	<MathJaxContext config={config}>
		<ThemeProvider theme={theme}>
			<CssBaseline />

			<ApolloProvider client={client}>
				<Routes />
			</ApolloProvider>
		</ThemeProvider>
	</MathJaxContext>
);

export default App;
