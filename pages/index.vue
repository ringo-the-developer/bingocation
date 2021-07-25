<template lang="pug">
  .bingo
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
