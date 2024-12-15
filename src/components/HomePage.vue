<template>
  <div class="home">
    <router-link to="/">сбросить</router-link><br><br>
    <router-link
        v-for="v in types"
        :to="'/home/' + v.tag"
        :style="'display: block; font-size:' + this.fontSize(v[1]) + 'px'">
      {{ v.tag }} {{ v.imo }} <b>{{ v.value }}</b>
    </router-link>
  </div>
</template>

<script>
import types from './types.js'

export default {
  data() {
    return {
      types: []
    }
  },
  created() {
    this.types = types().map(v => {
      v.tag = v.tag.replace(/\//, '|')
      return v
    })
  },
  methods: {
    fontSize(value) {
      return null
    }
  }
}
</script>