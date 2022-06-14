<script setup lang="ts">
import ArticleDescription from "./ArticleDescription.vue";
import http from "@/utils/request";
import { onBeforeMount, ref } from "vue";
const articlesDescriptions = ref();

onBeforeMount(async () => {
  articlesDescriptions.value = (await http.get("/articles")).data;
});
</script>

<template>
  <template v-for="item of articlesDescriptions" :key="item.id">
    <ArticleDescription :articlesDescription="item" />

    <el-divider />
  </template>
</template>

<style scoped></style>
