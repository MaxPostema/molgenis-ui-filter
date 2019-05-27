import BaseMapper from './BaseMapper'

export default class UrlMapper extends BaseMapper {
  mapping (resolve:any, reject:any) {

    // NOTE: this is a test URL mapping
    const urlParams = new URLSearchParams(window.location.search);
    const string = urlParams.get('string');
    const checkbox = urlParams.get('checkbox');

    if( string !== null ) {
      this.mapper.addOrExtend('string', 'string-filter', {
        label: string
      })
    }

    if( checkbox !== null ) {
      this.mapper.addOrExtend('string', 'string-filter', {
        label: checkbox,
        options: [ { value: true, text: 'Yes' }, { value: false, text: 'No' }, { value: null, text: 'N/A' } ]
      })
    }

    resolve()
  }
}
