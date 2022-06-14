<script setup lang="ts"></script>

<template>
  <ElSpace direction="vertical">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <el-button class="button" text>Operation button</el-button>
        </div>
      </template>

      <div v-for="o in 4" :key="o" class="text item">
        {{ "List item " + o }}
      </div>
    </el-card>

    <el-card>
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <el-button class="button" text>Operation button</el-button>
        </div>
      </template>

      <div v-for="o in 7" :key="o" class="text item">
        {{ "List item " + o }}
      </div>
    </el-card>

    <el-card>
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <el-button class="button" text>Operation button</el-button>
        </div>
      </template>

      <div v-for="o in 10" :key="o" class="text item">
        {{ "List item " + o }}
      </div>
    </el-card>
  </ElSpace>
</template>

<style scoped></style>
