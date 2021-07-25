<template lang="pug">
  .screen
    h1 Screen
    .wrapper
      .dedama.type5 70
      .dedama.type4 55
      .dedama.type2 21
      .dedama.type3 36
      .dedama.type1 1


</template>

<script>
export default {
  
}
</script>

<style lang="sass" scoped>
.wrapper
  display: flex
  flex-wrap: wrap
  margin-right: -4px
.dedama
  display: flex
  justify-content: center
  align-items: center
  margin-right: 4px
  border: 1px solid #000
  border-radius: 32px
  width: 32px
  height: 32px
  &.type1
    background: linear-gradient(to top, white 25%, #ff5656 55%)
  &.type2
    background: linear-gradient(to top, white 25%, #5bd45b 55%)
  &.type3
    background: linear-gradient(to top, white 25%, #a5a5a5 55%)
  &.type4
    background: linear-gradient(to top, white 25%, #f956f9 55%)
  &.type5
    background: linear-gradient(to top, white 25%, #ffc14f 55%)
</style>