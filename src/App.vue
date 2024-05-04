<template lang="pug">
.main-layout
    NavigationInfo.navigation
    .mobile-navigation
        img(alt="Open icon" src="../assets/hamburger_icon.png")
    .right-layout(:class="{'light-background' : $route.name === 'Blog' || $route.name === 'About'}")
        ProjectsLayout(v-if="$route.name === 'Projects'")
        BlogLayout(v-if="$route.name === 'Blog'")
        AboutLayout(v-if="$route.name === 'About'")
</template>

<script>

import NavigationInfo from "@/components/NavigationInfo.vue";
import ProjectsLayout from "@/components/ProjectsLayout.vue";
import BlogLayout from "@/components/BlogLayout.vue";
import AboutLayout from "@/components/AboutLayout.vue";

export default {
    name: 'App',
    components: {
        NavigationInfo,
        ProjectsLayout,
        BlogLayout,
        AboutLayout,
    },
}
</script>

<style scoped lang="scss">

.main-layout{
    display: grid;
    grid-template-columns: 2fr 8fr;

    .right-layout{
        padding: 60px 20px;
        background-color: white;
        transition: background-color 0.6s ease;

        &.light-background{
            background-color: var(--background-color);
        }
    }
}

@media screen and (max-width: 2200px) {
    .main-layout{
        display: grid;
        grid-template-columns: 2fr 6fr;
    }
}

@media screen and (max-width: 1919px){
    .main-layout{
        grid-template-columns: 3fr 6fr;
    }
}

@media screen and (max-width: 1200px){
    .main-layout{
        grid-template-columns: 1fr;
    }
}


</style>
