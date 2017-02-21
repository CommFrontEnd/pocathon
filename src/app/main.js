import Vue from 'vue';
import Router from 'vue-router';
import AppView from './components/AppView.vue';
import LoginView from './components/LoginView.vue';
import AccountsView from './components/AccountsView.vue';
import AccountDetailsView from './components/AccountDetailsView.vue';
import AccountStatisticsView from './components/AccountStatisticsView.vue';
import axios from 'axios';
var VueI18n = require('vue-i18n')
// install router
Vue.use(Router)


Vue.use(VueI18n)
Vue.config.lang = 'fr'


Vue.locale('fr', {
    "login":{
        "welcome": "Bienvenue, pour continuer merci  de vous identifier",
        "login": "Connexion"
    },
    "header": {
      "disconnect": "Deconnexion"
    }
});
Vue.locale('en', {
    "login":{
        "welcome": "Hello, please authenticate ",
        "login": "Login"
    },
    "header": {
      "disconnect": "Logout"
    }
});
// routing

const routes = [

{path: '/login', name: 'login', component: LoginView },
{path: '/', component: AppView, beforeEnter: (to, from, next) => {
        // On vérifie que le user est bien connecté, si oui on passe à la page suivante, sinon sur le formulaire de login
        sessionStorage.getItem('user') ? next(): router.push('login');
    },
    children: [
        {path: 'accounts', component: AccountsView},
        {path: 'accounts/:id', component: AccountDetailsView }
    ]
},
{path: '*', redirect: '/login' }
];
var router = new Router({routes: routes})

// Ajout du token aux requetes

axios.defaults.baseURL = 'https://siipocathon.apispark.net/v1/';
const AUTH_TOKEN = 'Basic NWIwNzYyYmUtNWU3Zi00OTIyLWI1ZDQtM2FiMTU2YjY3M2U1OjAxOThkYTBjLTZlZTgtNGQ3Ny1hMDMyLWNkMTE3ZGI1MDRjNg==';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

const app = new Vue({
  router
}).$mount('#app')