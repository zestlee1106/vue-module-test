import { defineComponent, h, isVue2 } from 'vue-demi'

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
    if (isVue2) {
      return h(
        'button',
        {
          on: {
            click: this.onClick
          }
        },
        this.$slots.default ?? 'test'
      )
    }

    return h(
      'button',
      {
        onClick: this.onClick
      },
      this.$slots.default ? this.$slots.default() : 'test'
    )
  }
})
