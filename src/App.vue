<template lang="pug">
.main-layout
    NavigationInfo.navigation(
        :class="{'is-active': isMobileSidebarToggled}"
        @routeChanged="isMobileSidebarToggled = false"
        @themeChanged="(newTheme) => {theme = newTheme}"
        )
        .close-button(
            :class="{'is-active': !isMobileSidebarToggled}"
            @click="isMobileSidebarToggled = !isMobileSidebarToggled"
            )
            img(alt="Close icon" src="@/assets/images/icons/close_icon.svg" :class="{'is-white': theme === 'dark'}")
    .mobile-navigation(
        :class="{'not-active': isMobileSidebarToggled}"
        @click="isMobileSidebarToggled = !isMobileSidebarToggled"
        )
        img(alt="Open icon" src="@/assets/images/icons/hamburger.png" :class="{'is-white': theme === 'dark'}")
    .right-layout
        ProjectsLayout(v-if="$route.name === 'Projects'" @cardClick="projectClicked")
        BlogLayout(v-if="$route.name === 'Blog'" @cardClick="blogClicked")
        AboutLayout(v-if="$route.name === 'About'")
        ProjectDetails(v-if="$route.name === 'ProjectDetails'" :slug="$route.params.slug")
        BlogDetails(v-if="$route.name === 'BlogDetails'" :slug="$route.params.slug")
</template>

<script>

import NavigationInfo from "@/components/NavigationInfo.vue";
import ProjectsLayout from "@/components/ProjectsLayout.vue";
import BlogLayout from "@/components/BlogLayout.vue";
import AboutLayout from "@/components/AboutLayout.vue";
import ProjectDetails from "@/components/ProjectDetails.vue";
import BlogDetails from "@/components/BlogDetails.vue";

export default {
    name: 'App',
    components: {
        BlogDetails,
        NavigationInfo,
        ProjectsLayout,
        BlogLayout,
        AboutLayout,
        ProjectDetails
    },
    data() {
        return {
            isMobileSidebarToggled: false,
            theme: ""
        }
    },
    created() {
        this.theme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        document.documentElement.setAttribute('data-theme', this.theme);
    },
    methods: {
        projectClicked(slug){
            this.$router.push({ name: 'ProjectDetails', params: { slug: slug } })
        },
        blogClicked(slug){
            this.$router.push({ name: 'BlogDetails', params: { slug: slug } })
        }
    },
}
</script>

<style scoped lang="scss">

.main-layout{
    display: grid;
    grid-template-columns: 2fr 8fr;
    background-color: var(--background-color);
    height: 100%;

    .mobile-navigation{
        display: none;
    }

    .close-button{
        display: none;
    }


    .right-layout{
        padding: 60px 20px;
        transition: background-color 0.2s ease;
        background-color: var(--background-color-less);

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

@media screen and (max-width: 1440px) {
    .main-layout{
        .right-layout {
            padding: 30px 32px;
        }
    }
}

@media screen and (max-width: 1200px){
    .main-layout{
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        grid-template-columns: 1fr;
        display: flex;
        flex-direction: column;

        .navigation{
            position: absolute;
            left: 0;
            top: 0;
            transform: translateX(-100%);
            transition: transform 1s ease, background-color 0.2s ease;
            z-index: 100;
            background-color: var(--background-color);
            width: 100%;

            &.is-active{
                transform: translateX(0%);
            }
        }

        .right-layout{
            padding: 8px 16px 80px;
            height: 100%;
            overflow-y: auto;
        }

        .mobile-navigation{
            cursor: pointer;
            position: absolute;
            left: 8px;
            top: 4px;
            transition: opacity 0.4s ease;
            width: 50px;
            height: 50px;
            border-radius: 50px;
            background-color: var(--background-color-less);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 30;

            &.not-active{
                opacity: 0;
                pointer-events: none;
            }

            img{
                width: 40px;
                transition: opacity 0.2s ease;

                &:hover {
                    opacity: 0.6;
                }

                &.is-white{
                    filter: invert(90%) sepia(93%) saturate(0%) hue-rotate(100deg) brightness(100%) contrast(119%);
                }
            }
        }

        .close-button {
            cursor: pointer;
            display: block;
            position: absolute;
            right: 16px;
            top: 8px;
            border-radius: 25px;
            overflow: hidden;
            width: 30px;
            height: 30px;
            z-index: 101;
            opacity: 1;
            transition: opacity 0.2s ease;

            &.is-active{
                opacity: 0;
                pointer-events: none;
            }

            img {
                width: 30px;
                transition: opacity 0.2s ease;

                &:hover {
                    opacity: 0.6;
                }

                &.is-white{
                    filter: invert(90%) sepia(93%) saturate(0%) hue-rotate(100deg) brightness(100%) contrast(119%);
                }
            }
        }
    }
}
</style>
