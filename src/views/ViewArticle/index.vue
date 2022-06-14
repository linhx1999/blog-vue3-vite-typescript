<script setup lang="ts">
import { onBeforeMount, ref } from "vue-demi";
import { useRoute } from "vue-router";
import http from "@/utils/request.js";
const route = useRoute();
const articleID = route.params.id;

const articleObj = ref({});

onBeforeMount(async () => {
  articleObj.value = (await http.get(`/articles/${articleID}`)).data;
  // console.log(articleObj)
});
</script>

<template>
  <h1>article</h1>
  <h3>文章ID：{{ route.params.id }}</h3>
</template>

<style scoped></style>
