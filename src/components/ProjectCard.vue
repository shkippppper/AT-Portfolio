<template lang="pug">
.project-card(v-if="data")
    .hover-content
        .hover-background
        .details-container(v-if="data.tags")
            p {{data.name}}
            .tags
                .tag(v-for="tag in data.tags")
                    span(v-if="tag") {{tag}}
    .main-content
        img(alt="Vue logo" src="@/assets/images/icons/logo.png")
</template>

<script>
export default {
    name: "ProjectCard",
    props: {
        data: {
            type: Object,
            default: () => ({})
        }
    }
}
</script>

<style scoped lang="scss">
.project-card{
    background-color: var(--background-color);
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 20px;
    cursor: pointer;

    &:hover{
        .hover-content{
            .hover-background{
                opacity: 0.8;
            }
            .details-container{
                display: flex;
            }
        }
    }

    .main-content{
        width: 100%;
        height: 100%;
        border-radius: 20px;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            box-sizing: border-box;
        }


    }

    .hover-content{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .hover-background{
            position: absolute;
            left: 0;
            top: 0;
            opacity: 0;
            width: 100%;
            height: 100%;
            border-radius: 20px;
            background-color: var(--text-color);
            transition: opacity 0.2s ease;

        }

        .details-container{
            display: none;
            z-index: 3;
            transition: opacity 0.2s ease;
            color: var(--background-color);
            flex-direction: column;
            gap: 8px;
            justify-content: center;
            align-items: center;

            p{
                text-align: center;
                font-size: 32px;
            }

            .tags{
                display: flex;
                gap: 8px;
                .tag{
                    font-size: 18px;
                    padding: 4px 8px;
                    background-color: var(--background-color);
                    color: var(--text-color);
                    border-radius: 4px;
                }
            }
        }
    }
}

</style>