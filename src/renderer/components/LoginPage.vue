<template lang="pug">
  .login.has-text-centered
    h1.title Logga in då
    input.input(v-model="username", @keyup.enter="login")
    a(@click="login", href) jajamen
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
