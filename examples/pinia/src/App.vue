<script setup lang="ts">
import ComponentA from "./components/ComponentA.vue";
import ComponentB from "./components/ComponentB.vue";
import { useStore } from "./stores/store";

const store = useStore();
</script>

<template>
    <div class="container">
        <button @click="store.fetchData">Refresh data!</button>
        <ComponentA />
        <ComponentB />
        <h1>Double data: {{ store.doubleData }}</h1>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 40px;
}
</style>
