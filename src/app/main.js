import Vue from 'vue';
import Router from 'vue-router';
import LoginView from './components/LoginView.vue';
import AccountsView from './components/AccountsView.vue';
import AccountDetailsView from './components/AccountDetailsView.vue';
import AccountStatisticsView from './components/AccountStatisticsView.vue';


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

const app = new Vue({
  router
}).$mount('#app')