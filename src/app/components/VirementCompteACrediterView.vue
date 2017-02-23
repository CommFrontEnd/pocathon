<template>
    <div>
        <div className="o-panel-content">
            <h2>Compte à débiter</h2>
            <account :account=accountADebiter :clickOnRow=null  :accountSelected=idAccountADebiter ></account>
        </div>
        <div class="o-panel-content">
            <h2>Choisir un compte à créditer</h2>
            <accounts :clickOnRow=selectCompteACrediter :accountSelected=idAccountACrediter :accountNotInList=idAccountADebiter></accounts>
        </div>
        <div>
            <h2>Montant à créditer</h2>
            <input type="text" v-model="montantACrediter" v-on:change=isDisabled />
            <label>Libellé du virement</label>
            <input type="text" v-model="libelleMontant" />
        </div>
        <button class="btn btn-primary btn-md" v-bind:disabled=isDisabled() v-on:click=redirectionAccounts >Faire le virement</button>
    </div>
</template>

<script>
    import Accounts from './Accounts.vue';
    import Account from './Account.vue';
    import axios from 'axios';
    export default {
        name: 'virementCompteACrediterView',
        props: [],
        components: {
            Accounts, Account
        },
        data() {
            const data = {
                accountADebiter: '',
                idAccountADebiter: this.$router.currentRoute.params.idAccountADebiter,
                idAccountACrediter: '',
                montantACrediter: '',
                libelleMontant: ''
            };
            return data;
        },
        mounted:function(){
            this.fetchData();
        },
        methods: {
            fetchData : function() {
                console.log('fetechdata','test');
                var vm = this;
                axios.get('accounts/'+ this.$router.currentRoute.params.idAccountADebiter)
                        .then(function(response) {
                            vm.accountADebiter = response.data;
                });

            },
            selectCompteACrediter(idAccountACrediter) {
                this.idAccountACrediter = idAccountACrediter;
            },
            isDisabled() {
                return !(this.idAccountACrediter && this.montantACrediter.length > 0);
            },
            redirectionAccounts() {
                this.$router.push({name :'accounts'});
            }
        }
    };
</script>