<template lang="pug">
  .sheet
    h1 Sheet
    .wrapper
      table
        tbody
          tr
            td.a1(@click="addCheck('a1')", :class="{checked: state.a1IsActive}") 0
            td.a2(@click="addCheck('a2')", :class="{checked: state.a2IsActive}") 0
            td.a3(@click="addCheck('a3')", :class="{checked: state.a3IsActive}") 0
            td.a4(@click="addCheck('a4')", :class="{checked: state.a4IsActive}") 0
            td.a5(@click="addCheck('a5')", :class="{checked: state.a5IsActive}") 0
          tr
            td.b1(@click="addCheck('b1')", :class="{checked: state.b1IsActive}") 0
            td.b2(@click="addCheck('b2')", :class="{checked: state.b2IsActive}") 0
            td.b3(@click="addCheck('b3')", :class="{checked: state.b3IsActive}") 0
            td.b4(@click="addCheck('b4')", :class="{checked: state.b4IsActive}") 0
            td.b5(@click="addCheck('b5')", :class="{checked: state.b5IsActive}") 0
          tr
            td.c1(@click="addCheck('c1')", :class="{checked: state.c1IsActive}") 0
            td.c2(@click="addCheck('c2')", :class="{checked: state.c2IsActive}") 0
            td.c3(@click="addCheck('c3')", :class="{checked: state.c3IsActive}").free FREE
            td.c4(@click="addCheck('c4')", :class="{checked: state.c4IsActive}") 0
            td.c5(@click="addCheck('c5')", :class="{checked: state.c5IsActive}") 0
          tr
            td.d1(@click="addCheck('d1')", :class="{checked: state.d1IsActive}") 0
            td.d2(@click="addCheck('d2')", :class="{checked: state.d2IsActive}") 0
            td.d3(@click="addCheck('d3')", :class="{checked: state.d3IsActive}") 0
            td.d4(@click="addCheck('d4')", :class="{checked: state.d4IsActive}") 0
            td.d5(@click="addCheck('d5')", :class="{checked: state.d5IsActive}") 0
          tr
            td.e1(@click="addCheck('e1')", :class="{checked: state.e1IsActive}") 0
            td.e2(@click="addCheck('e2')", :class="{checked: state.e2IsActive}") 0
            td.e3(@click="addCheck('e3')", :class="{checked: state.e3IsActive}") 0
            td.e4(@click="addCheck('e4')", :class="{checked: state.e4IsActive}") 0
            td.e5(@click="addCheck('e5')", :class="{checked: state.e5IsActive}") 0
      .bingo(v-if="bingo") Bingo!!!
</template>

<script>
export default {
  data(){
    return{
      state: {
        a1IsActive: false,
        a2IsActive: false,
        a3IsActive: false,
        a4IsActive: false,
        a5IsActive: false,
        b1IsActive: false,
        b2IsActive: false,
        b3IsActive: false,
        b4IsActive: false,
        b5IsActive: false,
        c1IsActive: false,
        c2IsActive: false,
        c3IsActive: false,
        c4IsActive: false,
        c5IsActive: false,
        d1IsActive: false,
        d2IsActive: false,
        d3IsActive: false,
        d4IsActive: false,
        d5IsActive: false,
        e1IsActive: false,
        e2IsActive: false,
        e3IsActive: false,
        e4IsActive: false,
        e5IsActive: false,
      },
      bingo: false,
    }
  },
  // computed(){
  // },
  methods: {
    checkBingo(){
      if(this.state.a1IsActive && this.state.a2IsActive && this.state.a3IsActive && this.state.a4IsActive && this.state.a5IsActive 
      || this.state.b1IsActive && this.state.b2IsActive && this.state.b3IsActive && this.state.b4IsActive && this.state.b5IsActive 
      || this.state.c1IsActive && this.state.c2IsActive && this.state.c3IsActive && this.state.c4IsActive && this.state.c5IsActive 
      || this.state.d1IsActive && this.state.d2IsActive && this.state.d3IsActive && this.state.d4IsActive && this.state.d5IsActive 
      || this.state.e1IsActive && this.state.e2IsActive && this.state.e3IsActive && this.state.e4IsActive && this.state.e5IsActive 
      || this.state.a1IsActive && this.state.b1IsActive && this.state.c1IsActive && this.state.d1IsActive && this.state.e1IsActive 
      || this.state.a2IsActive && this.state.b2IsActive && this.state.c2IsActive && this.state.d2IsActive && this.state.e2IsActive 
      || this.state.a3IsActive && this.state.b3IsActive && this.state.c3IsActive && this.state.d3IsActive && this.state.e3IsActive 
      || this.state.a4IsActive && this.state.b4IsActive && this.state.c4IsActive && this.state.d4IsActive && this.state.e4IsActive 
      || this.state.a5IsActive && this.state.b5IsActive && this.state.c5IsActive && this.state.d5IsActive && this.state.e5IsActive 
      || this.state.a1IsActive && this.state.b2IsActive && this.state.c3IsActive && this.state.d4IsActive && this.state.e5IsActive 
      || this.state.a5IsActive && this.state.b4IsActive && this.state.c3IsActive && this.state.d2IsActive && this.state.e1IsActive){
        this.bingo = true
      }
    },
    addCheck(coord){
      // eslint-disable-next-line no-console
      console.log(`${coord}`);
      this.state[`${coord}IsActive`] = true
      // eslint-disable-next-line no-undef
      this.checkBingo()
    },
  },
}
</script>

<style lang="sass" scoped>
.wrapper
  display: flex
  flex-wrap: wrap
  flex-shrink: 0
table
  flex-shrink: 0
  border-collapse: collapse
td
  text-align: center
  vertical-align: middle
  width: 48px
  height: 48px
  border: 2px solid #000
  font-size: 20px
  font-weight: bold
  line-height: 1
  cursor: pointer
  &.free
    font-size: 14px
  &.checked
    cursor: default
    background: #ffcece
    position: relative
    &::after
      content: ""
      position: absolute
      top: 4px
      left: 6px
      width: 40px
      height: 40px
      background: url("~assets/checked.svg") no-repeat top left / cover
      opacity: .9
.bingo
  flex-shrink: 0
  margin-left: 16px
  color: #ff3535
  font-size: 32px
  font-weight: 900
</style>