<template lang="pug">
  div(id="app")
    transition(name="fade" mode="out-in")
      router-view
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
  html,body
    margin: 0
    padding: 0
    font-family: 'Raleway', sans-serif
  .fade-enter-active, .fade-leave-active
    transition: opacity .5s
  .fade-enter, .fade-leave-to
    opacity: 0
  .eva-hover
    svg
      transition all 0.5s
  .nothingToDo
    svg
      fill: grey!important
</style>
