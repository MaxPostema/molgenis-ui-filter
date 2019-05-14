import BaseMapper from './BaseMapper'

export default class UrlMapper extends BaseMapper {
  mapping (resolve:any, reject:any) {
    this.mapper.addOrExtend('url', 'string-filter', {
      label: 'URL'
    })
    resolve()
  }
}
