<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <div class="control">
      <input
        v-model="newValue"
        class="input"
        v-bind="$attrs"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyInput',
  props: {
    value: [Number, String],
    label: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      newValue: this.value
    }
  },
  watch: {
    newValue: function (newValue) {
      this.$emit('input', newValue)
    }
  }
}
</script>

<style scoped>

</style>
