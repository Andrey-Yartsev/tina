<template>
  <router-link to="/">
    ❮❮❮❮❮❮
    <span class="mobile-hide">Вернуться к категориям</span>
  </router-link> 😁🫶🏼
  <div class="box message-preview">
    <div class="top">
      <div class="person">
        <div class="avatar">
          <img :src="'/img/avatar/' + msg.nick + '.png'">
        </div>
        <div class="address">
          <div class="name"><a :href="'https://t.me/s/' + msg.nick" target="_blank">{{ msg.nick }}</a></div>
        </div>
      </div>
      <hr>
      <div class="content" v-html="content">
      </div>
    </div>
  </div>
</template>

<script>
import messages from '../data/messages.json'

export default {
  watch: {
    $route() {
      this.load()
    }
  },
  data() {
    return {
      msg: {}
    }
  },
  methods: {
    load() {
      this.msg = messages.find(v => v.nick === this.$route.params.id)
    }
  },
  created() {
    this.load()
  },
  computed: {
    content() {
      return this.msg.text.replace(/\n/g, '<br>')
    }
  }
}
</script>