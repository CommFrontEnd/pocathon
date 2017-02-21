<template>
    <div class="o-panel-content">
        <!-- TODO : afficher +/- devant le montant (solde, et amount) -->
        <!-- TODO : Calcul du currency -->
        <div class="c-list-item">
            <!-- infos du compte sélectionné -->
            <div class="c-list-item__title">
                <div class="u-fullWidth">
                    <div class="c-list-item__subtitle c-field c-field--left">
                        <div class="c-field__label">N° de compte:</div>
                        <div class="c-field__value">{{accountNumber}}</div>
                    </div>
                    <div class="chart c-list-item__content">
                        <div class="js-d3-history"></div>
                        <div class="c-heading c-field">
                            <div class="field__label">Solde</div>
                            <div class="u-blank c-field__value is-valid">{{accountSolde}} €</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="c-list-item c-field c-field--default" v-for="operation in operations">
            <div class="c-field__label">
                <div class="c-ico fa fa-briefcase"></div>{{operation.label}}
            </div>
            <div class="c-field__value">{{operation.amount}} €</div>
        </div>
    </div>
</template>

<script>
import Bandeau from './Bandeau.vue';
import axios from 'axios';
export default {
  name: 'accounts-details',
  props: [],
  components: {
     Bandeau
  },
  data() {
    const data = {
        accountNumber: '',
        accountSolde: '',
        operations: [],
    }
    return data;
  },
  mounted:function(){
      this.fetchData();
  },
  methods: {
      fetchData: function(){
          var vm = this;
        axios.get('accounts/'+ "7d0f5db0-c693-11e6-81ea-fdbe71bceebb")
        .then(function(response) {
            var data = response.data;
            vm.accountNumber = data.accountNumber;
            vm.accountSolde = data.balance;
            vm.operations = data.operationsList;
        });
      }
  }
};
</script>