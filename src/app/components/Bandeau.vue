<template>
    <div class="o-panel-header">
        <h1 class="c-logo">
            <svg height="2em" viewBox="0 0 20 20" preserveAspectRatio="xMinYMid">
            <use xlink:href="#logo-min"></use>
            </svg>
        </h1>
        <div class="c-user menu-container js-user-menu">
            <div class="fa fa-user-circle-o c-user__ico"></div>
            {{user.name}}
            <div class="fa fa-angle-down"></div>
            <ul class="menu">
                <li class="menu__item" v-on:click="switchLanguage"><span class="fa fa-gear"></span>Go English</li>
                <li class="menu__item"><router-link to="/login"><span class="fa fa-unlock-alt"></span>{{disconnect}}</router-link></li>
            </ul>
        </div>
        <div class="c-options"></div>
    </div>
</template>

<script>
export default{
    name: 'bandeau',
    data(){
        const data = {
            user:{
                name : 'Hervé Lepinard'
            },
            disconnect: this.$t('header.disconnect')
        };
        return data;
    },
    methods:{
        switchLanguage: function(){
            //switched language
           this.$t.config.lang = 'en'; 
        }
    }
}
</script>
