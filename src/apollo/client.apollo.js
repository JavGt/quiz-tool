import { ApolloClient, InMemoryCache } from '@apollo/client';
import { link } from './link.apollo';

export const client = new ApolloClient({
	link,
	cache: new InMemoryCache({ addTypename: false }),
});
