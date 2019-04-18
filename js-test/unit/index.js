import Vue from 'vue'

Vue.config.productionTip = false

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', true, /\.spec$/)
testsContext.keys().forEach(testsContext)

const srcContext = require.context('../../resources/js/', true, /^(?=^\.\/(?!.*(?:app|bootstrap)).*(\.js)?$)(?=^\.\/(?!.*).*(\.md)?$)/)
srcContext.keys().forEach(srcContext)
