<template>  
    <div class="c-list-item" > 
        <div v-for="account in accounts">
            <a class="c-list-item__title" href="/accountDetail.html" 
                <div class="c-field__label">N° de compte:</div>
                <!-- //'<div class="c-field__value" v-text="account.accountNum
                " />' + -->
                <div class="c-field__value"><a bind-router-link to="accounts/account.accountNum">{{ account.accountNum }}</a router-link></div>
                <div class="c-list-item__actions fa fa-angle-right"></div>
            </a>
            <div class="c-list-item__content js-account-details">
                <div class="c-field">
                    <div class="c-field__label"></div>
                    <div class="c-field__value">{{ account.accountSolde }} <span class="down fa fa-angle-down"></span></div>
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
</template>

<script>
import Bandeau from './Bandeau.vue';
import axios from 'axios';
export default {
  name: 'accounts',
  props: [],
  components: {
     Bandeau
  },
  data() {
    const data = {
        accounts: [ 
            {
            accountNum: 424242,
            accountSolde: 15042,
            lastOperations: [
                {
                    label: 'Salaire',
                    amount: '4242'
                }, {
                label: 'Stock options',
                amount: 12342
                }, {
                    label: 'Achat Lamborghini',
                    amount: -424242.42
                }
            ]
        }
        ]
    }
    return data;
  },
  mounted:function(){
      this.fetchData();
  },
  methods: {
      fetchData: function(){
        console.log("call");

        console.log(this.accounts);
        
        var vm = this;

        this.fetchClient('clients/4464a430-c692-11e6-bbcc-0bdb025a7cfa')
            .then(function(response) {
                vm.detailUrl = response.data
                console.log(response.data);
                console.log(response.status);
                console.log(response.statusText);
                console.log(response.headers);
                console.log(response.config);
                vm.processClient(response.data, vm);
            });
      },

      fetchClient: function(url) {
          return axios.get(url);
      },

      processClient: function(data, thiz) {
            console.log(thiz.accounts);
            thiz.accounts = [];
            data.accountsList.forEach(function(accountId) {
                thiz.fetchAccount('accounts/' + accountId)
                    .then(function(response) {
                        console.log("processaccount :");
                        console.log(thiz.processAccount(response.data, thiz));
                        thiz.accounts.push(thiz.processAccount(response.data, thiz));
                    });
            }
            );
            console.log(thiz.accounts);
        },

      fetchAccount: function(url) {
          return axios.get(url);
      },
      
      processAccount: function(data, thiz) {
            var accountObj = {};
            
            accountObj.accountNum = data.accountNumber;
            accountObj.accountSolde = data.balance;

            return accountObj;
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