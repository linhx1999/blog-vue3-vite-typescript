<script setup lang="ts"></script>

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
