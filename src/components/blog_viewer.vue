<template>
    <md-editor v-model="text" preview-only />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import text from '../blogs/快速傅里叶变换(FFT).md?raw'
const a = '@/blogs/2021-07-22-09-31-31.png'
// const text = ref('Hello Editor!');
</script>

<style lang="scss" scoped>
</style>