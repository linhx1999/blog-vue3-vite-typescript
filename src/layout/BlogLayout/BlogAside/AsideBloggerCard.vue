<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const routes = router.getRoutes();
const currentRoute = router.currentRoute;
</script>

<template>
  <el-card class="user-card">
    <template #header>
      <el-avatar class="aside-avatar"> user </el-avatar>
    </template>
    <div>Description</div>
  </el-card>
</template>

<style scoped>
.user-card {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
