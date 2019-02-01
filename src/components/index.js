import header from './header/index.vue'

const install = function (Vue) {
    Vue.component(header.name, header)
}

export default install