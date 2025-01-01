<script>
import Child from './Child.vue';

export default {
    name: 'Parent',
    components: {
        Child,
    },
    data() {
        return {
            message: '',
        };
    },
    methods: {
        handleMessage(message) {
            this.message = message;
        },
    },
};
</script>

<template>
    <div>
        <h1>Mensaje recibido: {{ message }}</h1>
        <Child @messageSent="handleMessage" />
    </div>
</template>

<style scoped></style>