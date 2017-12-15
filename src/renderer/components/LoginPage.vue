<template lang="pug">
  .login
    input.input(v-model="username", @keyup.enter="login")
</template>

<script>
export default {
  data () {
    return {
      username: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', this.username)
        .then(() => {
          this.$router.push({ name: 'landing-page' })
        })
    }
  }
}
</script>

<style lang="scss">

</style>
