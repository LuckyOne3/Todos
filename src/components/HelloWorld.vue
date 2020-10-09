<template lang="pug">
  .wrapper-my
    .container
      transition-group.gag(name='list-complete' tag="div")
        todo(v-for='(item, index) in todos'
          :key='item.id'
          :todoData='item'
          :todoIndex='index'
          :arrayLenght='todos.length')
</template>

<script>
import todo from './todo.vue'

export default {
  components: {
    todo
  },
  computed: {
    todos () {
      return this.$store.getters.todos
    }
  },
  methods: {
    deleteTodo: function (index) {
      this.$store.dispatch('deleteTodo', index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .wrapper-my
    height 100vh
    width 100vw
    background-image url("../assets/triangles-download.svg")
    background-size cover
  .container
    width 1024px
    position: relative
    margin auto
    padding-left 0px
    padding-top 5vh
    .gag
      display flex
      flex-wrap wrap
      align-items end
</style>
