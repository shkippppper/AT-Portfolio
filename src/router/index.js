// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import ProjectsLayout from '@/components/ProjectsLayout.vue'
import BlogLayout from '@/components/BlogLayout.vue'
import AboutLayout from '@/components/AboutLayout.vue'
import ProjectDetails from "@/components/ProjectDetails.vue";
import BlogDetails from "@/components/BlogDetails.vue";

const routes = [
    { path: '/', component: ProjectsLayout, name: 'Projects' },
    { path: '/blog', component: BlogLayout, name: 'Blog' },
    { path: '/about', component: AboutLayout, name: 'About' },
    { path: '/project/:slug', component: ProjectDetails, name: 'ProjectDetails' },
    { path: '/blog/:slug', component: BlogDetails, name: 'BlogDetails' },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
