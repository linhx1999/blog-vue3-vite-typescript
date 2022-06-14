<script setup lang="ts">
import HeaderBreadcrumb from "./HeaderBreadcrumb.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const routes = router.getRoutes();
</script>

<template>
  <el-row style="height: 100%">
    <!-- xs为响应式布局属性 -->
    <el-col :xs="12" :span="20"> <HeaderBreadcrumb /> </el-col>
    <el-col :xs="12" :span="4">
      <el-input placeholder="Type something">
        <template #prefix>
          <el-icon class="el-input__icon"><Search /></el-icon>
        </template>
      </el-input>
    </el-col>
  </el-row>
</template>

<style scoped>
.el-col {
  display: flex;
  align-items: center;
}
</style>
