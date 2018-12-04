import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import Vuetify from 'vuetify'
// import 'vuetify/src/stylus/app.styl'
import './assets/utk.styl'
// import 'vuetify/dist/vuetify.min.css'
import { theme } from './styles'

const requireComponent = require.context(
  './components',
  true,
  /\w+\.(vue|js)$/
)

Vue.use(Vuetify, {
  iconfont: 'md',
  theme
})

requireComponent.keys().forEach(filename => {
  const componentConfig = requireComponent(filename)

  const componentName = upperFirst(
    camelCase(
      // Strip the leading `./` and extension from the filename
      filename.replace(/^\.\/(.*)\.\w+$/, '$1')
    )
  )

  // Register component globally
  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
})
