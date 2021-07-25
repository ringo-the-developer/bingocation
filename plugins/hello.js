export default ({app}, inject) => {
  // eslint-disable-next-line no-console
  inject("hello", msg => console.log(`Hello ${msg}!`))
}