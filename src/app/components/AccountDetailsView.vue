<template>
<!-- TODO : afficher +/- devant le montant (solde, et amount) -->
<!-- TODO : Calcul du currency -->

<div class="o-panel-content">
    <div class="c-list-item">
        <!-- infos du compte sélectionné -->
        <div class="c-list-item__title">
            <div class="u-fullWidth">{{accountLabel}}
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

<script type="text/javascript">
const Accounts = { 
  data: {
      {
      accountNum: 424242,
      accountSolde: 15042,
      operations: [
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
  }
}
</script>