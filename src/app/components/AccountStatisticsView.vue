<template>
    <div class="o-panel">
        <bandeau></bandeau>
        <div class="o-panel-content">
            <div class="c-list-item">
                <div class="c-list-item__title">
                    <div class="u-fullWidth">Compte courant
                        <div class="c-list-item__subtitle c-field c-field--left">
                            <div class="c-field__label">N° de compte:</div>
                            <div class="c-field__value">{{ account.number }}</div>
                        </div>
                    </div>
                </div>
                <div class="c-list-item__content">
                    <div class="c-list-item">
                        <div class="c-list-item__title">Répartition des dépenses par catégorie</div>
                        <div class="c-list-item__content">
                            <div class="chart js-d3-categories-repartition"></div>
                        </div>
                        <div class="btn-group">
                            <div class="u-bg-1 btn btn--selectable is-selected js-btn--selectable">
                                <div class="fa fa-briefcase"></div>
                                <div class="btn__label">Boulot</div>
                            </div>
                            <div class="u-bg-2 btn btn--selectable is-selected js-btn--selectable">
                                <div class="fa fa-money"></div>
                                <div class="btn__label">Impôts</div>
                            </div>
                            <div class="u-bg-3 btn btn--selectable is-selected js-btn--selectable">
                                <div class="fa fa-shopping-cart"></div>
                                <div class="btn__label">Dépenses diverses</div>
                            </div>
                            <div class="u-bg-4 btn btn--selectable is-selected js-btn--selectable">
                                <div class="fa fa-building"></div>
                                <div class="btn__label">Logement</div>
                            </div>
                            <div class="u-bg-5 btn btn--selectable is-selected js-btn--selectable">
                                <div class="fa fa-user-md"></div>
                                <div class="btn__label">Santé</div>
                            </div>
                            <div class="u-bg-6 btn btn--selectable is-selected js-btn--selectable">
                                <div class="fa fa-car"></div>
                                <div class="btn__label">Voiture</div>
                            </div>
                        </div>
                    </div>
                    <div class="c-list-item">
                        <div class="c-list-item__title">Répartition des gains par catégorie</div>
                        <div class="c-list-item__content">
                            <div class="chart js-d3-categories-repartition-gains"></div>
                        </div>
                        <div class="btn-group">
                            <div class="u-bg-1 btn btn--selectable is-selected js-btn--selectable">
                                <div class="fa fa-briefcase"></div>
                                <div class="btn__label">Boulot</div>
                            </div>
                            <div class="u-bg-2 btn btn--selectable is-selected js-btn--selectable">
                                <div class="fa fa-money"></div>
                                <div class="btn__label">Impôts</div>
                            </div>
                            <div class="u-bg-3 btn btn--selectable is-selected js-btn--selectable">
                                <div class="fa fa-shopping-cart"></div>
                                <div class="btn__label">Dépenses diverses</div>
                            </div>
                            <div class="u-bg-4 btn btn--selectable is-selected js-btn--selectable">
                                <div class="fa fa-building"></div>
                                <div class="btn__label">Logement</div>
                            </div>
                            <div class="u-bg-5 btn btn--selectable is-selected js-btn--selectable">
                                <div class="fa fa-user-md"></div>
                                <div class="btn__label">Santé</div>
                            </div>
                            <div class="u-bg-6 btn btn--selectable is-selected js-btn--selectable">
                                <div class="fa fa-car"></div>
                                <div class="btn__label">Voiture</div>
                            </div>
                        </div>
                    </div>
                    <div class="c-list-item">
                        <div class="c-list-item__title">Historique des dépenses par catégorie</div>
                        <div class="c-list-item__content">
                            <div class="chart js-d3-history-by-category"></div>
                        </div>
                        <div class="c-list-item__footer">
                            <div class="btn-group">
                                <div class="u-bg-1 btn btn--selectable is-selected js-btn--selectable">
                                    <div class="fa fa-briefcase"></div>
                                    <div class="btn__label">Boulot</div>
                                </div>
                                <div class="u-bg-2 btn btn--selectable is-selected js-btn--selectable">
                                    <div class="fa fa-money"></div>
                                    <div class="btn__label">Impôts</div>
                                </div>
                                <div class="u-bg-3 btn btn--selectable is-selected js-btn--selectable">
                                    <div class="fa fa-shopping-cart"></div>
                                    <div class="btn__label">Dépenses diverses</div>
                                </div>
                                <div class="u-bg-4 btn btn--selectable is-selected js-btn--selectable">
                                    <div class="fa fa-building"></div>
                                    <div class="btn__label">Logement</div>
                                </div>
                                <div class="u-bg-5 btn btn--selectable is-selected js-btn--selectable">
                                    <div class="fa fa-user-md"></div>
                                    <div class="btn__label">Santé</div>
                                </div>
                                <div class="u-bg-6 btn btn--selectable is-selected js-btn--selectable">
                                    <div class="fa fa-car"></div>
                                    <div class="btn__label">Voiture</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="c-list-item">
                        <div class="c-list-item__title">Historique comparé avec le mois précédent</div>
                        <div class="c-list-item__content">
                            <div class="chart js-d3-history-month"></div>
                        </div>
                        <div class="c-list-item__footer">
                            <div class="btn-group">
                                <div class="u-bg-1 btn btn--selectable is-selected js-btn--selectable">
                                    <div class="btn__label">Mois Courant</div>
                                </div>
                                <div class="u-bg-2 btn btn--selectable is-selected js-btn--selectable">
                                    <div class="btn__label">Mois Précédent</div>
                                </div>
                                <div class="u-bg-3 btn btn--selectable is-selected js-btn--selectable">
                                    <div class="btn__label">Moyenne Annuell</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import Bandeau from './Bandeau.vue';
export default {
  name: 'account-statistic',
  components: {
     Bandeau
  },
  data() {
    const data = {
        account:{
            number: '923456789012345678'
        } 
        
    }
    return data;

  }
};
</script>