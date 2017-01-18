<template>
    <div class="c-list-item">
        <a class="c-list-item__title" href="/accountDetail.html" v-for="account in accounts">
            <div class="c-field__label">N° de compte:</div>
            <!-- //'<div class="c-field__value" v-text="account.accountNum
            " />' + -->
            <div class="c-field__value">{{ account.accountNum }}</div>
            <div class="c-list-item__actions fa fa-angle-right"></div>
        </a>
        <div class="c-list-item__content js-account-details">
            <div class="c-field">
                <div class="c-field__label"></div>
                <div class="c-field__value">{{ account.accountSolde }}} <span class="down fa fa-angle-down"></span></div>
            </div>
            <div class="c-list-item__detail">
                <div class="c-field" v-for="operation in account.lastOperations">
                    <div class="c-field__label">{{ operation.label }}</div>
                    <div class="c-field__value is-valid">{{ operation.amount }} €</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bandeau from './Bandeau.vue';
import axios from 'axios';
export default {
  name: 'accountsView',
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
        axios.get('agencies/')
        .then(function(response) {
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
        });
      }
  }
};
</script>