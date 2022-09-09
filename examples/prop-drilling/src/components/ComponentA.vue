<script setup lang="ts">
const props = defineProps<{
    data: string;
}>();
</script>

<template>
    <h1>Component A: {{ props.data }}</h1>
</template>
