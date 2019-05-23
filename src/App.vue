<template>
  <div
    id="app"
    class="container"
  >
    <div class="row">
      <div class="col col-md-3">
        <FilterContainer
          v-model="selections"
          :filters="filters"
        />
      </div>
      <div class="col col-md-8">
        <pre>{{ selections }}</pre>
        <pre>{{ filters }}</pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import * as components from './components'
import Mapper from '@/mapper/Mapper'

export default Vue.extend({
  name: 'App',
  components,
  data () {
    return {
      mapper: {},
      selections: {},
      filters: []
    }
  },
  mounted () {
    /*
    this.mapper = new Mapper('Entity').ready().then(({ selections, filters }) => {
      this.selections = selections
      this.filters = filters
    })
    */
    this.mapper = new Mapper('Entity').ready().then((value:any) => {
      this.selections = value.selections
      this.filters = value.filters
    })
  }
})
</script>

<style>
</style>
