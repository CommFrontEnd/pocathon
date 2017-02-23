<template>
    <div class="c-list-item" v-bind:class="{'u-accountSelected': isSelected()}">
        <a class="c-list-item__title" v-on:click="clickOnRow(account.id)">
            <div>
                Compte courant
                <div class="c-field c-field--left c-list-item__subtitle">
                    <div class="c-field__label">N° de compte:</div>
                    <div class="c-field__value"><span >{{ account.accountNumber }}</span></div>
                </div>
            </div>
            <div class="c-list-item__actions fa fa-angle-right"></div>
        </a>
        <div class="c-list-item__content js-account-details" v-on:click="clickOnDetails">
            <div class="c-field">
                <div class="c-field__label"></div>
                <div class="c-field__value">{{ account.balance }} euros<span class="down fa fa-angle-down"></span></div>
            </div>
            <div class="c-list-item__detail" v-for="operation in operations">
                <accountOperation :operation=operation></accountOperation>
            </div>
        </div>
    </div>
</template>

<script>
    import AccountOperation from './AccountOperation.vue';
    import axios from 'axios';
    export default {
        name: 'account',
        props: ['account', 'clickOnRow', 'accountSelected'],
        components: {
            AccountOperation
        },
        data() {
            const data = {
                operations: [],
                isDetailsOpen: false
            }
            return data;
        },
        mounted:function(){
            this.fetchData();
        },
        methods: {
            fetchData: function(){


                var vm = this;
                if (this.account.operationsList) {
                    // On appelle la liste des opérations du compte
                    this.account.operationsList.forEach(function (operation) {
                        vm.fetchOperation('operations/'+operation)
                                .then(function(response) {
                                    vm.operations.push(response.data);
                                });
                    })
                }


            },
            fetchOperation: function(url) {
                return axios.get(url);
            },
            clickOnDetails: function () {
                this.isDetailsOpen = !this.isDetailsOpen;
            },
            isSelected: function () {
                return this.account.id === this.accountSelected ? true : false;
            }
        }
    };
</script>