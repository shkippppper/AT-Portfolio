<template lang="pug">
.navigation-layout
    .top-info
        router-link.name(:to="{name: 'Projects'}" :class="{'active': $route.name === 'Projects'}" @click="routeChanged") Akaki Titberidze
        .position Software Engineer
        .navigation
            router-link(:to="{name: 'Projects'}" :class="{'active': $route.name === 'Projects'}" @click="routeChanged") Projects
            router-link(:to="{name: 'Blog'}" :class="{'active': $route.name === 'Blog'}" @click="routeChanged") Blog
            router-link(:to="{name: 'About'}" :class="{'active': $route.name === 'About'}" @click="routeChanged") About
    .bottom-info
        .socials-night
            .socials
                a(href="https://www.linkedin.com/in/akaki-titberidze-b5b9911b1/" target="_blank")
                    img(alt="Linkedin logo" src="@/assets/images/icons/linkedin_icon.svg")
                a(href="https://www.instagram.com/akakititberidze/" target="_blank")
                    img(alt="Instagram logo" src="@/assets/images/icons/instagram_icon.svg")
                a(href="https://github.com/shkippppper" target="_blank")
                    img(alt="Github logo" src="@/assets/images/icons/github_icon.png")
            .day-night-button(@click="toggleTheme")
                .day-night-container(:class="{'night': theme === 'dark'}")
                    .main-circle-container
                        .main-circle
                            .inside-circle(:class="{'night': theme === 'dark'}")
                    .left-top(:class="{'night': theme === 'dark'}")
                    .right-top(:class="{'night': theme === 'dark'}")
                    .middle-left(:class="{'night': theme === 'dark'}")
                    .middle-right(:class="{'night': theme === 'dark'}")
                    .left-bottom(:class="{'night': theme === 'dark'}")
                    .right-bottom(:class="{'night': theme === 'dark'}")
                    .middle-top(:class="{'night': theme === 'dark'}")
                    .middle-bottom(:class="{'night': theme === 'dark'}")
        .copyright © 2024 Akaki Titberidze
    slot

</template>

<script>
export default {
    name: "NavigationInfo",
    data(){
        return {
            theme: ""
        }
    },
    created() {
        this.theme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        document.documentElement.setAttribute('data-theme', this.theme);
    },
    methods: {
        routeChanged(){
            this.$emit('routeChanged')
        },
        toggleTheme() {
            this.theme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
            this.theme = this.theme === 'light' ? 'dark' : 'light'
            document.documentElement.setAttribute('data-theme', this.theme)
            localStorage.setItem('theme', this.theme)
        }
    }
}

</script>

<style scoped lang="scss">
.navigation-layout {
    padding: 60px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    height: 100vh;
    box-sizing: border-box;
    position: sticky;
    left: 0;
    top: 0;
    background-color: var(--background-color);

    .top-info {

        .name {
            all: unset;
            cursor: pointer;
            font-size: 45px;
            font-weight: 500;
            letter-spacing: -.02em;
            line-height: 1;
            color: var(--text-color);
            margin-bottom: 30px;

        }

        .position {
            font-size: 20px;
            color: var(--text-color-less);
            margin-bottom: 60px;

        }

        .navigation {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 15px;

            a {
                all: unset;
                cursor: pointer;
                font-size: 20px;
                font-weight: 400;
                letter-spacing: -.02em;
                line-height: 1;
                color: var(--primary-color);
                opacity: 0.6;

                &:hover{
                    opacity: 1;
                }

                &.active {
                    opacity: 1;
                    font-weight: 500;
                    color: var(--text-color);
                }
            }
        }
    }

    .bottom-info {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        gap: 20px;
        width: 100%;

        .socials-night{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;

            .socials {
                display: flex;
                justify-content: center;
                align-items: flex-start;
                gap: 10px;

                a {
                    display: block;
                    box-sizing: border-box;
                    padding: 10px;
                    background-color: var(--background-color-less);
                    width: 50px;
                    height: 50px;
                    border-radius: 50px;

                    &:hover{
                        background-color: var(--primary-color);
                    }
                }

                img {
                    width: 30px;
                    height: 30px;
                }
            }

            .day-night-button{
                cursor: pointer;

                .day-night-container{
                    width: 50px;
                    height: 50px;
                    position: relative;

                    .main-circle-container{
                        position: absolute;
                        width: 50px;
                        height: 50px;
                        border-radius: 40px;
                        left: 0;
                        top: 0;
                        overflow: hidden;

                        .main-circle{
                            width: 24px;
                            height: 24px;
                            border-radius: 20px;
                            background-color: var(--text-color);
                            position: absolute;

                            left: 13px;
                            top: 13px;
                            z-index: 5;
                        }

                        .inside-circle{
                            width: 24px;
                            height: 24px;
                            border-radius: 40px;
                            left: 0;
                            top: 0;
                            background-color: var(--background-color);
                            transform: translate(-30px, -30px);
                            transition: transform 1s ease;
                            z-index: 2;

                            &.night{
                                transform: translate(-6px, -6px);
                            }
                        }
                    }

                    .left-top,
                    .right-top,
                    .middle-left,
                    .middle-right,
                    .left-bottom,
                    .right-bottom,
                    .middle-top,
                    .middle-bottom{
                        width: 10px;
                        height: 3px;
                        background-color: var(--text-color);
                        position: absolute;
                        border-radius: 10px;
                        transform-origin: center;
                        transition: left 0.5s ease, top 0.5s ease, right 0.5s ease, bottom 0.5s ease, opacity 0.3s ease ;
                        opacity: 1;
                        z-index: 3;
                        &.night{
                            opacity: 0;
                        }
                    }

                    .left-top{
                        top: 9px;
                        left: 6px;
                        transform: rotate(45deg);
                        &.night{
                            top: 24px;
                            left: 21px;
                        }
                   }
                    .right-top{
                        top: 9px;
                        right: 6px;
                        transform: rotate(-45deg);
                        &.night{
                            top: 24px;
                            right: 21px;
                        }
                    }
                    .middle-left{
                        top: 22px;
                        transform: translateY(50%);
                        left: 0;
                        &.night{
                            top: 22px;
                            left: 24px;
                        }
                    }
                    .middle-right{
                        top: 22px;
                        transform: translateY(50%);
                        right: 0;
                        &.night{
                            top: 22px;
                            right: 24px;
                        }
                    }
                    .left-bottom{
                        bottom: 9px;
                        left: 6px;
                        transform: rotate(-45deg);
                        &.night{
                            bottom: 24px;
                            left: 21px;
                        }
                    }
                    .right-bottom{
                        bottom: 9px;
                        right: 6px;
                        transform: rotate(45deg);
                        &.night{
                            bottom: 24px;
                            right: 21px;
                        }
                    }
                    .middle-top{
                        left: 20px;
                        top: 3px;
                        transform: rotate(90deg);
                        &.night{
                            left: 20px;
                            top: 24px;
                        }
                    }
                    .middle-bottom{
                        left: 20px;
                        bottom: 3px;
                        transform: rotate(90deg);
                        &.night{
                            left: 20px;
                            bottom: 24px;
                        }
                    }
                }
            }
        }
        .copyright{
            color: var(--main-color);
        }
    }
}
@media screen and (max-width: 1440px){
    .navigation-layout {
        padding: 30px;
    }
}

</style>