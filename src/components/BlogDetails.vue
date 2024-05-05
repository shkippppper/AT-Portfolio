<template lang="pug">
.blog-details
    h1 Blog Details for {{ slug }}
</template>

<script>
export default {
    name: 'BlogDetails',
    props: {
        slug: {
            type: String,
            required: true
        }
    }
}
</script>