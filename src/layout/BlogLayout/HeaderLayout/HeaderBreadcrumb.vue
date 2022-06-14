<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const routes = router.getRoutes();
const currentRoute = router.currentRoute;
</script>

<template>
  <el-breadcrumb>
    <template v-for="(item, index) in route.matched" :key="item.path">
      <el-breadcrumb-item v-if="index === 0">
        {{ item.meta.title }}
      </el-breadcrumb-item>
      <el-breadcrumb-item v-else :to="item.path">
        {{ item.meta.title }}
      </el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<style scoped></style>
