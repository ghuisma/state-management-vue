<script setup lang="ts">
import { reactive } from "vue";
import { fetchRandomString } from "./api/fetchRandomString";
import ComponentA from "./components/ComponentA.vue";
import ComponentB from "./components/ComponentB.vue";

import { store } from "./stores/store";

const handleClick = () => fetchRandomString().then((res) => (store.data = res));
</script>

<template>
    <div class="container">
        <button @click="handleClick">Refresh data!</button>
        <ComponentA />
        <ComponentB />
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 40px;
}
</style>
