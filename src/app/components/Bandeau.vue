<template>
    <div class="o-panel-header">
        <h1 class="c-logo">
            <svg height="2em" viewBox="0 0 20 20" preserveAspectRatio="xMinYMid">
            <use xlink:href="#logo-min"></use>
            </svg>
        </h1>
        <div class="c-user menu-container js-user-menu" v-bind:class="{'is-opened': isMenuActive}" v-on:click="menuOpen">
            <div class="fa fa-user-circle-o c-user__ico"></div>
            {{user.name}}
            <div class="fa fa-angle-down"></div>
            <ul class="menu">
                <li class="menu__item" v-on:click="switchLanguage"><span class="fa fa-gear"></span>Go English</li>
                <li class="menu__item" v-on:click="deconnexion"><span class="fa fa-unlock-alt"></span>{{disconnect}}</li>
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
            disconnect: this.$t('header.disconnect'),
            isMenuActive: false
        };
        return data;
    },
    methods:{
        switchLanguage: function(){
            //switched language
           this.$t.config.lang = 'en'; 
        },
        menuOpen: function () {
            this.isMenuActive = !this.isMenuActive;
        },
        deconnexion: function () {
            sessionStorage.removeItem('user');
            this.$router.push('login');
        }
    }
}
</script>
