<template lang="pug">
  .list-complete-item
    .todo-wrapper(v-if='arrayLenght === todoIndex + 1' @click="goToEdit(todoId)")
      .todo-inner.grey-back
        eva-icon.display-center(name='plus' animation="" fill="#969696" width="24%" height="24%" )
    .todo-wrapper(v-else)
      .todo-inner
        modal(v-show='isModalVisible', @close='closeModal')
          .modal-header
            div Are you sure you want to delete
              span.modal-title-name {{ ' ' + todoData.title}}?
            eva-icon(name='close-outline' animation="pulse" fill="black" @click="closeModal")
          .modal-body
            .modal-body-no(@click="closeModal") No
            .modal-body-yes(@click="deleteTodoTimeOut(todoIndex)") Yes
        .todo-title
          .todo-title-text {{todoData.title}}
          .todo-title-buttons
            eva-icon(name='edit-2' animation="pulse" fill="limegreen" @click="goToEdit(todoData.id)")
            eva-icon(name='trash' animation="pulse" fill="red" @click="showModal")
        .todo-body
          .whatTodo(v-for="whatTodo in todoData.tasks" v-if="!whatTodo.completed") {{whatTodo.title}}
</template>

<script>
import modal from './modal.vue'

export default {
  name: 'todo',
  components: {
    modal
  },
  props: {
    arrayLenght: {
      type: Number,
      default () {
        return 0
      }
    },
    todoIndex: {
      type: Number,
      default () {
        return 0
      }
    },
    todoData: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      isModalVisible: false
    }
  },
  computed: {
    todoId () {
      return this.$store.getters.todoId + 1
    }
  },
  methods: {
    deleteTodo: function (index) {
      this.$store.dispatch('deleteTodo', index)
    },
    deleteTodoTimeOut: function (index) {
      let that = this
      this.closeModal()
      setTimeout(function () { that.$store.dispatch('deleteTodo', index) }, 300)
    },
    showModal () {
      this.isModalVisible = true
    },
    closeModal () {
      this.isModalVisible = false
    },
    goToEdit: function (index) {
      this.$router.push({name: 'todoedit', params: { todoid: index }})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .todos
    flex: 0 0 33.333333%
    max-width: 33.333333%
  .todo-wrapper
    padding 15px
  .todo-inner
    padding 10px
    box-shadow: 0 6px 18px rgba(14,21,47,.1), 0 -2px 6px rgba(14,21,47,.02)
    background-color white
    border-radius 7px
    &:hover
      .todo-title-buttons
        opacity 1
  .todo-title
    font-size 20px
    padding-bottom 20px
    flex-direction row
    display flex
    justify-content space-between
  .todo-title-buttons
    display: flex
    flex-direction: row
    opacity 0
    transition: all 0.5s
  .todo-body
    flex-direction column
    display flex
    flex-wrap: wrap
  .whatTodo
    flex 1 1 auto
    padding-top 10px
    padding-bottom 5px
    margin-bottom 5px
    padding-left 5px
    border-left: 3px solid #fbd135
    font-size 18px
  .eva-hover
    padding-right  5px
    padding-left   5px
    &:hover
      cursor pointer
  .grey-back
    background-color: rgb(206, 202, 202)
    opacity 0.5
    transition 0.5s
    &:hover
      background-color: white
      opacity 1
      cursor pointer
  .display-center
    text-align center
  .list-complete-item
    transition: all 0.7s
    position relative
    border-radius 7px
    flex: 0 0 33.333333%
    max-width: 33.333333%
  .list-complete-enter, .list-complete-leave-to
    opacity: 0
  .list-complete-leave-active
    position: absolute
    flex: 0 0 33.333333%
    min-width: 33.333333%
  .modal-header,
  .modal-footer
    padding 15px
    display flex

  .modal-header
    border-bottom 1px solid #eeeeee
    font-size 20px
    justify-content space-between

  .modal-footer
    border-top 1px solid #eeeeee
    justify-content flex-end

  .modal-body
    position relative
    display flex
    justify-content space-between
    height 100%

  .modal-body-yes, .modal-body-no
    flex: 0 0 50%
    color white
    text-align center
    font-size 25px
    display flex
    justify-content: center
    align-items center
    transition 0.5s
    box-shadow: 0 6px 18px rgba(14,21,47,.1), 0 -2px 6px rgba(14,21,47,.02)
    &:hover
      cursor pointer
  .modal-body-yes
    background-color limegreen
    &:hover
      background-color lightness(limegreen, 40%)
  .modal-body-no
    background-color red
    &:hover
      background-color lightness(red, 40%)
  .modal-title-name
    font-weight bold
  .modal-fade-enter, .modal-fade-leave-active
    opacity 0
  .modal-fade-enter-active, .modal-fade-leave-active
    transition opacity 0.5s ease
</style>
