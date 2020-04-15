import { mount } from '@vue/test-utils'
import { RangeFilter } from '@/components/filters/'

describe('RangeFilter.vue', () => {
  let wrapper:any = null

  beforeEach(() => {
    wrapper = mount(RangeFilter, {
      propsData: {
        name: 'name',
        label: 'label'
      }
    })
  })

  it('sets value property on inner input', () => {
    const inputElement1 = wrapper.find('.range-from').element as HTMLInputElement
    expect(inputElement1.value).toBe('')
    const inputElement2 = wrapper.find('.range-to').element as HTMLInputElement
    expect(inputElement2.value).toBe('')
  })

  it('triggers event after value change', () => {
    wrapper.find('.range-from').setValue(5)
    wrapper.find('.range-to').setValue(20)
    wrapper.find('.range-from').trigger('change')
    wrapper.find('.range-to').trigger('change')
    expect(wrapper.emitted().input[1]).toEqual([[5, 20]])
  })

  it('can clear a value fields', () => {
    wrapper.find('.range-from').setValue(5)
    wrapper.find('.range-to').setValue(20)
    wrapper.find('.range-from').trigger('change')
    wrapper.find('.range-to').trigger('change')
    expect(wrapper.emitted().input[1]).toEqual([[5, 20]])
    wrapper.find('button.clear-from').trigger('click')
    wrapper.find('button.clear-to').trigger('click')
    expect(wrapper.emitted().input[3]).toEqual([[null, null]])
  })
})
