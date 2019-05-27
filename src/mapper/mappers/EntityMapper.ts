import BaseMapper from './BaseMapper'
// @ts-ignore
import api from '@molgenis/molgenis-api-client'

export default class EntityMapper extends BaseMapper {
  mapping (resolve:any, reject:any) {
    api.get(`/api/v2/${this.mapper.entity}?num=10000`).then((response: any) => {
      console.log(response)
      response.meta.attributes.forEach((attribute:any) => {

        // NOTE: this is a test entity mapping
        switch (attribute.fieldType) {
          case "STRING":
          case "SCRIPT":
            this.mapper.addOrExtend(attribute.name, 'string-filter', {
              label: attribute.label
            })
            break
          case "XREF":
          case "MREF":
            this.mapper.addOrExtend(attribute.name, 'checkbox-filter', {
              label: attribute.label,
              options: [ { value: true, text: 'Yes' }, { value: false, text: 'No' }, { value: null, text: 'N/A' } ]
            })
            break
        }
      })

      resolve()
    })
  }
}
