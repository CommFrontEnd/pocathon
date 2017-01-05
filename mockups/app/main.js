(function(){
    'use strict';

    // HISTORIQUE POUR COMPTE COURANT
    new Chartist.Line('.js-d3-history', {
        series: [
[2000000,1999957,1999884,1999831,1999765,1999697,1999549,1999404,1999234,1999202,1999024,1998974,1998789,1998631,1998623,1998525,1998409,1998360,1998255,1998211,1998088,1998069,1997991,1997991,1997954,1997928,1997870,1997708,1997541,1997427,1997322,1997126,1997122,1997028,1996934,1996879,1996753,1996563,1996392,1996196,1996164,1995995,1995820,1995711,1995679,1995589,1995558,1995360,1995193,1995047,1994853,1994825,1994677,1994487,1994447,1994282,1994227,1994188,1994036,1993861,1993677],
        ]
    }, {
        showArea: true,
        fullWidth: true,
        showPoint: false,
        lineSmooth: false
    });

    // REPARTITION DEPENSES PAR CATEGORIE
    var data = [0, 20, 14, 3, 33, 46 ];
    new Chartist.Pie('.js-d3-categories-repartition', {
        series: data,
        labels: ['Boulot', 'Impôts', 'Courses', 'Véhicule', 'Santé', 'Dépenses autre', 'Logement'],
    }, {
        labelInterpolationFnc: function(label, index) {
            return data[index] + '%';
        }
    });

    // REPARTITION GAINS PAR CATEGORIE
    var data = [80, 0, 0, 0, 0, 20];
    new Chartist.Pie('.js-d3-categories-repartition-gains', {
        series: data,
        labels: ['Boulot', 'Impôts', 'Courses', 'Véhicule', 'Santé', 'Dépenses autre', 'Logement'],
    }, {
        labelInterpolationFnc: function(label, index) {
            return data[index] + '%';
        }
    });

    // HISTORIQUE PAR CATEGORIE
    new Chartist.Line('.js-d3-history-by-category', {
        series: [
[2000000,1999957,1999884,1999831,1999765,1999697,1999549,1999404,1999234,1999202,1999024,1998974,1998789,1998631,1998623,1998525,1998409,1998360,1998255,1998211],[1998088,1998069,1997991,1997991,1997954,1997928,1997870,1997708,1997541,1997427,1997322,1997126,1997122,1997028,1996934,1996879,1996753,1996563,1996392,1996196,1996164,1995995,1995820],[1995711,1995679,1995589,1995558,1995360,1995193,1995047,1994853,1994825,1994677,1994487,1994447,1994282,1994227,1994188,1994036,1993861,1993677],
        ]
    }, {
        showArea: true,
        fullWidth: true,
        showPoint: false,
        lineSmooth: false
    });

    // COMPARAISON MOIS PRECEDENT
    new Chartist.Line('.js-d3-history-month', {
        labels: ['Janv.', 'Fev.', 'Mars', 'Avr.', 'Mai', 'Juin', 'Juil.', 'Aout', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
        series: [
            [100,200,30,0,50,302,40,10,102,78,65,401],
            [450,450,54,450,650,840,40,10,102,120,50,70],
            [150,50,504,150,350,740,140,160,902,120,100,20]
        ]
    }, {
        showArea: true,
        fullWidth: true,
        showPoint: false,
        lineSmooth: false
    });

    document.querySelector('.js-localization').addEventListener('click',function(){
        document.querySelector('.js-localization-modal').setAttribute('aria-hidden', 'false');
    });
    document.querySelector('.js-close').addEventListener('click',function(){
        document.querySelector('.js-localization-modal').setAttribute('aria-hidden', 'true');
    });

    document.querySelector('.js-user-menu').addEventListener('click', function(){
        if(this.classList.contains('is-opened')){
            this.classList.remove('is-opened');
        }else{
            this.classList.add('is-opened');
        }
    });

    document.querySelectorAll('.js-account-details, .js-btn--selectable').forEach(function(el){
        el.addEventListener('click', function(){
            if(this.classList.contains('is-selected')){
                this.classList.remove('is-selected');
            }else{
                this.classList.add('is-selected');
            }
        });
    });

})();
