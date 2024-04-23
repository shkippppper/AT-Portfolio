<template lang="pug">
.project-layout
    .filter-layout
        .filter(
            v-for="filter in allFilters"
            :key="filter"
            :class="{ selected: selectedFilters.includes(filter) }"
            @click="toggleFilter(filter)"
        ) {{ filter }}
    transition-group.grid-layout(name="fade" tag="div" class="grid-layout" :css="true")
        ProjectCard(
            v-for="card in filteredProjects"
            :key="card.id"
            :data="card"
        )
</template>


<script>
import ProjectCard from "@/components/ProjectCard.vue";
import projectData from "@/models/ProjectData";

export default {
    name: 'ProjectsLayout',
    components: {
        ProjectCard
    },
    data() {
        return{
            projects: projectData,
            selectedFilters: ["All"]
        }
    },
    computed: {
        allFilters(){
            let filters = ['All']
            this.projects.forEach(project => {
                project.tags.forEach(tag => {
                    if (!filters.includes(tag)){
                        filters.push(tag)
                    }
                })
            })
            return filters
        },
        filteredProjects() {
            if (this.selectedFilters.length === 0 || this.selectedFilters.includes('All')) {
                return this.projects
            }
            return this.projects.filter(project =>
                project.tags.some(tag => this.selectedFilters.includes(tag))
            )
        }
    },
    methods: {
        toggleFilter(filter) {
            if (filter === 'All') {
                if (this.selectedFilters.includes('All')) {
                    this.selectedFilters = []
                } else {
                    this.selectedFilters = ['All']
                }
            } else {
                const index = this.selectedFilters.indexOf(filter)
                if (index >= 0) {
                    this.selectedFilters.splice(index, 1)
                } else {
                    this.selectedFilters = this.selectedFilters.filter(f => f !== 'All')
                    this.selectedFilters.push(filter)
                }
            }
        }
    }
}

</script>
<style scoped lang="scss">
.project-layout{
    padding: 60px 20px;

    .filter-layout{
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 20px;

        .filter{
            padding: 4px 8px;
            background-color: var(--background-color);
            border-radius: 4px;
            cursor: pointer;
            opacity: 0.4;
            color: var(--text-color);

            &:hover{
                opacity: 1;
            }

            &.selected{
                font-weight: 600;
                opacity: 1;
            }
        }
    }

    .grid-layout{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.5s ease;
    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
    }
    .fade-enter-to, .fade-leave {
        opacity: 1;
    }
}
</style>
