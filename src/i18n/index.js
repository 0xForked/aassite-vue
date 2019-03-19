import Vue from 'vue'
import VueI18n from 'vue-i18n'

import enUS from './en-us/'
import idID from './id-id/'

Vue.use(VueI18n)

export default new VueI18n({
    locale: 'en-us',
    fallbackLocale: 'en-us',
    messages: {
        'en-us': enUS,
        'id-id': idID
    }
})