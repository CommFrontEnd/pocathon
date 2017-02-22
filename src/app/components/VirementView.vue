<template>
    <div class="o-panel-content">
        <accounts></accounts>
    </div>
</template>

<script>
    import Accounts from './Accounts.vue';
    import axios from 'axios';
    export default {
        name: 'virementView',
        props: [],
        components: {
            Accounts
        },
    };
</script>