<template lang="pug">
.main-layout
    NavigationInfo.navigation(:class="{'is-active': isMobileSidebarToggled}")
    .mobile-navigation(:class="{'not-active': isMobileSidebarToggled}" @click="isMobileSidebarToggled = !isMobileSidebarToggled")
        img(alt="Open icon" src="@/assets/hamburger.png")
    .close-button(:class="{'is-active': !isMobileSidebarToggled}" @click="isMobileSidebarToggled = !isMobileSidebarToggled")
        img(alt="Close icon" src="@/assets/close_icon.svg")
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
    data() {
        return {
            isMobileSidebarToggled: false
        }
    },
    methods: {

    },
}
</script>

<style scoped lang="scss">

.main-layout{
    display: grid;
    grid-template-columns: 2fr 8fr;

    .mobile-navigation{
        display: none;
    }

    .close-button{
        display: none;
    }


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
            transition: transform 1s;
            z-index: 100;
            background-color: white;
            width: 100%;

            &.is-active{
                transform: translateX(0%);
            }
        }

        .right-layout{
            padding: 16px;
        }

        .mobile-navigation{
            cursor: pointer;
            display: block;
            position: absolute;
            left: 16px;
            top: 8px;
            transition: opacity 0.4s ease;

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
            transform: translateX(0%);
            transition: transform 1s;

            &.is-active{
                transform: translateX(300%);
            }

            img {
                width: 30px;
                transition: opacity 0.2s ease;

                &:hover {
                    opacity: 0.6;
                }
            }
        }
    }
}


</style>
