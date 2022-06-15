<script setup lang="ts">
import AsideBloggerCard from "./AsideBloggerCard.vue";
import { useRouter } from "vue-router";

const routes = useRouter().getRoutes();
</script>

<template>
  <AsideBloggerCard />
  <el-menu :router="true">
    <template v-for="route of routes" :key="route.path">
      <el-menu-item v-if="route.meta.isBlogAsideMenuItem" :index="route.path">
        <el-icon><component :is="route.meta.icon"></component></el-icon>
        <span>
          {{ route.meta.title }}
        </span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<style scoped></style>
