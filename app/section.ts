import { ApolloClient, createHttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { GET_PAGE } from './queries/getPage';

export const getPage = async (channel: string) => {
  const link = createHttpLink({
    uri: process.env.NEWSKIT_API_URL,
    headers: { 'X-API-KEY': process.env.X_API_KEY },
    fetch,
  });
  const apolloClient: ApolloClient<NormalizedCacheObject> = await new ApolloClient({
    ssrMode: true,
    name: 'ncu-newskit-render-remix',
    link: link,
    version: '0.1.0',

    cache: new InMemoryCache({ addTypename: true }).restore({}),
  });

  const { data } = await apolloClient.query({
    query: GET_PAGE,
    variables: { channel, publisher: 'DEMO' },
  });

  const { page } = data;
  return page;
};
