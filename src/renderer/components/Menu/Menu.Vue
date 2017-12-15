<template lang="pug">
    .container
        project-container
        start-and-stop
</template>
    
<script>
import ProjectContainer from '@/components/menu/ProjectContainer'
import AddAndRemove from '@/components/menu/AddAndRemove'
import StartAndStop from '@/components/menu/StartAndStop'

export default {
  components: {
    ProjectContainer,
    AddAndRemove,
    StartAndStop
  }
}
</script>

<style>

</style>
