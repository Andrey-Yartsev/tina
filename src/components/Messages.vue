<template>
  <div class="action-buttons">
    <div class="control is-grouped">
      <a class="button is-small shuffle" @click="shuffle" v-if="showShuffle"><i class="fa fa-random"></i></a>
      <input v-model="filter" class="search" placeholder="поиск">
      &nbsp;&nbsp;&nbsp;<router-link to="/types">категории <span>🎆</span></router-link>
    </div>
  </div>
  <div class="inbox-messages" id="inbox-messages">
    <div v-for="(msg, index) in messages" class="card" v-bind:id="'msg-card-'+index"
         v-bind:data-preview-id="index">
      <Message :msg="msg"/>
    </div>
  </div>
</template>

<script>
import messages from '../data/messages.json'
import Message from './Message.vue'

function shuffle(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

export default {
  components: {Message},
  data() {
    return {
      _messages: [],
      filter: ''
    }
  },
  computed: {
    showShuffle() {
      return this.$route.name !== 'home-type'
    },
    messages() {
      let messages = this._messages
      if (this.type) {
        messages = this._messages.filter(v => {
          return v.type === this.type
        })
      }
      if (this.filter.length < 5) {
        return messages
      }
      const re = new RegExp(this.filter, 'i')
      return messages.filter(v => {
        return v.text.match(re)
      })
    },
    type() {
      const type = this.$route.params.type
      if (!type) {
        return
      }
      return type.replace(/\|/, '/')
    }
  },
  methods: {
    shuffle() {
      shuffle(this.messages)
    }
  },
  created() {
    this._messages = messages
    this.shuffle()
  }
}
</script>
