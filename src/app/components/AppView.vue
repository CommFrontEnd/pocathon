<template>
    <div class="o-panel">
        <bandeau></bandeau>
        <router-view></router-view>
    </div>
</template>

<script>
    import Bandeau from './Bandeau.vue';
    export default {
        name: 'appView',
        props: [],
        components: {
            Bandeau
        }
    };
</script>