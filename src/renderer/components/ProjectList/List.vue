<template lang="pug">
  section
    .container
      .field.has-addons
        .control
          input.input(type="text" v-model="search" placeholder="Text input")
        .control
          a.button.is-info Search
      .columns
        .column(v-for="item in filteredProjects" transition="item") {{ item.text }}
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        projects: [{
          'text': 'first item'
        },
        {
          'text': 'second item'
        },
        {
          'text': 'third item'
        },
        {
          'text': 'fourth item'
        }]
      }
    },
    computed: {
      filteredProjects () {
        return this.projects.filter(project => {
          return project.text.toLowerCase().includes(this.search.toLowerCase())
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .title {
    color: #888;
    font-size: 18px;
    font-weight: initial;
    letter-spacing: .25px;
    margin-top: 10px;
  }

  .items { margin-top: 8px; }

  .item {
    display: flex;
    margin-bottom: 6px;

    .name {
      color: #6a6a6a;
      margin-right: 6px;
    }

    .value {
      color: #35495e;
      font-weight: bold;
    }
  }
</style>
