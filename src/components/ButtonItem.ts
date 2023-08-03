import { defineComponent, h } from 'vue-demi'

export default defineComponent({
  name: 'ButtonItem',
  props: {
    onClick: {
      type: Function,
      default: () => {
        console.log('default')
      }
    }
  },
  render() {
    const slot = this.$slots.default?.()

    return h(
      'button',
      {
        onClick: this.onClick
      },
      slot
    )
  }
})
