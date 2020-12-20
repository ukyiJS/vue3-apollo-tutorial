import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';

const httpLink = createHttpLink({ uri: 'https://gzhm34nn6g.execute-api.ap-northeast-2.amazonaws.com/api/graphql' });
const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({ link: httpLink, cache });
