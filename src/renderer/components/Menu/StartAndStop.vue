<template lang="pug">
  .start-stop-container
    button.start-button {{ start }}
    button.stop-button {{ stop }}
</template>

<script>
    export default {
      data () {
        return {
          start: 'start',
          stop: 'stop'
        }
      }
    }
</script>

<style lang="scss">
  .stop-button{

  }
</style>
