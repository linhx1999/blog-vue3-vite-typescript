<script setup lang="ts">
defineProps<{
  articlesDescription: IArticlesDescription;
}>();
</script>

<template>
  <el-link :underline="false" :href="articlesDescription.url">
    <el-descriptions :title="articlesDescription.title">
      <el-descriptions-item :span="3" class-name="article-short-content">
        {{ articlesDescription.content_short }}
      </el-descriptions-item>

      <el-descriptions-item width="100px">
        <el-tag>{{ articlesDescription.status }}</el-tag>
      </el-descriptions-item>

      <el-descriptions-item label="发布时间" width="400px">
        {{ articlesDescription.display_time }}
      </el-descriptions-item>

      <el-descriptions-item>
        阅读 {{ articlesDescription.pageviews }}
      </el-descriptions-item>
    </el-descriptions>
  </el-link>
</template>

<style scoped>
.el-link {
  width: 100%;
  display: inline-block;
}
</style>
