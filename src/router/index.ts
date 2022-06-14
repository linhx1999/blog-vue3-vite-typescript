import { createRouter, createWebHashHistory } from "vue-router";
import { Document, CollectionTag, Collection } from "@element-plus/icons-vue";
import { title } from "@/settings";

const routes = [
  {
    path: "/",
    meta: {
      title,
    },
    component: () => import("@/layout/BlogLayout/index.vue"),
    children: [
      {
        path: "",
        meta: {
          title: "文章",
          icon: Document,
        },
        component: () => import("@/views/BlogArticles/index.vue"),
      },
      {
        path: "articles",
        name: "articles",
        meta: {
          isBlogAsideMenuItem: true,
          title: "文章",
          icon: Document,
        },
        component: () => import("@/views/BlogArticles/index.vue"),
      },
      {
        path: "articles/:id",
        name: "article",
        meta: {
          isBlogAsideMenuItem: false,
          title: "文章",
        },
        component: () => import("@/views/ViewArticle/index.vue"),
      },
      {
        path: "tags",
        name: "tag",
        meta: {
          isBlogAsideMenuItem: true,
          title: "标签",
          icon: CollectionTag,
        },
        component: () => import("@/views/BlogTag/index.vue"),
      },
      {
        path: "categories",
        name: "category",
        meta: {
          isBlogAsideMenuItem: true,
          title: "分类",
          icon: Collection,
        },
        component: () => import("@/views/BlogCategory/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
