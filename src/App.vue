<template lang="pug">
.main-layout
    NavigationInfo
    ProjectsLayout
</template>

<script>

import NavigationInfo from "@/components/NavigationInfo.vue";
import ProjectsLayout from "@/components/ProjectsLayout.vue";

export default {
  name: 'App',
  components: {
      NavigationInfo,
      ProjectsLayout,
  }
}
</script>

<style scoped lang="scss">


.main-layout{
    display: grid;
    grid-template-columns: 3fr 6fr;
}
</style>
