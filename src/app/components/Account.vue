<template>
    <div>
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
        <div class="c-list-item__content js-account-details" v-bind:class="{'is-selected': isDetailsOpen}" v-on:click="clickOnDetails">
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
        props: ['account', 'clickOnRow'],
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
                // On appelle la liste des opérations du compte
                this.account.operationsList.forEach(function (operation) {
                    console.log('operation', operation);
                    vm.fetchOperation('operations/'+operation)
                            .then(function(response) {
                                vm.operations.push(response.data);
                            });
                })

            },
            fetchOperation: function(url) {
                return axios.get(url);
            },
            clickOnDetails: function () {
                console.log('test', this.isDetailsOpen );
                this.isDetailsOpen = !this.isDetailsOpen;
            }
        }
    };
</script>