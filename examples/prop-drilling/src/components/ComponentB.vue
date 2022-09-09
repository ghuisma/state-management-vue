<script setup lang="ts">
const props = defineProps<{
    data: string;
}>();
</script>

<template>
    <h1>Component B: {{ props.data }}</h1>
</template>
