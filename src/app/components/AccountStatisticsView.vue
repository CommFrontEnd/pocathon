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
                            <div :class="['u-bg-' + index]" class="btn btn--selectable is-selected js-btn--selectable"  v-for="(categoryLabel, index) in categorieslabels">
                                <div class="fa fa-briefcase"></div>
                                <div class="btn__label">{{categoryLabel}}</div>
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
                                    <div class="btn__label">Moyenne Annuelle</div>
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
import axios from 'axios';
export default {
  name: 'account-statistic',
  components: {
     Bandeau
  },
  data() {
    const data = {
        account:{
            number: '923456789012345678'
        },
        categorieRepartition: [0, 20, 14, 3, 33, 46],
        history: [
            [2000000,1999957,1999884,1999831,1999765,1999697,1999549,1999404,1999234,1999202,1999024,1998974,1998789,1998631,1998623,1998525,1998409,1998360,1998255,1998211,1998088,1998069,1997991,1997991,1997954,1997928,1997870,1997708,1997541,1997427,1997322,1997126,1997122,1997028,1996934,1996879,1996753,1996563,1996392,1996196,1996164,1995995,1995820,1995711,1995679,1995589,1995558,1995360,1995193,1995047,1994853,1994825,1994677,1994487,1994447,1994282,1994227,1994188,1994036,1993861,1993677],
            ],
        gainsRepartition: [80, 0, 0, 0, 0, 20],
        categoryHistory: [
            [2000000,1999957,1999884,1999831,1999765,1999697,1999549,1999404,1999234,1999202,1999024,1998974,1998789,1998631,1998623,1998525,1998409,1998360,1998255,1998211],[1998088,1998069,1997991,1997991,1997954,1997928,1997870,1997708,1997541,1997427,1997322,1997126,1997122,1997028,1996934,1996879,1996753,1996563,1996392,1996196,1996164,1995995,1995820],[1995711,1995679,1995589,1995558,1995360,1995193,1995047,1994853,1994825,1994677,1994487,1994447,1994282,1994227,1994188,1994036,1993861,1993677],
        ],
        monthComparison : [
            [100,200,30,0,50,302,40,10,102,78,65,401],
            [450,450,54,450,650,840,40,10,102,120,50,70],
            [150,50,504,150,350,740,140,160,902,120,100,20]
        ],
        categorieslabels: ['Boulot', 'Impôts', 'Courses', 'Véhicule', 'Santé', 'Dépenses autre', 'Logement'],
        defaultConf: {
                showArea: true,
                fullWidth: true,
                showPoint: false,
                lineSmooth: false
        }
        
    }
    return data;
  },
  mounted: function(){
      this.fetchData();
      this.initiateCharts();
  },
  methods: {
      fetchData: function(){
         
        axios.get('agencies/')
        .then(function(response) {
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
        });
        
      },
      initiateCharts: function() {
          var vm = this;
          console.log("repartition", this.categorieRepartition);
          // HISTORIQUE POUR COMPTE COURANT
          var history = new Chartist.Line('.js-d3-history', { series: vm.history }, vm.defaultConf);
          // REPARTITION DEPENSES PAR CATEGORIE
          var categorieRepartition = new Chartist.Pie('.js-d3-categories-repartition', {
              series: vm.categorieRepartition,
              labels: vm.categorieslabels
            }, {
                labelInterpolationFnc: function(label, index) {
                    return vm.categorieRepartition[index] + '%';
                }
          });

        // REPARTITION GAINS PAR CATEGORIE
       var gainsRepartition = new Chartist.Pie('.js-d3-categories-repartition-gains', {
            series: vm.gainsRepartition,
            labels: vm.categorieslabels
        }, {
            labelInterpolationFnc: function(label, index) {
                return vm.gainsRepartition[index] + '%';
            }
        });

        // HISTORIQUE PAR CATEGORIE
        var categoryHistory = new Chartist.Line('.js-d3-history-by-category', { series: vm.categoryHistory }, vm.defaultConf);

        // COMPARAISON MOIS PRECEDENT
        var monthComparison = new Chartist.Line('.js-d3-history-month', {
            labels: vm.categorieslabels,
            series: vm.monthComparison
        }, vm.defaultConf);

        document.querySelector('.js-localization').addEventListener('click',function() {
            document.querySelector('.js-localization-modal').setAttribute('aria-hidden', 'false');
        });
        document.querySelector('.js-close').addEventListener('click',function(){
            document.querySelector('.js-localization-modal').setAttribute('aria-hidden', 'true');
        });

        document.querySelector('.js-user-menu').addEventListener('click', function(){
            if (this.classList.contains('is-opened')) {
                this.classList.remove('is-opened');
            } else {
                this.classList.add('is-opened');
            }
        });

        document.querySelectorAll('.js-account-details, .js-btn--selectable').forEach(function(el){
            el.addEventListener('click', function() {
                if(this.classList.contains('is-selected')) {
                    this.classList.remove('is-selected');
                } else {
                    this.classList.add('is-selected');
                }
            });
        });

      }
  }
};






</script>