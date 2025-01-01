<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'Counter',
    setup() {
        const store = useStore();

        const contador = computed(() => store.getters.getContador);

        const incrementar = () => {
            store.dispatch('incrementar');
        };

        const decrementar = () => {
            store.dispatch('decrementar');
        };

        return {
            contador,
            incrementar,
            decrementar,
        };
    },
};
</script>

<template>
    <div>
        <p>Contador: {{ contador }}</p>
        <button @click="incrementar">Incrementar</button>
        <button @click="decrementar">Decrementar</button>
    </div>
</template>

<style scoped></style>