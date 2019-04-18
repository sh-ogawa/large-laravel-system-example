import { mount, shallowMount } from '@vue/test-utils'
import LoginForm from '@/components/molecules/LoginForm'
import { setupForForm } from '../../setup'

describe('LoginForm', () => {
  describe('props', () => {
    describe('loginForm', () => {
      describe('デフォルト', () => {
        it('デフォルトの入力値になること', () => {
          const generalOption = setupForForm()
          const wrapper = mount(LoginForm, Object.assign({}, generalOption, {
            propsData: {
              actionUrl: '/auth/login'
            }
          }))
          expect(wrapper.props().loginForm).to.eql({
            loginId: '', password: ''
          })
          expect(wrapper.vm.loginId).to.equal('')
          expect(wrapper.vm.password).to.equal('')
        })
      })
      describe('入力', () => {
        it('設定した入力値になること', () => {
          const generalOption = setupForForm()
          const wrapper = mount(LoginForm, Object.assign({}, generalOption, {
            propsData: {
              actionUrl: '/auth/login',
              loginForm: {
                loginId: 'kroyeeg', password: 'hoge'
              }
            }
          }))
          expect(wrapper.props().loginForm).to.eql({
            loginId: 'kroyeeg', password: 'hoge'
          })
          expect(wrapper.vm.loginId).to.equal('kroyeeg')
          expect(wrapper.vm.password).to.equal('hoge')
        })
      })
    })
  })
  describe('validation', () => {
    describe('エラー', () => {
      const generalOption = setupForForm()
      const wrapper = shallowMount(LoginForm, Object.assign({}, generalOption, {
        propsData: {
          actionUrl: '/auth/login'
        }
      }))
      it('必須', async () => {
        await wrapper.vm.$validator.validateAll()
        wrapper.vm.$nextTick(() => {
          expect(wrapper.vm.$validator.errors.firstByRule('username', 'required')).to.equal('usernameは必須項目です')
          expect(wrapper.vm.$validator.errors.firstByRule('password', 'required')).to.equal('passwordは必須項目です')
          expect(wrapper.vm.disableLoginAction).to.equal(true)
        })
      })
    })
    describe('正常', () => {
      const generalOption = setupForForm()
      const wrapper = shallowMount(LoginForm, Object.assign({}, generalOption, {
        propsData: {
          actionUrl: '/auth/login'
        }
      }))
      it('正常', async () => {
        wrapper.setData({
          loginId: 'kroyeeg',
          password: 'hoge'
        })
        await wrapper.vm.$validator.validateAll()
        wrapper.vm.$nextTick(() => {
          expect(wrapper.vm.$validator.errors.has('username')).to.equal(false)
          expect(wrapper.vm.$validator.errors.has('password')).to.equal(false)
          expect(wrapper.vm.disableLoginAction).to.equal(false)
        })
      })
    })
  })
})
