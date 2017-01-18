<template>
<<<<<<< HEAD
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
=======
<!-- TODO : infos sur le num de compte communs avec accountDetailsView -->

<div class="c-list-item">
    
                  <div class="c-list-item__title">
                    <div class="u-fullWidth">{{accountLabel}}
                      <div class="c-list-item__subtitle c-field c-field--left">
                        <div class="c-field__label">N° de compte:</div>
                        <div class="c-field__value">{{accountNumber}}</div>
                      </div>
                    </div>
                  </div>
                  <div class="c-list-item__content">
                    <div class="c-list-item">
                      <div class="c-list-item__title">Répartition des dépenses par catégorie</div>
                      <div class="c-list-item__content">
                        <div class="chart js-d3-categories-repartition"><svg xmlns:ct="http://gionkunz.github.com/chartist-js/ct" width="100%" height="100%" class="ct-chart-pie" style="width: 100%; height: 100%;"><g class="ct-series ct-series-a"><path d="M695.3,5A70,70,0,0,0,695.3,5L695.3,75Z" class="ct-slice-pie" ct:value="0"></path></g><g class="ct-series ct-series-b"><path d="M757.146,42.211A70,70,0,0,0,695.3,5L695.3,75Z" class="ct-slice-pie" ct:value="20"></path></g><g class="ct-series ct-series-c"><path d="M762.748,93.727A70,70,0,0,0,757.031,41.996L695.3,75Z" class="ct-slice-pie" ct:value="14"></path></g><g class="ct-series ct-series-d"><path d="M758.83,104.392A70,70,0,0,0,762.813,93.491L695.3,75Z" class="ct-slice-pie" ct:value="3"></path></g><g class="ct-series ct-series-e"><path d="M652.938,130.727A70,70,0,0,0,758.932,104.17L695.3,75Z" class="ct-slice-pie" ct:value="33"></path></g><g class="ct-series ct-series-f"><path d="M695.3,5A70,70,0,0,0,653.133,130.874L695.3,75Z" class="ct-slice-pie" ct:value="46"></path></g><g><text dx="695.2999877929688" dy="40" text-anchor="middle" class="ct-label">80%</text><text dx="713.3443727941645" dy="45.00999883413438" text-anchor="middle" class="ct-label">0%</text><text dx="730.0948162933713" dy="71.21583435516204" text-anchor="middle" class="ct-label">0%</text><text dx="728.153058559119" dy="87.06962059197897" text-anchor="middle" class="ct-label">0%</text><text dx="703.7468139884585" dy="108.9654401888624" text-anchor="middle" class="ct-label">0%</text><text dx="662.1321268015706" dy="63.82444644524069" text-anchor="middle" class="ct-label">20%</text></g></svg></div>
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
>>>>>>> 8d848e12d6f00341afcd714dcda538e8f5948007
                    </div>
                    <div class="c-list-item">
                        <div class="c-list-item__title">Répartition des gains par catégorie</div>
                        <div class="c-list-item__content">
<<<<<<< HEAD
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
=======
                          <div class="chart js-d3-categories-repartition-gains"><svg xmlns:ct="http://gionkunz.github.com/chartist-js/ct" width="100%" height="100%" class="ct-chart-pie" style="width: 100%; height: 100%;"><g class="ct-series ct-series-a"><path d="M628.726,53.369A70,70,0,1,0,695.3,5L695.3,75Z" class="ct-slice-pie" ct:value="80"></path></g><g class="ct-series ct-series-b"><path d="M628.726,53.369A70,70,0,0,0,628.651,53.601L695.3,75Z" class="ct-slice-pie" ct:value="0"></path></g><g class="ct-series ct-series-c"><path d="M628.726,53.369A70,70,0,0,0,628.651,53.601L695.3,75Z" class="ct-slice-pie" ct:value="0"></path></g><g class="ct-series ct-series-d"><path d="M628.726,53.369A70,70,0,0,0,628.651,53.601L695.3,75Z" class="ct-slice-pie" ct:value="0"></path></g><g class="ct-series ct-series-e"><path d="M628.726,53.369A70,70,0,0,0,628.651,53.601L695.3,75Z" class="ct-slice-pie" ct:value="0"></path></g><g class="ct-series ct-series-f"><path d="M695.3,5A70,70,0,0,0,628.651,53.601L695.3,75Z" class="ct-slice-pie" ct:value="20"></path></g><g><text dx="715.8724716232053" dy="103.31559480312316" text-anchor="middle" class="ct-label">80%</text><text dx="662.0130097226383" dy="64.18440519687682" text-anchor="middle" class="ct-label">0%</text><text dx="662.0130097226383" dy="64.18440519687682" text-anchor="middle" class="ct-label">0%</text><text dx="662.0130097226383" dy="64.18440519687682" text-anchor="middle" class="ct-label">0%</text><text dx="662.0130097226383" dy="64.18440519687682" text-anchor="middle" class="ct-label">0%</text><text dx="674.7275039627322" dy="46.68440519687684" text-anchor="middle" class="ct-label">20%</text></g></svg></div>
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
                        <div class="chart js-d3-history-by-category"><svg xmlns:ct="http://gionkunz.github.com/chartist-js/ct" width="100%" height="100%" class="ct-chart-line" style="width: 100%; height: 100%;"><g class="ct-grids"><line x1="50" x2="50" y1="15" y2="115" class="ct-grid ct-horizontal"></line><line x1="110.25454434481534" x2="110.25454434481534" y1="15" y2="115" class="ct-grid ct-horizontal"></line><line x1="170.5090886896307" x2="170.5090886896307" y1="15" y2="115" class="ct-grid ct-horizontal"></line><line x1="230.76363303444603" x2="230.76363303444603" y1="15" y2="115" class="ct-grid ct-horizontal"></line><line x1="291.0181773792614" x2="291.0181773792614" y1="15" y2="115" class="ct-grid ct-horizontal"></line><line x1="351.27272172407675" x2="351.27272172407675" y1="15" y2="115" class="ct-grid ct-horizontal"></line><line x1="411.52726606889206" x2="411.52726606889206" y1="15" y2="115" class="ct-grid ct-horizontal"></line><line x1="471.7818104137074" x2="471.7818104137074" y1="15" y2="115" class="ct-grid ct-horizontal"></line><line x1="532.0363547585227" x2="532.0363547585227" y1="15" y2="115" class="ct-grid ct-horizontal"></line><line x1="592.2908991033381" x2="592.2908991033381" y1="15" y2="115" class="ct-grid ct-horizontal"></line><line x1="652.5454434481535" x2="652.5454434481535" y1="15" y2="115" class="ct-grid ct-horizontal"></line><line x1="712.7999877929688" x2="712.7999877929688" y1="15" y2="115" class="ct-grid ct-horizontal"></line><line x1="773.0545321377841" x2="773.0545321377841" y1="15" y2="115" class="ct-grid ct-horizontal"></line><line x1="833.3090764825995" x2="833.3090764825995" y1="15" y2="115" class="ct-grid ct-horizontal"></line><line x1="893.5636208274148" x2="893.5636208274148" y1="15" y2="115" class="ct-grid ct-horizontal"></line><line x1="953.8181651722301" x2="953.8181651722301" y1="15" y2="115" class="ct-grid ct-horizontal"></line><line x1="1014.0727095170455" x2="1014.0727095170455" y1="15" y2="115" class="ct-grid ct-horizontal"></line><line x1="1074.3272538618608" x2="1074.3272538618608" y1="15" y2="115" class="ct-grid ct-horizontal"></line><line x1="1134.5817982066762" x2="1134.5817982066762" y1="15" y2="115" class="ct-grid ct-horizontal"></line><line x1="1194.8363425514915" x2="1194.8363425514915" y1="15" y2="115" class="ct-grid ct-horizontal"></line><line x1="1255.090886896307" x2="1255.090886896307" y1="15" y2="115" class="ct-grid ct-horizontal"></line><line x1="1315.3454312411222" x2="1315.3454312411222" y1="15" y2="115" class="ct-grid ct-horizontal"></line><line x1="1375.5999755859375" x2="1375.5999755859375" y1="15" y2="115" class="ct-grid ct-horizontal"></line><line y1="115" y2="115" x1="50" x2="1375.5999755859375" class="ct-grid ct-vertical"></line><line y1="86.42857142857143" y2="86.42857142857143" x1="50" x2="1375.5999755859375" class="ct-grid ct-vertical"></line><line y1="57.857142857142854" y2="57.857142857142854" x1="50" x2="1375.5999755859375" class="ct-grid ct-vertical"></line><line y1="29.285714285714292" y2="29.285714285714292" x1="50" x2="1375.5999755859375" class="ct-grid ct-vertical"></line></g><g><g class="ct-series ct-series-a"><path d="M50,115L50,15L110.255,15.614L170.509,16.657L230.764,17.414L291.018,18.357L351.273,19.329L411.527,21.443L471.782,23.514L532.036,25.943L592.291,26.4L652.545,28.943L712.8,29.657L773.055,32.3L833.309,34.557L893.564,34.671L953.818,36.071L1014.073,37.729L1074.327,38.429L1134.582,39.929L1194.836,40.557L1194.836,115Z" class="ct-area"></path><path d="M50,15L110.255,15.614L170.509,16.657L230.764,17.414L291.018,18.357L351.273,19.329L411.527,21.443L471.782,23.514L532.036,25.943L592.291,26.4L652.545,28.943L712.8,29.657L773.055,32.3L833.309,34.557L893.564,34.671L953.818,36.071L1014.073,37.729L1074.327,38.429L1134.582,39.929L1194.836,40.557" class="ct-line"></path></g><g class="ct-series ct-series-b"><path d="M50,115L50,42.314L110.255,42.586L170.509,43.7L230.764,43.7L291.018,44.229L351.273,44.6L411.527,45.429L471.782,47.743L532.036,50.129L592.291,51.757L652.545,53.257L712.8,56.057L773.055,56.114L833.309,57.457L893.564,58.8L953.818,59.586L1014.073,61.386L1074.327,64.1L1134.582,66.543L1194.836,69.343L1255.091,69.8L1315.345,72.214L1375.6,74.714L1375.6,115Z" class="ct-area"></path><path d="M50,42.314L110.255,42.586L170.509,43.7L230.764,43.7L291.018,44.229L351.273,44.6L411.527,45.429L471.782,47.743L532.036,50.129L592.291,51.757L652.545,53.257L712.8,56.057L773.055,56.114L833.309,57.457L893.564,58.8L953.818,59.586L1014.073,61.386L1074.327,64.1L1134.582,66.543L1194.836,69.343L1255.091,69.8L1315.345,72.214L1375.6,74.714" class="ct-line"></path></g><g class="ct-series ct-series-c"><path d="M50,115L50,76.271L110.255,76.729L170.509,78.014L230.764,78.457L291.018,81.286L351.273,83.671L411.527,85.757L471.782,88.529L532.036,88.929L592.291,91.043L652.545,93.757L712.8,94.329L773.055,96.686L833.309,97.471L893.564,98.029L953.818,100.2L1014.073,102.7L1074.327,105.329L1074.327,115Z" class="ct-area"></path><path d="M50,76.271L110.255,76.729L170.509,78.014L230.764,78.457L291.018,81.286L351.273,83.671L411.527,85.757L471.782,88.529L532.036,88.929L592.291,91.043L652.545,93.757L712.8,94.329L773.055,96.686L833.309,97.471L893.564,98.029L953.818,100.2L1014.073,102.7L1074.327,105.329" class="ct-line"></path></g></g><g class="ct-labels"><foreignObject style="overflow: visible;" x="50" y="120" width="60.25454434481534" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 60px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/"></span></foreignObject><foreignObject style="overflow: visible;" x="110.25454434481534" y="120" width="60.25454434481534" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 60px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/"></span></foreignObject><foreignObject style="overflow: visible;" x="170.5090886896307" y="120" width="60.25454434481534" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 60px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/"></span></foreignObject><foreignObject style="overflow: visible;" x="230.76363303444603" y="120" width="60.25454434481534" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 60px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/"></span></foreignObject><foreignObject style="overflow: visible;" x="291.0181773792614" y="120" width="60.25454434481537" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 60px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/"></span></foreignObject><foreignObject style="overflow: visible;" x="351.27272172407675" y="120" width="60.254544344815315" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 60px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/"></span></foreignObject><foreignObject style="overflow: visible;" x="411.52726606889206" y="120" width="60.254544344815315" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 60px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/"></span></foreignObject><foreignObject style="overflow: visible;" x="471.7818104137074" y="120" width="60.25454434481537" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 60px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/"></span></foreignObject><foreignObject style="overflow: visible;" x="532.0363547585227" y="120" width="60.25454434481537" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 60px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/"></span></foreignObject><foreignObject style="overflow: visible;" x="592.2908991033381" y="120" width="60.25454434481537" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 60px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/"></span></foreignObject><foreignObject style="overflow: visible;" x="652.5454434481535" y="120" width="60.25454434481526" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 60px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/"></span></foreignObject><foreignObject style="overflow: visible;" x="712.7999877929688" y="120" width="60.25454434481537" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 60px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/"></span></foreignObject><foreignObject style="overflow: visible;" x="773.0545321377841" y="120" width="60.25454434481537" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 60px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/"></span></foreignObject><foreignObject style="overflow: visible;" x="833.3090764825995" y="120" width="60.25454434481526" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 60px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/"></span></foreignObject><foreignObject style="overflow: visible;" x="893.5636208274148" y="120" width="60.25454434481537" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 60px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/"></span></foreignObject><foreignObject style="overflow: visible;" x="953.8181651722301" y="120" width="60.25454434481537" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 60px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/"></span></foreignObject><foreignObject style="overflow: visible;" x="1014.0727095170455" y="120" width="60.25454434481526" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 60px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/"></span></foreignObject><foreignObject style="overflow: visible;" x="1074.3272538618608" y="120" width="60.254544344815486" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 60px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/"></span></foreignObject><foreignObject style="overflow: visible;" x="1134.5817982066762" y="120" width="60.25454434481526" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 60px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/"></span></foreignObject><foreignObject style="overflow: visible;" x="1194.8363425514915" y="120" width="60.254544344815486" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 60px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/"></span></foreignObject><foreignObject style="overflow: visible;" x="1255.090886896307" y="120" width="60.25454434481526" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 60px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/"></span></foreignObject><foreignObject style="overflow: visible;" x="1315.3454312411222" y="120" width="60.25454434481526" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 60px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/"></span></foreignObject><foreignObject style="overflow: visible;" x="1375.5999755859375" y="120" width="30" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 30px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/"></span></foreignObject><foreignObject style="overflow: visible;" y="86.42857142857143" x="10" height="28.571428571428573" width="30"><span class="ct-label ct-vertical ct-start" style="height: 29px; width: 30px" xmlns="http://www.w3.org/2000/xmlns/">1993000</span></foreignObject><foreignObject style="overflow: visible;" y="57.85714285714286" x="10" height="28.571428571428573" width="30"><span class="ct-label ct-vertical ct-start" style="height: 29px; width: 30px" xmlns="http://www.w3.org/2000/xmlns/">1995000</span></foreignObject><foreignObject style="overflow: visible;" y="29.285714285714292" x="10" height="28.571428571428562" width="30"><span class="ct-label ct-vertical ct-start" style="height: 29px; width: 30px" xmlns="http://www.w3.org/2000/xmlns/">1997000</span></foreignObject><foreignObject style="overflow: visible;" y="-0.7142857142857082" x="10" height="30" width="30"><span class="ct-label ct-vertical ct-start" style="height: 30px; width: 30px" xmlns="http://www.w3.org/2000/xmlns/">1999000</span></foreignObject></g></svg></div>
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
                        <div class="chart js-d3-history-month"><svg xmlns:ct="http://gionkunz.github.com/chartist-js/ct" width="100%" height="100%" class="ct-chart-line" style="width: 100%; height: 100%;"><g class="ct-grids"><line x1="50" x2="50" y1="15" y2="115" class="ct-grid ct-horizontal"></line><line x1="170.5090886896307" x2="170.5090886896307" y1="15" y2="115" class="ct-grid ct-horizontal"></line><line x1="291.0181773792614" x2="291.0181773792614" y1="15" y2="115" class="ct-grid ct-horizontal"></line><line x1="411.52726606889206" x2="411.52726606889206" y1="15" y2="115" class="ct-grid ct-horizontal"></line><line x1="532.0363547585227" x2="532.0363547585227" y1="15" y2="115" class="ct-grid ct-horizontal"></line><line x1="652.5454434481535" x2="652.5454434481535" y1="15" y2="115" class="ct-grid ct-horizontal"></line><line x1="773.0545321377841" x2="773.0545321377841" y1="15" y2="115" class="ct-grid ct-horizontal"></line><line x1="893.5636208274148" x2="893.5636208274148" y1="15" y2="115" class="ct-grid ct-horizontal"></line><line x1="1014.0727095170455" x2="1014.0727095170455" y1="15" y2="115" class="ct-grid ct-horizontal"></line><line x1="1134.5817982066762" x2="1134.5817982066762" y1="15" y2="115" class="ct-grid ct-horizontal"></line><line x1="1255.090886896307" x2="1255.090886896307" y1="15" y2="115" class="ct-grid ct-horizontal"></line><line x1="1375.5999755859375" x2="1375.5999755859375" y1="15" y2="115" class="ct-grid ct-horizontal"></line><line y1="115" y2="115" x1="50" x2="1375.5999755859375" class="ct-grid ct-vertical"></line><line y1="75" y2="75" x1="50" x2="1375.5999755859375" class="ct-grid ct-vertical"></line><line y1="35" y2="35" x1="50" x2="1375.5999755859375" class="ct-grid ct-vertical"></line></g><g><g class="ct-series ct-series-a"><path d="M50,115L50,105L170.509,95L291.018,112L411.527,115L532.036,110L652.545,84.8L773.055,111L893.564,114L1014.073,104.8L1134.582,107.2L1255.091,108.5L1375.6,74.9L1375.6,115Z" class="ct-area"></path><path d="M50,105L170.509,95L291.018,112L411.527,115L532.036,110L652.545,84.8L773.055,111L893.564,114L1014.073,104.8L1134.582,107.2L1255.091,108.5L1375.6,74.9" class="ct-line"></path></g><g class="ct-series ct-series-b"><path d="M50,115L50,70L170.509,70L291.018,109.6L411.527,70L532.036,50L652.545,31L773.055,111L893.564,114L1014.073,104.8L1134.582,103L1255.091,110L1375.6,108L1375.6,115Z" class="ct-area"></path><path d="M50,70L170.509,70L291.018,109.6L411.527,70L532.036,50L652.545,31L773.055,111L893.564,114L1014.073,104.8L1134.582,103L1255.091,110L1375.6,108" class="ct-line"></path></g><g class="ct-series ct-series-c"><path d="M50,115L50,100L170.509,110L291.018,64.6L411.527,100L532.036,80L652.545,41L773.055,101L893.564,99L1014.073,24.8L1134.582,103L1255.091,105L1375.6,113L1375.6,115Z" class="ct-area"></path><path d="M50,100L170.509,110L291.018,64.6L411.527,100L532.036,80L652.545,41L773.055,101L893.564,99L1014.073,24.8L1134.582,103L1255.091,105L1375.6,113" class="ct-line"></path></g></g><g class="ct-labels"><foreignObject style="overflow: visible;" x="50" y="120" width="120.50908868963069" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 121px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/">Janv.</span></foreignObject><foreignObject style="overflow: visible;" x="170.5090886896307" y="120" width="120.50908868963069" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 121px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/">Fev.</span></foreignObject><foreignObject style="overflow: visible;" x="291.0181773792614" y="120" width="120.50908868963069" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 121px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/">Mars</span></foreignObject><foreignObject style="overflow: visible;" x="411.52726606889206" y="120" width="120.50908868963069" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 121px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/">Avr.</span></foreignObject><foreignObject style="overflow: visible;" x="532.0363547585227" y="120" width="120.50908868963074" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 121px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/">Mai</span></foreignObject><foreignObject style="overflow: visible;" x="652.5454434481535" y="120" width="120.50908868963063" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 121px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/">Juin</span></foreignObject><foreignObject style="overflow: visible;" x="773.0545321377841" y="120" width="120.50908868963063" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 121px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/">Juil.</span></foreignObject><foreignObject style="overflow: visible;" x="893.5636208274148" y="120" width="120.50908868963074" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 121px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/">Aout</span></foreignObject><foreignObject style="overflow: visible;" x="1014.0727095170455" y="120" width="120.50908868963074" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 121px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/">Sept.</span></foreignObject><foreignObject style="overflow: visible;" x="1134.5817982066762" y="120" width="120.50908868963074" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 121px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/">Oct.</span></foreignObject><foreignObject style="overflow: visible;" x="1255.090886896307" y="120" width="120.50908868963052" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 121px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/">Nov.</span></foreignObject><foreignObject style="overflow: visible;" x="1375.5999755859375" y="120" width="30" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 30px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/">Déc.</span></foreignObject><foreignObject style="overflow: visible;" y="75" x="10" height="40" width="30"><span class="ct-label ct-vertical ct-start" style="height: 40px; width: 30px" xmlns="http://www.w3.org/2000/xmlns/">0</span></foreignObject><foreignObject style="overflow: visible;" y="35" x="10" height="40" width="30"><span class="ct-label ct-vertical ct-start" style="height: 40px; width: 30px" xmlns="http://www.w3.org/2000/xmlns/">400</span></foreignObject><foreignObject style="overflow: visible;" y="5" x="10" height="30" width="30"><span class="ct-label ct-vertical ct-start" style="height: 30px; width: 30px" xmlns="http://www.w3.org/2000/xmlns/">800</span></foreignObject></g></svg></div>
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

</template>
>>>>>>> 8d848e12d6f00341afcd714dcda538e8f5948007
