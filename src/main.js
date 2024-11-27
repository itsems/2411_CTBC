import './assets/scss/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VCalendar from 'v-calendar'
import 'v-calendar/style.css'

import App from './App.vue'
import route from './route'

import PageTitle from '@/components/PageTitle.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import { ROUTE_NAME } from '@/constants/page'

import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(createPinia())
app.use(route)
app.use(VCalendar, {})

// Global customized components
app.component('PageTitle', PageTitle).component('Breadcrumb', Breadcrumb)

// Global variables
app.provide('ROUTE_NAME', ROUTE_NAME)

app.mount('#app')
AOS.init({
  duration: 700
})