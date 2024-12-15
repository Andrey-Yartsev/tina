<template>
  <router-link class="card-content" :to="'/message/' + msg.nick">
    <div class="msg-subject">
      <img :src="'/img/avatar/' + msg.nick + '.png'">
      <span class="msg-subject">
        {{ msg.nick }}
      </span>
    </div>
    <div class="msg-type">{{ type }}</div>
  </router-link>
</template>

<script>
import typesImo from "@/components/typesImo.js";

export default {
  props: { msg: Object },
  created() {
    //console.log(this.msg)
        //console.log(this.msg.type)
  },
  computed: {
    type() {
      return (this.msg.type ? this.msg.type : '') + ' ' +
          (typesImo[this.msg.type] ? typesImo[this.msg.type] : '')
    }
  }
}
</script>
