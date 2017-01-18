// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter and then call Vue.use(VueRouter).

// 1. Define route components.
// These can be imported from other files
const Accounts = { template: '<div>bar</div>' }
const AccountDetails = { template: '<div>Details du compte {{ $route.params.id }}</div>' }
const AccountStatistics = { template: '<div>Statistics du compte {{ $route.params.id }}</div>' }


// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
const routes = [
    { path: '/login', component:login},
    { path: '/accounts/', component: Accounts },
    { path: '/accounts/:id', component: AccountDetails },
    { path: '/accounts/:id/stats', component: AccountStatistics }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for routes: routes
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router
}).$mount('#app')

// Now the app has started!