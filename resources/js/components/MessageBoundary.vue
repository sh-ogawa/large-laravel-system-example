<template>
  <div>
    <section v-if="occurredMessage">
      <message-boundary-row
        v-for="(message, key) in messages"
        :key="key"
        class="message is-info m-15"
        :notify-key="key"
        :message="message"
        @notify-delete="handleDelete"
      />
    </section>
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import MessageBoundaryRow from '@/components/MessageBoundaryRow'
import { EVENT_HUB_NAME } from '@/helpers/promise'

export default {
  name: 'MessageBoundary',
  components: { MessageBoundaryRow },
  data () {
    return {
      messages: {}
    }
  },
  computed: {
    occurredMessage: function () {
      return Object.keys(this.messages).length > 0
    }
  },
  mounted () {
    this.$eventHub.$on(EVENT_HUB_NAME, (value) => {
      Object.keys(value).forEach(key => {
        this.$set(this.messages, key, value[key])
      })
    })
  },
  methods: {
    handleDelete: function (key) {
      Vue.delete(this.messages, key)
    }
  }
}
</script>

<style scoped>

</style>
