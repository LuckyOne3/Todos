<template lang="pug">
  transition(name='modal-fade')
    .modal-backdrop(ref="modalBack")
      .modal
        slot
</template>

<script>
export default {
  name: 'modal',
  methods: {
    close () {
      this.$emit('close')
    }
  },
  mounted () {
    let that = this
    document.addEventListener('click', function (item) {
      if (item.target === that.$refs['modalBack']) {
        that.close()
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .modal-backdrop
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    background-color rgba(0, 0, 0, 0.6)
    display flex
    justify-content center
    align-items center
    z-index 9999
  .modal
    background #FFFFFF
    box-shadow: 0 6px 18px rgba(14,21,47,.1), 0 -2px 6px rgba(14,21,47,.02)
    overflow-x auto
    display flex
    flex-direction column
    width 40vw
    height 20vh
    border-radius 7px
</style>
