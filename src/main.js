import { DefaultApolloClient } from '@vue/apollo-composable';
import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/normalize.css';
import router from './router';
import store from './store';

const httpLink = createHttpLink({
  uri: 'https://gzhm34nn6g.execute-api.ap-northeast-2.amazonaws.com/api/graphql',
});
const cache = new InMemoryCache();
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

createApp(App)
  .provide(DefaultApolloClient, apolloClient)
  .use(store)
  .use(router)
  .mount('#app');
