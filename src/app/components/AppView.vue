<template>
    <div class="o-panel">
        <bandeau></bandeau>
        <router-view></router-view>
        <cartographie></cartographie>
    </div>
</template>

<script>
    import Bandeau from './Bandeau.vue';
    import Cartographie from './Cartographie.vue';
    import axios from 'axios';
    export default {
        name: 'appView',
        props: [],
        components: {
            Bandeau,
            Cartographie
        },


    };
</script>