import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import { HttpLink } from '@apollo/client';

const logoutLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors)
		graphQLErrors.map(({ message, locations, path }) => {
			console.log(
				`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
			);
		});

	if (networkError) console.log(`[Network error]: ${networkError}`);
});

const authLink = setContext((_, { headers }) => headers);

const httpLink = new HttpLink({ uri: import.meta.env.VITE_URL_BACK });

export const link = logoutLink.concat(authLink.concat(httpLink));
