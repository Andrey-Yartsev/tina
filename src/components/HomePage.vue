<template>
  <div class="home">
    <div class="categories" :class="{ hide: hideLeft }">
      <router-link to="/">сбросить</router-link>
      <br><br>
      <router-link
          v-for="v in types"
          :to="'/home/' + v.tag"
          :style="'display: block; font-size:' + this.fontSize(v[1]) + 'px'">
        {{ v.tag }} {{ v.imo }} <b>{{ v.value }}</b>
      </router-link>
    </div>
    <div class="sev" :class="{ wide: hideLeft }">
      <div class="head">
        <a href="" @click.prevent="closeSev" v-if="hideLeft">свернуть</a><br><br>
        <img src="/img/sev.png" v-if="hideLeft" style="cursor: default">
      </div>
      <div class="items">
        <img :src="v" v-for="v in images" @click.prevent="clickSev">
      </div>
    </div>
  </div>
</template>

<script>
import types from './types.js'
import sev from '../data/sev.json'

export default {
  data() {
    let images = sev
    images = images.slice(1, images.length)
    return {
      types: [],
      images,
      hideLeft: this.$route.name === 'sev',
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
    },
    closeSev() {
      this.hideLeft = false
    },
    clickSev() {
      if (!this.hideLeft) {
        this.hideLeft = true
      } else {
        window.location = 'https://nacmp.ru/reestr-chlenov-naczionalnoj-assocziaczii-speczialistov-metafizicheskih-praktik/'
      }
    }
  }
}
</script>