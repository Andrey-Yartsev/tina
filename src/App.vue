<template>
  <div>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="columns" id="mail-app">
      <div class="column is-4 messages hero is-fullheight" id="message-feed"
           :class="{'mobile-hide': mobileHideLeftColumn}"
      >
        <LeftColumn/>
      </div>
      <div class="column is-8 message hero is-fullheight message-body" id="message-pane"
           :class="{'mobile-hide': mobileHideRightColumn}"
      >
        <router-link to="/" class="logo"><img src="/img/logo.png" alt="T"></router-link>
        <RouterView />
        <div class="copy"><a href="https://masted.ru" target="_blank">© masted</a></div>
      </div>
    </div>
  </div>
</template>

<script>
import Messages from './components/Messages.vue'
import LeftColumn from "@/components/LeftColumn.vue";
export default {
  components: {LeftColumn, Messages},
  computed: {
    mobileHideLeftColumn() {
      if (this.$route.name === 'types' || this.$route.name === 'sev' || this.$route.name === 'message') {
        return true
      }
      return false
    },
    mobileHideRightColumn() {
      return this.$route.name === 'home' || this.$route.name === 'home-type'
    }
  }
}
</script>

<style lang="scss" src="@/assets/css/main.sass"></style>
