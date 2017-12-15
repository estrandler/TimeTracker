<template lang="pug">

  .debug
    .field.has-addons
      .control
        input.input(type="text" v-model="projectName" placeholder="Text input")
      .control
        a.button.is-info(@click="addProject", href="#") Add project
    br
    a(@click="start", href="#") new period
    br
    a(@click="stop", href="#") end period
    ul
      li(v-for="period in periods") {{ period.project }} - {{ period.startTime }} - {{ period.endTime }}
</template>

<script>
export default {
  name: 'debug',
  data () {
    return {
      projectName: 'Placeholder'
    }
  },
  methods: {
    addProject () {
      this.$store.dispatch('addProject', this.projectName)
    },
    start () {
      this.$store.dispatch('startPeriod', this.projectName)
    },
    stop () {
      this.$store.dispatch('addProject', this.projectName)
    }
  },
  computed: {
    periods () {
      return this.$store.state.master.periods
    },
    projects () {
      return this.$store.state.master.projects
    }
  }
}
</script>

<style>

</style>
