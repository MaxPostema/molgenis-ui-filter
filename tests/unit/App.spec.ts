import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('StringFilter.vue', () => {
  const wrapper = shallowMount(App)

  it('matches the snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
