<template lang="pug">
  .debug
    a(@click="start", href="#") new period
    br
    a(@click="stop", href="#") end period
    ul
      li(v-for="period in periods") {{ period.project }} - {{ period.startTime }} - {{ period.endTime }}
</template>

<script>
export default {
  name: 'debug',
  methods: {
    start () {
      this.$store.dispatch('startPeriod', 'project1')
    },
    stop () {
      this.$store.dispatch('stopPeriod', 'project1')
      this.$store.dispatch('addProject', 'testprojekt')
    }
  },
  computed: {
    periods () {
      return this.$store.state.master.periods
    }
  }
}
</script>

<style>

</style>
