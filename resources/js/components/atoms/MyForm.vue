<template>
  <form
    v-if="submitHandler === null"
    :action="action"
    method="post"
  >
    <input
      type="hidden"
      name="_token"
      :value="$root.$data.token"
    >
    <input
      type="hidden"
      name="_method"
      :value="method"
    >
    <slot />
  </form>
  <form
    v-else
    :action="action"
    method="post"
    @submit.prevent="submitHandler"
  >
    <input
      type="hidden"
      name="_token"
      :value="$root.$data.token"
    >
    <input
      type="hidden"
      name="_method"
      :value="method"
    >
    <slot />
  </form>
</template>

<script>
export default {
  name: 'MyForm',
  props: {
    action: {
      type: String,
      required: true
    },
    method: {
      type: String,
      default: 'post'
    },
    submitHandler: {
      type: Function,
      default: null
    }
  }
}
</script>

<style scoped>

</style>
