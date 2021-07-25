<template lang="pug">
  .sheet-test
    h1 SheetTest
    .test1(:class="{checked: isActiveTest1}") test1
    .test2(@click="isActiveTest2 = !isActiveTest2", :class="{checked: isActiveTest2}") test2
    button(@click="getData()") test
    #room
</template>

<script>
import firebase from '~/plugins/firebase'

export default {
  data(){
    return {
      isActiveTest1: true,
      isActiveTest2: false,
    }
  },
  methods: {
    getData(){
      const db = firebase.firestore()
      // const docRoom = db.collection('room')
      const docRoom = db.collection('room').doc('wMnerwq24oF48d7aOwWT')
      docRoom.get()
        .then(function(doc){
          document.getElementById("room").innerHTML = (doc.data().test)
        })
    },
    setData(){
      const db = firebase.firestore()
      const roomRef = db.collection('room')
      roomRef.doc('test2').set({
        name: "test2",
        state: "CA"
      })
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