// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import ProjectsLayout from '@/components/ProjectsLayout.vue'
import BlogLayout from '@/components/BlogLayout.vue'
import AboutLayout from '@/components/AboutLayout.vue'

const routes = [
    { path: '/', component: ProjectsLayout, name: 'Projects' },
    { path: '/blog', component: BlogLayout, name: 'Blog' },
    { path: '/about', component: AboutLayout, name: 'About' }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
