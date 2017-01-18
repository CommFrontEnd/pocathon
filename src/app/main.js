import Vue from 'vue';
import Router from 'vue-router';
import LoginView from './components/LoginView.vue';
import AccountsView from './components/AccountsView.vue';
import AccountDetailsView from './components/AccountDetailsView.vue';
import AccountStatisticsView from './components/AccountStatisticsView.vue';
import axios from 'axios';

// install router
Vue.use(Router)

// routing

const routes = [
{path: '/login', component: LoginView },
{path: '/accounts', component: AccountsView },
{path: '/accounts/:id', component: AccountDetailsView },
{path: '/accounts/:id/stats', component: AccountStatisticsView },
];
var router = new Router({routes: routes})

// Ajout du token aux requetes

axios.defaults.baseURL = 'https://siipocathon.apispark.net/v1/';
const AUTH_TOKEN = 'Basic NWIwNzYyYmUtNWU3Zi00OTIyLWI1ZDQtM2FiMTU2YjY3M2U1OjAxOThkYTBjLTZlZTgtNGQ3Ny1hMDMyLWNkMTE3ZGI1MDRjNg==';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

const app = new Vue({
  router
}).$mount('#app')