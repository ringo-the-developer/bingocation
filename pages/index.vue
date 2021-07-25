<template lang="pug">
  .bingo
    SheetTest
    hr
    Sheet
    hr
    Screen
</template>

<script>
export default {
  asyncData({app, $hello}){
    $hello('asyncData')
  },
  mounted(){
    this.$hello("mounted")
  },
}
</script>
