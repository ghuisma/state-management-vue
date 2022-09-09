<script setup lang="ts">
import { useStore } from "../stores/store";

const store = useStore();
</script>

<template>
    <h1>Component A: {{ store.data }}</h1>
</template>
