<script setup lang="ts">
import { ref } from "vue";
import { fetchRandomString } from "./api/fetchRandomString";
import ComponentA from "./components/ComponentA.vue";
import ComponentB from "./components/ComponentB.vue";

const data = ref("");

const handleClick = () => fetchRandomString().then((res) => (data.value = res));
</script>

<template>
    <div class="container">
        <button @click="handleClick">Refresh data!</button>
        <ComponentA :data="data" />
        <ComponentB :data="data" />
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 40px;
}
</style>
