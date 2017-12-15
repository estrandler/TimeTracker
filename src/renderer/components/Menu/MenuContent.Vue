<template lang="pug">
    .container
      project-container
      start-and-stop
</template>
    
<script>
import ProjectContainer from '@/components/Menu/ProjectContainer'
import AddAndRemove from '@/components/Menu/AddAndRemove'
import StartAndStop from '@/components/Menu/StartAndStop'

export default {
  components: {
    ProjectContainer,
    AddAndRemove,
    StartAndStop
  }
}
</script>

<style lang="scss">
  .container {
    width: 80vw;
  }

</style>
