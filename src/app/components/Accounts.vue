<template>
    <div class="o-panel-content">
        <div class="c-list-item" >
            <div v-for="account in accounts">
                <a class="c-list-item__title" v-on:click="redirectToDetailsAccount(account.id)">
                    <div>
                        <div class="c-field c-field--left c-list-item__subtitle">
                            <div class="c-field__label">N° de compte:</div>
                            <div class="c-field__value"><span >{{ account.accountNumber }}</span></div>
                        </div>
                    </div>
                    <div class="c-list-item__actions fa fa-angle-right"></div>
                </a>
                <div class="c-list-item__content js-account-details">
                    <div class="c-field">
                        <div class="c-field__label"></div>
                        <div class="c-field__value">{{ account.balance }} <span class="down fa fa-angle-down"></span></div>
                    </div>
                    <div class="c-list-item__detail">
                        <div class="c-field" v-for="operation in account.lastOperations">
                            <div class="c-field__label">{{ operation.label }}</div>
                            <div class="c-field__value is-valid">{{ operation.amount }} €</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'accounts',
        props: [],
        components: {

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

                this.fetchClient('accounts')
                        .then(function(response) {
                            vm.detailUrl = response.data
                            console.log('fetchclient',response.data);
                            vm.accounts = response.data;
                        });
            },
            fetchClient: function(url) {
                return axios.get(url);
            },
            redirectToDetailsAccount: function(obj) {
                var test = '/accounts/' + obj;
                if(this.$router.push('/accounts/' + this.accounts.accountNum)){

                }
                else {

                }
            },
            fetchAccount: function(url) {
                return axios.get(url);
            },
            fetchOperations: function(url) {
                return axios.get(url)
            },
            processOperations: function(data) {
                for (var i=0; i < 3; ++i) {
                    operation = respOperations.data[i];
                    operationObj = {
                        label: operation.type + '-' + operation.label,
                        amount: operation.montant
                    }
                }
            }
        }
    };
</script>