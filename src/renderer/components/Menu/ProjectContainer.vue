<template lang="pug">
  .project-container
    a.project-button.button.is-info.is-outlined(v-for="project in projects")
      h1 {{ project }}
</template>

<script>
export default {
  computed: {
    projects () {
      return this.$store.state.master.projects
    }
  }
}
</script>

<style lang="scss">
  .project-container {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    list-style: none;
    align-items: center;
    justify-content: center;
        

    .project-button {
      display: flex;
      border-radius: 10px;
      height: 200px;
      width: 200px;
      text-align: center;
      margin: 10px;
      padding: 20px;
      
      h1 {
        text-transform: uppercase;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: auto;
        font-size: 36px;
      }
    }
  }
</style>
