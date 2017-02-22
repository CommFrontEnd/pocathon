<template>
    <div>
        <accounts :clickOnRow=redirectToDetailsAccount></accounts>
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
            if(this.$router.push('/accounts/' + accountId)){

            }
            else {

            }
        },
    }
};
</script>