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
  render(h2?: Function) {
    if (h2 && typeof h2 === 'function') {
      const slot = this.$slots.default
      return h2(
        'button',
        {
          onClick: this.onClick
        },
        slot
      )
    }

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
