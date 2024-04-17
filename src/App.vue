<template lang="pug">
.main-layout
    NavigationInfo
</template>

<script>

import NavigationInfo from "@/components/NavigationInfo.vue";

export default {
  name: 'App',
  components: {
      NavigationInfo
  }
}
</script>

<style scoped lang="scss">


.main-layout{
    display: grid;
    grid-template-columns: 3fr 6fr;
}
</style>
