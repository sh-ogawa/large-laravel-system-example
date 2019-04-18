<template>
  <div>
    <section v-if="occurredError">
      <error-boundary-row
        v-for="(error, key) in errors"
        :key="key"
        class="message is-danger m-15"
        :notify-key="key"
        :error="error"
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
import ErrorBoundaryRow from '@/components/ErrorBoundaryRow'
export default {
  name: 'ErrorBoundary',
  components: { ErrorBoundaryRow },
  data () {
    return {
      errors: {}
    }
  },
  errorCaptured (err, vm, info) {
    this.errors = Object.assign({}, this.errors, JSON.parse(err.message))
    return false
  },
  computed: {
    occurredError: function () {
      return Object.keys(this.errors).length > 0
    }
  },
  methods: {
    handleDelete: function (key) {
      Vue.delete(this.errors, key)
    }
  }
}
</script>

<style scoped>

</style>
