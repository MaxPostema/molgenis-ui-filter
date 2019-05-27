import { EntityMapper, ConfigMapper, UrlMapper } from '@/mapper/mappers'

// TODO: add types
// TODO: add tests
// TODO: add mapper interface

export default class Mapper {
  private entity: string
  private mappers: object[]
  private selections: any = {}
  private filters: object[] = []

  constructor (entity: string) {
    this.entity = entity
    this.mappers = []
    this.mappers.push(new EntityMapper(this))
    this.mappers.push(new ConfigMapper(this))
    this.mappers.push(new UrlMapper(this))
  }

  public addOrExtend (name: string, type: string, properties: object, defaultValue:any = undefined): void{
    this.selections[name] = defaultValue
    let found = this.filters.find((filter:any) => {return 'name' in filter && filter.name === name})

    if (found === undefined) {
      this.filters.push({ name, type, ...properties })
    } else {
      Object.assign(found, { type, ...properties })
    }
  }

  public getFilterDefinition () {
    return this.filters
  }

  public getFilterSelections () {
    return this.selections
  }

  private promiseList (): any {
    return this.mappers.map((mapping:any) => {
      return mapping.promise()
    })
  }

  public ready () {
    return new Promise((resolve, reject) => {
      Promise.all(this.promiseList()).then(values => {
        resolve({ selections: this.getFilterSelections(), filters: this.getFilterDefinition() })
      })
    })
  }
}
