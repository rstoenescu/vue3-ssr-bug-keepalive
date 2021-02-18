import { h, KeepAlive } from 'vue'

const MyComp = {
  setup () {
    return () => h('span')
  }
}

export default {
  setup () {
    return () => h('div', [
      h(KeepAlive, () => h(MyComp, { key: 'mykey' }))
    ])
  }
}
