<template lang="pug">
.project-details
    h1 Project Details for {{ slug }}
</template>

<script>
export default {
    name: 'ProjectDetails',
    props: {
        slug: {
            type: String,
            required: true
        }
    }
}
</script>