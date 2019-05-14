import BaseMapper from './BaseMapper'
import api from '@molgenis/molgenis-api-client'

export default class EntityMapper extends BaseMapper {
  mapping (resolve:any, reject:any) {
    api.get('/api/v2/sys_scr_ScriptType?num=10000').then((response: any) => {

      this.mapper.addOrExtend('te2t', 'string-filter', {
        label: 'Test'
      })
      this.mapper.addOrExtend('test', 'string-filter', {
        label: 'Test'
      })
      resolve()

    })
  }
}
