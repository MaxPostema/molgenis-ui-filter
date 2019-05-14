export default class BaseMapper {
  protected mapper: any

  constructor (mapper: object) {
    this.mapper = mapper
  }

  public promise ():any {
    return new Promise((resolve, reject) => {
      this.mapping(resolve, reject)
    })
  }

  protected mapping (resolve:any, reject:any) {
    resolve()
  }
}
