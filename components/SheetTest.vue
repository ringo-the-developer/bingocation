<template lang="pug">
  .sheet-test
    h1 SheetTest
    .test1(:class="{checked: isActiveTest1}") test1
    .test2(@click="isActiveTest2 = !isActiveTest2", :class="{checked: isActiveTest2}") test2
</template>

<script>
export default {
  data(){
    return {
      isActiveTest1: true,
      isActiveTest2: false,
    }
  }
}
</script>

<style lang="sass" scoped>
.test1, .test2
  border: 1px solid #000
  font: 24px
  margin: 5px
  padding: 5px
  line-height: 1
  cursor: pointer
  &.checked
    background: red
</style>