<template>
  <my-form
    :action="actionUrl"
    :method="httpMethod"
    class="form-login"
  >
    <my-input
      v-model="loginId"
      v-validate.initial="'required'"
      title="ID"
      type="text"
      name="username"
      placeholder=""
      maxlength="20"
    />

    <my-input
      v-model="password"
      v-validate.initial="'required'"
      title="ID"
      type="password"
      name="password"
      maxlength="20"
    />

    <div class="field">
      <div class="control">
        <button
          type="submit"
          class="button is-primary is-large is-fullwidth"
          :disabled="disableLoginAction"
        >
          ログイン
        </button>
      </div>
    </div>
  </my-form>
</template>

<script>
import MyForm from '@/components/atoms/MyForm'
import MyInput from '@/components/molecules/MyInput'

export default {
  name: 'LoginForm',
  components: { MyInput, MyForm },
  inject: ['$validator'],
  props: {
    loginForm: {
      type: Object,
      default: function () {
        return { loginId: '', password: '' }
      }
    },
    actionUrl: {
      type: String,
      required: true
    },
    httpMethod: {
      type: String,
      default: 'post'
    }
  },
  data () {
    return {
      loginId: this.loginForm.loginId,
      password: this.loginForm.password
    }
  },
  computed: {
    disableLoginAction () {
      return this.$validator.errors.count() > 0
    }
  },
  created () {
    this.$store.dispatch('auth/addUrls', {
      login: this.actionUrl
    })
  }
}
</script>

<style scoped>
</style>
