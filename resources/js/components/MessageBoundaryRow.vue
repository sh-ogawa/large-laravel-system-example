<template>
  <div>
    <div class="message-body">
      <div class="level">
        <div class="level-left">
          <ul>
            <li
              v-for="(msg, index) in message"
              :key="index"
            >
              {{ msg }}
            </li>
          </ul>
        </div>
        <div class="level-right">
          <button
            type="button"
            class="delete"
            @click="clickDelete"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageBoundaryRow',
  props: {
    notifyKey: {
      type: String,
      required: true
    },
    message: {
      type: Array,
      required: true
    }
  },
  methods: {
    clickDelete: function () {
      this.$emit('notify-delete', this.notifyKey)
    }
  }
}
</script>

<style scoped>

</style>
