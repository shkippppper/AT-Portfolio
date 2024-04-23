<template lang="pug">
.navigation-layout
    .top-info
        .name Akaki Titberidze
        .position Software Engineer
        .navigation
            p.active Projects
            p Blog
            p About
    .bottom-info
        .socials
            a(href="https://www.google.com/")
                img(alt="Vue logo" src="../assets/logo.png")
            a(href="https://www.google.com/")
                img(alt="Vue logo" src="../assets/logo.png")
            a(href="https://www.google.com/")
                img(alt="Vue logo" src="../assets/logo.png")
            a(href="https://www.google.com/")
                img(alt="Vue logo" src="../assets/logo.png")
        .copyright © 2024 Akaki Titberidze


</template>

<script>
export default {
    name: "NavigationInfo",

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

    .top-info {

        .name {
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

            p {
                cursor: pointer;
                font-size: 20px;
                font-weight: 400;
                letter-spacing: -.02em;
                line-height: 1;
                color: var(--primary-color);

                &.active {
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

        .socials {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            gap: 10px;
            a {
                display: block;
                box-sizing: border-box;
                padding: 10px;
                background-color: var(--background-color);
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

        .copyright{
            color: var(--main-color);
        }
    }
}

</style>