import Vue from 'vue'

const componentList = [
    'EButton',
]

componentList.forEach(item => {
    Vue.component(item, () => import(`./${item}`));
})