import { createLocalVue } from '@vue/test-utils'
import VueI18n from 'vue-i18n'
import Locales from '@/localization/vue-i18n-locales.generated'
import VeeValidate from '@/validation'
import validationMessages from 'vee-validate/dist/locale/ja'

/**
 * 入力画面向けセットアップ
 * @param localVueOption Vue.extendに渡す形式のオプションを渡す
 * @returns {{localVue: VueConstructor, i18n: VueI18n, stubs: {transition: boolean}}}
 */
export const setupForForm = function (localVueOption = {}) {
  let localVue = createLocalVue()
  if (Object.keys(localVueOption).length > 0) {
    localVue = localVue.extend(localVueOption)
  }

  localVue.use(VueI18n)

  const i18n = new VueI18n({
    locale: 'ja',
    silentTranslationWarn: true,
    messages: Locales
  })

  const ja = Object.assign(validationMessages, {
    'attributes': Locales.ja// .form
  })

  localVue.use(VeeValidate, {
    i18n,
    dictionary: {
      ja: ja
    },
    inject: false
  })
  return {
    localVue,
    i18n,
    stubs: {
      transition: false
    },
    sync: false
  }
}
