<template lang="pug">
  .page-to-edit-wrapper.wrapper-my
    .page-to-edit-inner
      .page-to-edit-left-side
        .page-to-edit-left-side-inner.mb-15(@click="goToHomeWithoutSave")
          eva-icon(name='arrow-ios-back-outline' animation="pulse" width="100%" height="100%" fill="black")
      .page-to-edit-right-side
        .page-to-edit-right-side-inner
          .tasks-bage-with-title
            input(v-model.trim="dataOut.title" type="text" placeholder="CJ Patoilo" @change="change")
          .tasks.flex-column
            .tasks-inputs.d-flex.ui-checkbox-wrapper(v-for="task in dataOut.tasks" )
              input.ui-checkbox(type="checkbox"  v-model="task.completed"   :id="task.title" @change="change")
              label.label--inline(class="check-box" :for="task.title" :class="{completed : task.completed}") {{task.title}}
            .new-task.tasks-inputs.d-flex.ui-checkbox-wrapper
              input.new-task(type="text" placeholder="+ Add new task")
        .button.button--round.button-primary.save(@click="goToHome") save and exit
</template>

<script>

export default {
  name: 'todoedit',
  data () {
    return {
      isModalVisible: false,
      todoId: this.$route.params.todoid,
      todoSave: this.$route.params.todosave,
      dataSaved: {},
      changed: false
    }
  },
  created () {
    this.saveData()
  },
  computed: {
    todo () {
      return this.$store.getters.todos.find(todo => todo.id === parseInt(this.todoId))
    },
    dataOut () {
      return this.todo || {}
    }
  },
  methods: {
    goToHome: function () {
      this.$router.push('/')
    },
    goToHomeWithoutSave: function () {
      this.$store.dispatch('saveTodo', this.dataSaved)
      this.goToHome()
    },
    change: function () {
      this.changed = true
    },
    saveData: function () {
      let copy = JSON.parse(JSON.stringify(this.dataOut))
      this.dataSaved = copy
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .new-task
    border none
  .save
    margin-top 20px
    float right
  .label--inline
    width 100%
    &:hover
      cursor pointer
  .completed
    text-decoration line-through
    transition 1s ease
    color: grey
  .wrapper-my
    height 100vh
    width 100vw
    background-image url("../assets/triangles-download.svg")
    background-size cover
  .flex-row-revers
    display flex
    flex-direction row-reverse
  .tasks-bage-with-title
    height 15vh
    padding 20px
    background-image url("https://lms.mai.ru/theme/moove/pix/default_course.jpg")
    background-size cover
  .flex-row
    display flex
    flex-direction row
  .flex-column
    display flex
    flex-direction column
  .d-flex
    display flex
  .page-to-edit-inner
    width 1024px
    margin auto
    border-radius 7px
    display flex
    padding-top 5vh
    justify-content space-between
  .page-to-edit-left-side
    padding 10px
    flex 1 1 7%
  .page-to-edit-right-side
    flex 1 1 93%
    padding 10px
  .page-to-edit-left-side-inner
    padding 10px
    background-color white
    box-shadow: 0 6px 18px rgba(14,21,47,.1), 0 -2px 6px rgba(14,21,47,.02)
    border-radius 7px
    display flex
    flex-wrap wrap
    justify-content space-between
    align-items center
    flex-direction row
  .page-to-edit-right-side-inner
    box-shadow: 0 6px 18px rgba(14,21,47,.1), 0 -2px 6px rgba(14,21,47,.02)
    border-radius 7px
    font-size 20px
    background-color white
    flex-direction column
    div
      display flex
  .tasks
    div
      display flex
    input
      display flex
  .tasks-inputs
    border-bottom 1px solid grey
    padding 10px
    align-items center
    &:last-child
      border none
    label
      margin-left 10px
  .mb-15
    margin-bottom 15px
    &:hover
      cursor pointer
  .eva-hover
    cursor pointer
  .ggg
    transform rotateY(180deg)
</style>
