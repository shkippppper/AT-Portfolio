<template lang="pug">
.project-details
    h1 {{projectData.title}}
    TableContentDetails(
        v-if="Object.keys(projectData).length > 0"
        :projectData="projectData"
        @contentClicked="contentClicked"
    )
    component(:is="selectedComponent" :slug="slug")
</template>

<script>
import TableContentDetails from "@/components/TableContentDetails.vue";
import ProjectEchoesOfTheUnderHalls from "@/views/ProjectEchoesOfTheUnderHalls.vue";
import echoesOfTheUnderhallsData from "@/models/ProjectContentData";

export default {
    name: 'ProjectDetails',
    components: {
        TableContentDetails,
    },
    props: {
        slug: {
            type: String,
            required: true
        },
    },
    data(){
        return {
            projectData: {},
            selectedComponent: null
        }
    },
    watch: {
        slug: {
            immediate: true,
            handler(newSlug) {
                switch (newSlug) {
                    case 'echoes-of-the-underhalls':
                        this.projectData = echoesOfTheUnderhallsData;
                        this.selectedComponent = ProjectEchoesOfTheUnderHalls;
                        break;
                    default:
                        this.projectData = {};
                        this.selectedComponent = null;
                        break;
                }
            }
        }
    },

    methods: {
        contentClicked(name){
            const element = document.getElementById(name)
            if (element) {
                element.scrollIntoView({ behavior: "smooth" })
            }
        }
    },
}
</script>

<style scoped lang="scss">
.project-details {
    h1{
        margin: 0 auto 40px;
        max-width: 800px;
        font-size: 46px;
        font-weight: 500;
        line-height: 1.2;
        letter-spacing: -.02em;
        text-align: center;
        color: var(--text-color);
    }
}

@media screen and (max-width: 1200px){
    .project-details {
        h1{
            padding: 0 44px;
            margin: 0 auto 20px;
            font-size: 36px;
            font-weight: 500;
        }
    }
}


</style>