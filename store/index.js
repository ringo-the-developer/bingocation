export const state = () => ({
  someValue: ""
})

export const actions = {
  setSomeValueToWhatever({ commit }){
    this.$hello('store action')
    const newValue = "whatever"
    commit("changeSomeValue", newValue)
  }
}