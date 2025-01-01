<script>
export default {
    name: 'Child',
    data() {
        return {
            message: '',
        };
    },
    methods: {
        sendMessage() {
            this.$emit('messageSent', this.message);
        },
    },
};
</script>

<template>
    <div>
        <input v-model="message" />
        <button @click="sendMessage">Enviar</button>
    </div>
</template>


<style scoped></style>