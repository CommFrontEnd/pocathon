<template>

    <div class="c-field" >
        <div class="c-field__label">{{ operation.label }}</div>
        <div class="c-field__value is-valid">{{ operation.montant }} €</div>
    </div>

</template>

<script>
    export default {
        name: 'accountOperation',
        props: ['operation'],
        components: {

        },
        data() {
            const data = {
                operations: []
            }
            return data;
        },
    };
</script>