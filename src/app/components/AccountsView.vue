<template>
    <div>
        <accounts :clickOnRow=redirectToDetailsAccount></accounts>
        <router-link class="btn btn-primary btn-md" :to="{ name: 'virement'}">Faire un virement</router-link>
    </div>
</template>

<script>
import Accounts from './Accounts.vue';
export default {
    name: 'accountsView',
    props: [],
    components: {
        Accounts
    },
    methods : {
        redirectToDetailsAccount: function(accountId) {
            this.$router.push('/accounts/' + accountId);
        },
    }
};
</script>