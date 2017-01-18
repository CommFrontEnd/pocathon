<<<<<<< HEAD
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
export default {
    name: 'accountsView',
    props: [],


data() {
    return {
    accounts: [ 
      {
      accountNum: 424242,
      accountSolde: 15042,
      lastOperations: [
        {
          label: 'Salaire',
          amount: '4242'
        },
        {
          label: 'Stock options',
          amount: 12342
        },
        {
          label: 'Achat Lamborghini',
          amount: -424242.42
        }
      ]
      }
    ]
  }
},

    ready: function() {
      this.fetchData();
    },

    methods: {
        fetchData : function() { 
          // this.$http.get('http://', function(data) {}, function(error) {})
        }
    }
}
</script>
=======
>>>>>>> Mise en place de la connection backend
