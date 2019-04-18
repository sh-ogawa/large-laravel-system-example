
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vue from 'vue'
import VeeValidate from '@/validation'
import VueI18n from 'vue-i18n'
import validationMessages from 'vee-validate/dist/locale/ja'
import EventHub from '@/plugins/EventHub'
import Locales from '@/localization/vue-i18n-locales.generated'
import { createStore } from '@/store'
import { csrfToken } from '@/bootstrap'

window.Vue = Vue
Vue.use(EventHub)

Vue.config.devtools = true
Vue.config.performance = true
// errorCapturedを使うから、errorHandlerを定義する
Vue.config.errorHandler = (err, vm, info) => {
  console.error('errorHandler err:', err)
  console.error('errorHandler vm:', vm)
  console.error('errorHandler info:', info)
}

// 国際化対応
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'ja',
  silentTranslationWarn: true,
  messages: Locales
})

const ja = Object.assign(validationMessages, {
  // 'attributes': Locales.ja
})

// ja.messages = Object.assign(ja.messages, Locales.ja.validation)

Vue.use(VeeValidate, {
  i18n,
  dictionary: {
    ja: ja
  },
  inject: false
})

Vue.component('message-boundary', require('@/components/MessageBoundary').default)
Vue.component('error-boundary', require('@/components/ErrorBoundary').default)
Vue.component('login-form', require('@/components/molecules/LoginForm').default)

const store = createStore()

window.app = new Vue({
  el: '#app',
  store,
  i18n,
  data: {
    token: csrfToken
  }
})
