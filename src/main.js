import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'

import HomePage from './components/HomePage.vue'
import MessagePage from './components/MessagePage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/types', name: 'types', component: HomePage }, // only mobile
  { path: '/home/:type', name: 'home-type', component: HomePage },
  { path: '/message/:id', name: 'message', component: MessagePage },
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

const app = createApp(App)

app.use(router)
app.mount('#app')
