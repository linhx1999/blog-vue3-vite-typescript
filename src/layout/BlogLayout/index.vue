<script setup lang="ts">
import BlogAside from "./BlogAside/index.vue";
import HeaderLayout from "./HeaderLayout/index.vue";
import MainAside from "./MainAside.vue";
</script>

<template>
  <el-container style="height: 100%">
    <el-aside>
      <BlogAside />
    </el-aside>

    <el-container>
      <el-header>
        <HeaderLayout />
      </el-header>

      <el-main>
        <el-row :gutter="20">
          <el-col :span="20">
            <router-view />
          </el-col>

          <el-col :span="4">
            <MainAside />
          </el-col>
        </el-row>

        <el-footer> Footer </el-footer>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped></style>
