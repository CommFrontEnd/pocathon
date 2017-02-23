<template>
    <div>
        <h2>Choisir un compte à débiter :</h2>
        <div class="o-panel-content">
            <accounts :clickOnRow=selectCompteADebiter :accountSelected=idAccountADebiter></accounts>
        </div>
        <button class="btn btn-primary btn-md" v-bind:disabled=isDisabled() v-on:click=redirectionVirementACrediter >Choisir le compte bénéficiaire</button>
    </div>
</template>

<script>
    import Accounts from './Accounts.vue';
    export default {
        name: 'virementCompteADebiterView',
        props: [],
        components: {
            Accounts
        },
        data() {
            const data = {
                idAccountADebiter: ''
            };
            return data;
        },
        methods: {
            selectCompteADebiter(idAccountADebiter) {
                this.idAccountADebiter = idAccountADebiter;
            },
            isDisabled() {
                return !this.idAccountADebiter;
            },
            redirectionVirementACrediter() {
                this.$router.push({ name: 'virementACrediter', params: {idAccountADebiter : this.idAccountADebiter} });
            }
        }
    };
</script>