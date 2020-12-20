import { DefaultApolloClient } from '@vue/apollo-composable';
import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/normalize.css';
import { apolloClient } from './config';
import router from './router';
import store from './store';

createApp(App).provide(DefaultApolloClient, apolloClient).use(store).use(router).mount('#app');
