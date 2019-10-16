import { mount } from '@vue/test-utils'
import { ActiveFilters } from '@/components'

describe('ActiveFilters.vue', () => {
  const wrapper = mount(ActiveFilters, {
    propsData: {
      value: {
        string: 'blah',
        checkbox: ['red']
      },
      filters: [ {
        name: 'string',
        label: 'String',
        description: 'search by string',
        placeholder: 'placeholder',
        type: 'string-filter',
        collapsable: false
      }, {
        name: 'checkbox',
        label: 'Checkbox',
        collapsed: false,
        bulkOperation: true,
        options: [{ value: 'red', text: 'Red' }, { value: 'green', text: 'Green' }, { value: 'blue', text: 'Blue' }],
        type: 'checkbox-filter'
      }, {
        name: 'checkbox2',
        label: 'Checkbox',
        collapsed: false,
        bulkOperation: true,
        options: [{ value: 'red', text: 'Red' }, { value: 'green', text: 'Green' }, { value: 'blue', text: 'Blue' }],
        type: 'checkbox-filter'
      }]
    }
  })

  it('matches snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('removes filter values on click', () => {
    // @ts-ignore
    wrapper.vm.removeFilter({ key: 'string' })
    expect(wrapper.emitted().input[0][0]).toEqual({ checkbox: [ 'red' ] })
    // @ts-ignore
    wrapper.vm.removeFilter({ key: 'checkbox', subKey: 'red' })
    expect(wrapper.emitted().input[1][0]).toEqual({ 'checkbox': [], string: 'blah' })
  })
})