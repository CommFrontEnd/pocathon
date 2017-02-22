<template>
    <div class="o-panel-content">
        <div class="c-list-item" v-for="account in accounts">
            <account :account=account :clickOnRow=clickOnRow></account>
        </div>
    </div>
</template>

<script>
    import Account from './Account.vue';
    import axios from 'axios';
    export default {
        name: 'accounts',
        props: ['clickOnRow'],
        components: {
            Account
        },
        data() {
            const data = {
                accounts: null
            }
            return data;
        },
        mounted:function(){
            this.fetchData();
        },
        methods: {
            fetchData: function(){


                var vm = this;

                this.fetchAccounts('accounts')
                        .then(function(response) {
                            vm.detailUrl = response.data;
                            vm.accounts = response.data;
                        });
            },
            fetchAccounts: function(url) {
                return axios.get(url);
            },
        }
    };
</script>